#!/usr/bin/env python3
"""Validate driftwave artifacts: strict JSON + schema + pin conformance.

Every command's "validate against schema" step invokes this. Before 0.2.0 that
step was prose with no tool behind it; DW-PROTO-001 MUST-2 is now enforced.

Checks, in order (fail-closed — the first hard failure exits non-zero):
  1. strict JSON parse (bare Infinity/NaN rejected, as JSON.parse/jq would)
  2. schema conformance — jsonschema when installed, else a structural
     fallback (required keys, layer const, enum membership)
  3. pin conformance — flags within the closed flag vocabulary, routing and
     verdict tokens within their vocabularies, prohibited lexicon absent from
     claim-bearing fields, heuristic-tier artifacts stamped not_acceptance

Usage:
    python3 dw_validate.py <artifact.json> [--schema NAME] [--strict]
    python3 dw_validate.py --all [state_dir]      # audit every artifact
    cat artifact.json | python3 dw_validate.py -  [--schema NAME]

--strict additionally requires a provenance block (producer + plugin_version
+ tier). Exit codes: 0 valid, 1 invalid, 2 usage/environment error.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

from dw_common import (
    PLUGIN_ROOT, iter_claim_fields, load_pin, state_dir, strict_loads,
)

SCHEMAS = PLUGIN_ROOT / "schemas"

LAYER_TO_SCHEMA = {
    "L0": "raw_cloud.json",
    "L1": "filtered_topology.json",
    "L2": "synthesis_map.json",
    "L3": "sheaved_verdict.json",
}


def infer_schema(artifact: dict) -> str | None:
    if artifact.get("artifact") == "computed_verdict":
        return "computed_verdict.json"
    layer = artifact.get("layer")
    if layer in LAYER_TO_SCHEMA:
        return LAYER_TO_SCHEMA[layer]
    if "prereg_id" in artifact:
        return "preregistration.json"
    if "sessions" in artifact and "meta_barcode" in artifact:
        return "meta_persistence.json"
    return None


def structural_check(artifact: dict, schema: dict, errors: list[str], path=""):
    """Minimal fallback when jsonschema is not installed: required keys,
    const, enum, and type checks at every object level. Not a full validator
    — jsonschema is preferred — but it catches the failure modes the pipeline
    actually produces (missing layer, wrong routing token, wrong shape)."""
    if schema.get("type") == "object" and isinstance(artifact, dict):
        for key in schema.get("required", []):
            if key not in artifact:
                errors.append(f"{path or '$'}: missing required key '{key}'")
        for key, sub in schema.get("properties", {}).items():
            if key not in artifact:
                continue
            val = artifact[key]
            sub_path = f"{path}.{key}" if path else key
            if "const" in sub and val != sub["const"]:
                errors.append(f"{sub_path}: expected const {sub['const']!r}, got {val!r}")
            if "enum" in sub and val not in sub["enum"]:
                errors.append(f"{sub_path}: {val!r} not in enum {sub['enum']}")
            if sub.get("type") == "array" and isinstance(val, list):
                item_schema = sub.get("items", {})
                for i, item in enumerate(val):
                    structural_check(item, item_schema, errors, f"{sub_path}[{i}]")
            elif sub.get("type") == "object" and isinstance(val, dict):
                structural_check(val, sub, errors, sub_path)


def schema_check(artifact: dict, schema_name: str, errors: list[str]) -> str:
    schema_path = SCHEMAS / schema_name
    if not schema_path.is_file():
        errors.append(f"schema not found: {schema_path}")
        return "missing"
    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        errors.append(f"schema unreadable: {schema_path}: {e}")
        return "missing"
    try:
        import jsonschema
        try:
            jsonschema.validate(instance=artifact, schema=schema)
        except jsonschema.ValidationError as e:
            errors.append(f"jsonschema: {e.message} (at {'/'.join(str(p) for p in e.absolute_path) or '$'})")
        return "jsonschema"
    except ImportError:
        structural_check(artifact, schema, errors)
        return "structural-fallback"


def pin_check(artifact: dict, pin: dict, errors: list[str]):
    # Type-guarded throughout: a type-confused artifact must be reported
    # INVALID, never crash the validator (or abort a whole --all audit).
    flags = artifact.get("flags", [])
    if not isinstance(flags, list):
        errors.append(f"flags: expected a list, got {type(flags).__name__}")
        flags = []
    vocab = set(pin["flag_vocabulary"])
    for f in flags:
        if f not in vocab:
            errors.append(f"flags: {f!r} not in the pinned flag vocabulary")

    routing = artifact.get("routing")
    if routing is not None and routing not in pin["routing_vocabulary"]:
        errors.append(f"routing: {routing!r} not in pinned routing vocabulary")

    verdict = artifact.get("verdict")
    if verdict is not None and verdict not in (
        pin["verdict_vocabulary"] + pin["consistency_vocabulary"]
    ):
        errors.append(f"verdict: {verdict!r} not in pinned verdict/consistency vocabulary")

    lexicon = [w.lower() for w in pin["prohibited_lexicon"]]
    for fpath, text in iter_claim_fields(artifact, set(pin["claim_fields"])):
        low = text.lower()
        for word in lexicon:
            if word in low:
                errors.append(
                    f"prohibited lexicon: {word!r} in claim field {fpath} — "
                    "overclaims are a validation failure, not a style issue"
                )

    prov = artifact.get("provenance")
    if prov is not None and not isinstance(prov, dict):
        errors.append(f"provenance: expected an object, got {type(prov).__name__}")
        prov = None
    tier = (prov or {}).get("tier")
    if tier == "heuristic" and artifact.get("not_acceptance") is not True:
        errors.append(
            "heuristic-tier artifact must carry not_acceptance: true "
            "(explore-tier output may never look like a certified result)"
        )
    for f in ("verdicts", "findings"):
        items = artifact.get(f) or []
        if not isinstance(items, list):
            errors.append(f"{f}: expected a list, got {type(items).__name__}")
            continue
        for i, item in enumerate(items):
            if not isinstance(item, dict):
                errors.append(f"{f}[{i}]: expected an object, got {type(item).__name__}")
                continue
            v = item.get("verdict")
            if v is not None and v not in pin["verdict_vocabulary"]:
                errors.append(f"{f}[{i}].verdict: {v!r} not in pinned verdict vocabulary")
            if item.get("status") == "CLOSED" and not item.get("witness"):
                errors.append(
                    f"{f}[{i}]: CLOSED without a witness — a finding may not be "
                    "closed without one"
                )


def strict_check(artifact: dict, errors: list[str]):
    prov = artifact.get("provenance")
    if not isinstance(prov, dict):
        errors.append("--strict: missing provenance block")
        return
    for key in ("producer", "plugin_version", "tier"):
        if key not in prov:
            errors.append(f"--strict: provenance missing '{key}'")
    if prov.get("tier") not in ("real", "heuristic", "planned"):
        errors.append(f"--strict: provenance.tier {prov.get('tier')!r} not an honesty tier")


def validate_one(text: str, name: str, schema_name: str | None, strict: bool) -> list[str]:
    errors: list[str] = []
    try:
        artifact = strict_loads(text)
    except ValueError as e:
        return [f"strict JSON parse failed: {e}"]
    if not isinstance(artifact, dict):
        return ["artifact is not a JSON object"]

    schema_name = schema_name or infer_schema(artifact)
    if schema_name is None:
        errors.append(
            "cannot infer schema (no layer / prereg_id / sessions key) — pass --schema NAME"
        )
    else:
        mode = schema_check(artifact, schema_name, errors)
        print(f"  {name}: schema={schema_name} mode={mode}")

    pin = load_pin()
    pin_check(artifact, pin, errors)
    if strict:
        strict_check(artifact, errors)
    return errors


def main(argv: list[str]) -> int:
    args = [a for a in argv if not a.startswith("--")]
    strict = "--strict" in argv
    schema_name = None
    if "--schema" in argv:
        schema_name = argv[argv.index("--schema") + 1]
        args = [a for a in args if a != schema_name]

    if "--all" in argv:
        base = Path(args[0]) if args else state_dir() / "artifacts"
        if not base.is_dir():
            # Fail closed: an audit that scanned nothing must not read as green.
            print(f"ERROR: {base} is not a directory — nothing was audited")
            return 2
        files = sorted(base.glob("*.json"))
        if not files:
            print(f"no artifacts found under {base} (0 audited)")
            return 0
        failures = 0
        for f in files:
            try:
                errs = validate_one(f.read_text(encoding="utf-8"), f.name, None, strict)
            except Exception as e:  # one bad artifact must not abort the audit
                errs = [f"validator error: {type(e).__name__}: {e}"]
            if errs:
                failures += 1
                print(f"INVALID {f}")
                for e in errs:
                    print(f"    - {e}")
            else:
                print(f"VALID   {f}")
        print(f"\n{len(files) - failures}/{len(files)} artifacts valid")
        return 1 if failures else 0

    if not args:
        print(__doc__)
        return 2
    src = args[0]
    text = sys.stdin.read() if src == "-" else Path(src).read_text(encoding="utf-8")
    errs = validate_one(text, src, schema_name, strict)
    if errs:
        print(f"INVALID {src}")
        for e in errs:
            print(f"    - {e}")
        return 1
    print(f"VALID   {src}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except (OSError, IndexError) as e:
        # Environment/usage errors exit 2 per the documented contract —
        # a missing file or dangling flag is not "artifact invalid".
        print(f"ERROR: {type(e).__name__}: {e}")
        sys.exit(2)
