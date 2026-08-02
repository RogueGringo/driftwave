#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
#  topo — Topological Project Intelligence CLI
#  "The wavefront pipeline applied to itself"
#
#  Usage:
#    ./topo.sh scan        L0: Raw artifact ingestion
#    ./topo.sh cluster     L1: Persistent clustering of changes
#    ./topo.sh synthesize  L2: Documentation synthesis
#    ./topo.sh validate    L3: Sheaf consistency check
#    ./topo.sh serve       Host the docs-site
#    ./topo.sh figure-it-out   Full pipeline: L0→L1→L2→L3→serve
# ═══════════════════════════════════════════════════════════════

# No `-e`: this runs as a SessionStart hook and must degrade gracefully, never
# hard-fail a user's session. The defensive `|| echo` / `[ -d ]` guards below do
# the error handling; pipefail + `-e` previously turned a missing optional path
# into an exit-128 abort (issue #8).
set -uo pipefail

# ─── Design Tokens (Terminal) ───
RESET="\033[0m"
BOLD="\033[1m"
DIM="\033[2m"
AMBER="\033[38;2;208;138;40m"
TEAL="\033[38;2;69;168;176m"
GREEN="\033[38;2;109;170;69m"
RED="\033[38;2;231;76;60m"
FAINT="\033[38;2;84;79;62m"
BG_SURFACE="\033[48;2;22;20;13m"

# Paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_ROOT="$(dirname "$SCRIPT_DIR")"
# Resolve the project being worked in. As a Claude Code hook this is provided as
# CLAUDE_PROJECT_DIR; run manually, fall back to the current repo's git toplevel,
# then the cwd. The old logic assumed a monorepo layout (<project>/plugins/
# driftwave) and pointed two dirs above the plugin — a non-git path in standalone
# installs, which made the scan abort under `set -e` (issue #8).
PROJECT_ROOT="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
DOCS_SITE="$PLUGIN_ROOT/docs-site"
# Claude Code stores per-project memory under a slugified absolute project path
# (path separators and drive colons replaced by '-'). Derive it from PROJECT_ROOT
# so this works on any machine; override with DW_MEMORY_DIR if your layout differs.
if [ -n "${DW_MEMORY_DIR:-}" ]; then
  MEMORY_DIR="$DW_MEMORY_DIR"
else
  # Slugify the project path (/, \, : -> -) to match Claude Code's per-project
  # memory slug. sed's bracket expression [/\\:] is used rather than bash
  # parameter expansion because backslash matching in ${var//\\/-} is
  # inconsistent across bash builds (MSYS bash needs \\\\, POSIX bash needs \\),
  # whereas the sed form is portable. Override with DW_MEMORY_DIR if it differs.
  _proj_slug="$(printf '%s' "$PROJECT_ROOT" | sed 's#[/\\:]#-#g')"
  MEMORY_DIR="$HOME/.claude/projects/${_proj_slug}/memory"
fi
# Per-project persistent state (matches scripts/dw_common.py state_dir()).
# Never PLUGIN_ROOT: the hook used to rewrite a committed file inside the
# installed plugin's git tree every session. Never /tmp: wiped on reboot,
# shared across projects.
STATE_DIR="${DW_STATE_DIR:-$PROJECT_ROOT/.dw}"
ARTIFACT_LOG="$STATE_DIR/topo-scan.json"

# ─── Helpers ───
banner() {
  echo ""
  echo -e "${AMBER}${BOLD}  ┌─────────────────────────────────────────┐${RESET}"
  echo -e "${AMBER}${BOLD}  │${RESET}  ${TEAL}~${RESET} ${BOLD}driftwave${RESET} ${DIM}topological intelligence${RESET}  ${AMBER}${BOLD}│${RESET}"
  echo -e "${AMBER}${BOLD}  └─────────────────────────────────────────┘${RESET}"
  echo ""
}

