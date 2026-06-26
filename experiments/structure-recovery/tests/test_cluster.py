import numpy as np
from dwbench.cluster import single_linkage_labels, ward_labels, path_prefix_labels

def _two_blocks():
    # two tight groups {0,1} and {2,3}, far apart
    D = np.array([
        [0.0, 0.1, 0.9, 0.9],
        [0.1, 0.0, 0.9, 0.9],
        [0.9, 0.9, 0.0, 0.1],
        [0.9, 0.9, 0.1, 0.0],
    ])
    return D

def test_single_linkage_recovers_two_blocks():
    labels = single_linkage_labels(_two_blocks(), k=2)
    assert labels[0] == labels[1] and labels[2] == labels[3]
    assert labels[0] != labels[2]

def test_ward_matches_block_structure():
    labels = ward_labels(_two_blocks(), k=2)
    assert (labels[0] == labels[1]) and (labels[2] == labels[3])

def test_path_prefix_labels():
    labels = path_prefix_labels(["src/a", "src/b", "lib/c"], k=2)
    assert labels[0] == labels[1] and labels[0] != labels[2]
