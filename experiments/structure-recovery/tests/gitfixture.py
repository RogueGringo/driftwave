import subprocess, os
from pathlib import Path

def make_repo(root: Path) -> str:
    d = root / "repo"
    d.mkdir()
    env = {**os.environ, "GIT_AUTHOR_DATE": "2026-01-01T00:00:00",
           "GIT_COMMITTER_DATE": "2026-01-01T00:00:00"}
    def git(*args, author="Alice <a@x>"):
        subprocess.run(["git", *args], cwd=d, check=True, env=env,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    git("init", "-q"); git("config", "user.email", "a@x"); git("config", "user.name", "Alice")
    (d / "src").mkdir(); (d / "lib").mkdir()
    (d / "src" / "a.py").write_text("x = 1\n")
    (d / "src" / "b.py").write_text("y = 2\n")
    git("add", "-A"); git("commit", "-q", "-m", "add src auth")
    (d / "lib" / "c.py").write_text("z = 3\n")
    git("add", "-A"); git("commit", "-q", "-m", "add lib helper")
    return str(d)


def make_large_repo(root: Path) -> str:
    """Like make_repo but with enough labeled files to pass passes_min_size (min=30)."""
    d = root / "repo"
    d.mkdir()
    env = {**os.environ, "GIT_AUTHOR_DATE": "2026-01-01T00:00:00",
           "GIT_COMMITTER_DATE": "2026-01-01T00:00:00"}
    def git(*args):
        subprocess.run(["git", *args], cwd=d, check=True, env=env,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    git("init", "-q"); git("config", "user.email", "a@x"); git("config", "user.name", "Alice")
    (d / "src").mkdir(); (d / "lib").mkdir()
    for i in range(20):
        (d / "src" / f"mod_{i}.py").write_text(f"x = {i}\n")
    for i in range(15):
        (d / "lib" / f"util_{i}.py").write_text(f"y = {i}\n")
    git("add", "-A"); git("commit", "-q", "-m", "add src modules")
    (d / "src" / "extra.py").write_text("e = 99\n")
    (d / "lib" / "helper.py").write_text("h = 0\n")
    git("add", "-A"); git("commit", "-q", "-m", "add lib helper")
    return str(d)