layer_header() {
  local layer=$1 name=$2 color=$3
  echo -e "  ${color}${BOLD}[$layer]${RESET} ${BOLD}$name${RESET}"
  echo -e "  ${FAINT}$(printf '%.0s─' {1..45})${RESET}"
}

ok() { echo -e "  ${GREEN}  ✓${RESET} $1"; }
warn() { echo -e "  ${AMBER}  ◆${RESET} $1"; }
fail() { echo -e "  ${RED}  ✗${RESET} $1"; }
info() { echo -e "  ${TEAL}  →${RESET} $1"; }
dim() { echo -e "  ${FAINT}    $1${RESET}"; }

# ═══════════════════════════════════════════
# L0: RAW ARTIFACT SCAN (NO_AVERAGING)
# ═══════════════════════════════════════════
cmd_scan() {
  layer_header "L0" "Raw Artifact Scan" "$FAINT"
  echo ""

  # Git state — raw, unaveraged
  local git_branch git_status git_log_count untracked modified
  cd "$PROJECT_ROOT"

  # `git rev-parse --abbrev-ref HEAD` on an unborn HEAD prints "HEAD" AND
  # exits 128, so `|| echo` used to yield the two-line value "HEAD\ndetached"
  # — a raw newline inside the JSON manifest (strictly invalid). show-current
  # prints nothing in that case; sanitize for JSON embedding either way.
  git_branch=$(git branch --show-current 2>/dev/null | head -n1)
  [ -z "$git_branch" ] && git_branch="detached"
  git_branch=$(printf '%s' "$git_branch" | tr -d '\000-\037' | sed 's/\\/\\\\/g; s/"/\\"/g')
  info "Branch: ${BOLD}$git_branch${RESET}"

  untracked=$(git ls-files --others --exclude-standard 2>/dev/null | wc -l | tr -d ' ')
  modified=$(git diff --name-only 2>/dev/null | wc -l | tr -d ' ')
  git_log_count=$(git rev-list --count HEAD 2>/dev/null || echo "0")

  if [ "$modified" -gt 0 ]; then
    warn "Modified files: ${BOLD}$modified${RESET}"
  else
    ok "Working tree clean"
  fi
  [ "$untracked" -gt 0 ] && warn "Untracked files: ${BOLD}$untracked${RESET}"
  dim "Total commits: $git_log_count"

  # Entropy gate: check variance in recent changes
  local recent_files
  recent_files=$(git diff --name-only HEAD~3..HEAD 2>/dev/null | wc -l | tr -d ' ')
  if [ "$recent_files" -eq 0 ]; then
    warn "ENTROPY GATE: Zero variance in last 3 commits — REPROBE recommended"
  else
    ok "Entropy gate passed: $recent_files files changed in last 3 commits"
  fi

  echo ""

  # Scan all artifact categories — preserve each as a distinct point
  info "Scanning artifact categories..."

  local skill_count=0 memory_count=0 framework_count=0 test_count=0 script_count=0 image_count=0

  # Skills
  if [ -d "$PLUGIN_ROOT/skills" ]; then
    skill_count=$(find "$PLUGIN_ROOT/skills" -name "SKILL.md" 2>/dev/null | wc -l | tr -d ' ')
  fi
  ok "Skills: ${BOLD}$skill_count${RESET}"

  # Memory files
  if [ -d "$MEMORY_DIR" ]; then
    memory_count=$(find "$MEMORY_DIR" -name "*.md" ! -name "MEMORY.md" 2>/dev/null | wc -l | tr -d ' ')
  fi
  ok "Memory files: ${BOLD}$memory_count${RESET}"

  # Docs (any top-level docs dir — no assumed monorepo layout)
  if [ -d "$PROJECT_ROOT/docs" ]; then
    framework_count=$(find "$PROJECT_ROOT/docs" -type f 2>/dev/null | wc -l | tr -d ' ')
  fi
  ok "Docs: ${BOLD}$framework_count${RESET}"

  # Tests
  if [ -d "$PROJECT_ROOT/tests" ]; then
    test_count=$(find "$PROJECT_ROOT/tests" -name "*.py" 2>/dev/null | wc -l | tr -d ' ')
  fi
  ok "Test files: ${BOLD}$test_count${RESET}"

  # Scripts
  if [ -d "$PROJECT_ROOT/scripts" ]; then
    script_count=$(find "$PROJECT_ROOT/scripts" -name "*.py" 2>/dev/null | wc -l | tr -d ' ')
  fi
  ok "Scripts: ${BOLD}$script_count${RESET}"

  # Images
  if [ -d "$PROJECT_ROOT/assets" ]; then
    image_count=$(find "$PROJECT_ROOT/assets" -name "*.jpg" -o -name "*.png" 2>/dev/null | wc -l | tr -d ' ')
  fi
  ok "Asset images: ${BOLD}$image_count${RESET}"

  # Write raw artifact manifest (NO_AVERAGING — each point preserved)
  mkdir -p "$STATE_DIR" 2>/dev/null
  cat > "$ARTIFACT_LOG" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "kind": "topo-scan",
  "branch": "$git_branch",
  "commits": $git_log_count,
  "modified": $modified,
  "untracked": $untracked,
  "artifacts": {
    "skills": $skill_count,
    "memory": $memory_count,
    "docs": $framework_count,
    "tests": $test_count,
    "scripts": $script_count,
    "images": $image_count
  },
  "entropy": $recent_files
}
EOF

  echo ""
  ok "L0 scan manifest written to ${DIM}$ARTIFACT_LOG${RESET}"
}

