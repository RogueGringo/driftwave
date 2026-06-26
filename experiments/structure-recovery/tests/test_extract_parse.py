from pathlib import Path
from dwbench.extract import parse_git_log
from gitfixture import make_repo

def test_parse_git_log(tmp_path: Path):
    repo = make_repo(tmp_path)
    commits = parse_git_log(repo, commit_cap=10)
    assert len(commits) == 2
    assert commits[0].message.startswith("add src")     # oldest first
    paths = {fc.path for fc in commits[0].files}
    assert paths == {"src/a.py", "src/b.py"}
    assert all(fc.added >= 0 for c in commits for fc in c.files)
