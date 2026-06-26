from __future__ import annotations
import hashlib

def assign_split(names: list[str], scheme: str = "all_test", seed: int = 0) -> dict[str, str]:
    if scheme == "all_test":
        return {n: "test" for n in names}
    if scheme == "holdout":
        out = {}
        for n in names:
            h = hashlib.sha256(f"{seed}:{n}".encode()).hexdigest()
            frac = int(h[:8], 16) / 0xFFFFFFFF
            out[n] = "train" if frac < 0.30 else "test"
        return out
    raise ValueError(f"unknown split scheme: {scheme}")