# ═══════════════════════════════════════════
# L1: PERSISTENT CLUSTERING
# ═══════════════════════════════════════════
cmd_cluster() {
  layer_header "L1" "Persistent Clustering" "$TEAL"
  echo ""

  if [ ! -f "$ARTIFACT_LOG" ]; then
    fail "No L0 artifacts found. Run ${BOLD}topo scan${RESET} first."
    fail "UPWARD_FLOW violation: cannot skip L0."
    return 1
  fi

  info "Clustering changes by persistence..."

  # Identify which clusters have the longest bars (most persistent changes)
  cd "$PROJECT_ROOT"

  echo ""
  echo -e "  ${TEAL}${BOLD}  Persistent Clusters (H₀)${RESET}"
  echo ""

  # Cluster recent changes by top-level path, derived from the repo itself —
  # no assumed layout. (The 0.1.x version hard-coded the author's old
  # monorepo directories, so on any other repo every bar read "stable".)
  local clusters=0
  local area count
  while read -r count area; do
    [ -z "$area" ] && continue
    ok "${area}: ${BOLD}$count${RESET} file(s) changed ${DIM}(long bar — active)${RESET}"
    clusters=$((clusters + 1))
  done < <(git diff --name-only HEAD~5..HEAD 2>/dev/null \
             | awk -F/ 'NF>1 {print $1"/"} NF==1 {print "(root)"}' \
             | sort | uniq -c | sort -rn | head -8 | awk '{print $1, $2}')

  if [ "$clusters" -eq 0 ]; then
    dim "No changes in the last 5 commits — all areas stable"
  fi

  echo ""

  # Routing decision
  if [ "$clusters" -eq 0 ]; then
    warn "ALL BARS SHORT — no persistent clusters detected"
    warn "Route: ${BOLD}REPROBE${RESET} — return to L0 and collect more artifacts"
  elif [ "$clusters" -gt 3 ]; then
    warn "Waypoints > 3 — Route: ${BOLD}SPLIT${RESET} — decompose into independent sub-tasks"
  else
    ok "Route: ${BOLD}ASCEND${RESET} — $clusters persistent cluster(s) identified"
  fi
}

# ═══════════════════════════════════════════
# L2: DOCUMENTATION SYNTHESIS
# ═══════════════════════════════════════════
cmd_synthesize() {
  layer_header "L2" "Documentation Synthesis" "$AMBER"
  echo ""

  if [ ! -f "$ARTIFACT_LOG" ]; then
    fail "UPWARD_FLOW violation: run ${BOLD}topo scan${RESET} then ${BOLD}topo cluster${RESET} first."
    return 1
  fi

  info "Checking documentation freshness (reporting only — nothing outside .dw/ is ever written)..."
  echo ""

  cd "$PROJECT_ROOT"

  # Report staleness of top-level markdown docs; never create anything.
  local doc
  for doc in README.md CHANGELOG.md docs/*.md; do
    [ -f "$doc" ] || continue
    local doc_date now age
    doc_date=$(stat -c %Y "$doc" 2>/dev/null || stat -f %m "$doc" 2>/dev/null || echo "0")
    now=$(date +%s)
    age=$(( (now - doc_date) / 86400 ))
    if [ "$age" -gt 30 ]; then
      warn "$doc is ${BOLD}${age}d old${RESET}"
    else
      ok "$doc (${age}d old)"
    fi
  done

  # Check memory index
  if [ -f "$MEMORY_DIR/MEMORY.md" ]; then
    local mem_entries
    # `|| echo 0` double-counts here (grep -c prints "0" AND exits 1 on no
    # match, yielding "0\n0") — same bug as the axiom_count fix below.
    mem_entries=$(grep -c '\.md' "$MEMORY_DIR/MEMORY.md" 2>/dev/null || true)
    mem_entries=${mem_entries:-0}
    local mem_files
    mem_files=$(find "$MEMORY_DIR" -name "*.md" ! -name "MEMORY.md" 2>/dev/null | wc -l | tr -d ' ')

    if [ "$mem_entries" -ne "$mem_files" ]; then
      warn "MEMORY.md index ($mem_entries entries) doesn't match files ($mem_files) — Gini slope negative"
      warn "Route: ${BOLD}REPROBE${RESET} — memory index needs sync"
    else
      ok "Memory index consistent: $mem_entries entries, $mem_files files"
    fi
  fi

  # Check skills have valid frontmatter
  echo ""
  info "Skill frontmatter validation..."
  local skill_errors=0
  for skill in "$PLUGIN_ROOT"/skills/*/SKILL.md; do
    if [ -f "$skill" ]; then
      local skill_name
      skill_name=$(basename "$(dirname "$skill")")
      if grep -q "^---" "$skill" && grep -q "^name:" "$skill" && grep -q "^description:" "$skill"; then
        ok "$skill_name — frontmatter valid"
      else
        fail "$skill_name — MISSING frontmatter (name/description required)"
        skill_errors=$((skill_errors + 1))
      fi
    fi
  done

  echo ""
  if [ "$skill_errors" -gt 0 ]; then
    fail "Gini slope: ${BOLD}NEGATIVE${RESET} — $skill_errors skill(s) with broken frontmatter"
    warn "Route: ${BOLD}REPROBE${RESET}"
  else
    ok "Gini slope: ${BOLD}POSITIVE${RESET} — all documentation consistent"
    ok "Route: ${BOLD}ASCEND${RESET} to L3"
  fi
}

# ═══════════════════════════════════════════
# L3: SHEAF CONSISTENCY VALIDATION
# ═══════════════════════════════════════════
cmd_validate() {
  layer_header "L3" "Sheaf Consistency Validation" "$GREEN"
  echo ""

  info "Checking global consistency — ker(L_F) convergence..."
  echo ""

  local errors=0

  # Check referenced images exist (only when the project has an index.html —
  # the 0.1.x version assumed one and spewed grep errors everywhere else)
  cd "$PROJECT_ROOT"
  if [ -f "index.html" ]; then
    info "Image reference validation..."
    while IFS= read -r img; do
      local imgpath="${img#./}"
      if [ ! -f "$imgpath" ]; then
        fail "Missing image: $imgpath"
        errors=$((errors + 1))
      fi
    done < <(grep -oP 'src="./assets/[^"]+' index.html 2>/dev/null | sed 's/src="//')
    if [ "$errors" -eq 0 ]; then
      ok "All image references resolve"
    fi
  fi

  # The pin and every schema must be valid strict JSON — the vocabularies
  # dw_validate enforces live there, so a broken pin fails closed loudly.
  local jf
  for jf in "$PLUGIN_ROOT/driftwave.pin.json" "$PLUGIN_ROOT"/schemas/*.json "$PLUGIN_ROOT/rules/standing_rules.json"; do
    [ -f "$jf" ] || continue
    if python3 -c "import json,sys; json.load(open(sys.argv[1], encoding='utf-8'))" "$jf" 2>/dev/null || python -c "import json,sys; json.load(open(sys.argv[1], encoding='utf-8'))" "$jf" 2>/dev/null; then
      :
    else
      fail "$(basename "$jf") is INVALID JSON"
      errors=$((errors + 1))
    fi
  done
  ok "pin + schemas + standing rules parse as strict JSON"

  # Check plugin.json is valid JSON
  local plugin_json="$PLUGIN_ROOT/.claude-plugin/plugin.json"
  if [ -f "$plugin_json" ]; then
    if python3 -c "import json,sys; json.load(open(sys.argv[1], encoding='utf-8'))" "$plugin_json" 2>/dev/null || python -c "import json,sys; json.load(open(sys.argv[1], encoding='utf-8'))" "$plugin_json" 2>/dev/null; then
      ok "plugin.json is valid JSON"
    else
      fail "plugin.json is INVALID JSON"
      errors=$((errors + 1))
    fi
  fi

  # Check hooks.json
  local hooks_json="$PLUGIN_ROOT/hooks/hooks.json"
  if [ -f "$hooks_json" ]; then
    if python3 -c "import json,sys; json.load(open(sys.argv[1], encoding='utf-8'))" "$hooks_json" 2>/dev/null || python -c "import json,sys; json.load(open(sys.argv[1], encoding='utf-8'))" "$hooks_json" 2>/dev/null; then
      ok "hooks.json is valid JSON"
    else
      fail "hooks.json is INVALID JSON"
      errors=$((errors + 1))
    fi
  fi

  # Check all 5 axioms are pinned (the README speaks plain English since
  # 0.1.2 — grepping it for axiom names warned on every session)
  local axiom_count
  # `grep -c || echo 0` double-counts (grep prints "0" AND exits 1 on no match),
  # producing a "0\n0" value; use `|| true` + default for a single clean number.
  axiom_count=$(grep -cE "NO_AVERAGING|UPWARD_FLOW|WAYPOINT_ROUTING|SHAPE_OVER_COUNT|ADAPTIVE_SCALE" "$PLUGIN_ROOT/driftwave.pin.json" 2>/dev/null || true)
  axiom_count=${axiom_count:-0}
  if [ "$axiom_count" -ge 5 ]; then
    ok "All 5 axioms pinned in driftwave.pin.json"
  else
    fail "Only $axiom_count axiom references in driftwave.pin.json"
    errors=$((errors + 1))
  fi

  echo ""

  # Final verdict
  if [ "$errors" -eq 0 ]; then
    echo -e "  ${GREEN}${BOLD}  ═══════════════════════════════════════════${RESET}"
    echo -e "  ${GREEN}${BOLD}  ON-SHELL: All sections in ker(L_F)${RESET}"
    echo -e "  ${GREEN}${BOLD}  Global consistency verified.${RESET}"
    echo -e "  ${GREEN}${BOLD}  ═══════════════════════════════════════════${RESET}"
  else
    echo -e "  ${RED}${BOLD}  ═══════════════════════════════════════════${RESET}"
    echo -e "  ${RED}${BOLD}  OFF-SHELL: $errors obstruction(s) detected${RESET}"
    echo -e "  ${RED}${BOLD}  Surface to human for guidance.${RESET}"
    echo -e "  ${RED}${BOLD}  ═══════════════════════════════════════════${RESET}"
    return 1
  fi
}

# ═══════════════════════════════════════════
# SERVE: Host the docs-site
# ═══════════════════════════════════════════
cmd_serve() {
  layer_header "SERVE" "Hosting docs-site" "$TEAL"
  echo ""

  if [ ! -d "$DOCS_SITE" ]; then
    fail "docs-site not found at $DOCS_SITE"
    return 1
  fi

  cd "$DOCS_SITE"

  # Check if node_modules exist
  if [ ! -d "node_modules/.vite" ] && [ ! -d "node_modules/vite" ]; then
    info "Installing dependencies..."
    npm install --include=dev 2>&1 | tail -1
  fi

  info "Building site..."
  npx vite build 2>&1 | tail -2

  echo ""
  info "Starting preview server..."
  echo -e "  ${AMBER}${BOLD}  http://localhost:4173${RESET}"
  echo ""
  npx vite preview --port 4173 --host
}

# ═══════════════════════════════════════════
# FIGURE-IT-OUT: Full wavefront pipeline
# ═══════════════════════════════════════════
cmd_figure_it_out() {
  banner

  echo -e "  ${AMBER}${BOLD}  @wavefront${RESET} ${DIM}— full pipeline${RESET}"
  echo -e "  ${FAINT}  L0 → L1 → L2 → L3 → SERVE${RESET}"
  echo -e "  ${FAINT}  Shape over count. Trajectory over snapshot.${RESET}"
  echo ""
  echo -e "  ${FAINT}$(printf '%.0s═' {1..45})${RESET}"
  echo ""

  cmd_scan
  echo ""
  cmd_cluster
  echo ""
  cmd_synthesize
  echo ""
  cmd_validate
  echo ""

  echo -e "  ${AMBER}${BOLD}  Waypoint gate passed.${RESET}"
  echo -e "  ${DIM}  W(C) ∈ W_phys — configuration is on-shell.${RESET}"
  echo ""

  # Ask before serving
  echo -e "  ${TEAL}Launch docs-site? [y/N]${RESET} "
  read -r answer
  if [[ "$answer" =~ ^[Yy] ]]; then
    cmd_serve
  else
    ok "Pipeline complete. Site not launched."
    echo ""
    echo -e "  ${DIM}  To serve later: ${BOLD}./topo.sh serve${RESET}"
  fi
}

# ═══════════════════════════════════════════
# ROUTER
# ═══════════════════════════════════════════
case "${1:-}" in
  scan)           cmd_scan ;;
  cluster)        cmd_cluster ;;
  synthesize)     cmd_synthesize ;;
  validate)       cmd_validate ;;
  serve)          cmd_serve ;;
  figure-it-out)  cmd_figure_it_out ;;
  *)
    banner
    echo -e "  ${BOLD}Usage:${RESET}"
    echo -e "    ${TEAL}topo scan${RESET}            L0: Raw artifact ingestion"
    echo -e "    ${TEAL}topo cluster${RESET}         L1: Persistent clustering"
    echo -e "    ${AMBER}topo synthesize${RESET}      L2: Documentation synthesis"
    echo -e "    ${GREEN}topo validate${RESET}        L3: Sheaf consistency check"
    echo -e "    ${TEAL}topo serve${RESET}           Host the docs-site"
    echo -e "    ${AMBER}${BOLD}topo figure-it-out${RESET}   Full pipeline: L0→L1→L2→L3"
    echo ""
    echo -e "  ${FAINT}Five axioms enforced at every layer.${RESET}"
    echo -e "  ${FAINT}Shape over count. Trajectory over snapshot.${RESET}"
    echo ""
    ;;
esac
