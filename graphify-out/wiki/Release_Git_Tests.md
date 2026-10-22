# Release Git Tests

> 14 nodes

## Key Concepts

- **ReleaseTests** (14 connections) — `tests/test_release.py`
- **.git()** (12 connections) — `tests/test_release.py`
- **.manifest()** (8 connections) — `tests/test_release.py`
- **.test_incremental_commit_with_manifest_passes()** (3 connections) — `tests/test_release.py`
- **.test_real_identity_checked_only_when_requested()** (3 connections) — `tests/test_release.py`
- **.test_secret_in_commit_message_is_rejected()** (3 connections) — `tests/test_release.py`
- **.test_secret_in_deleted_filename_is_rejected()** (3 connections) — `tests/test_release.py`
- **.test_secret_in_intermediate_commit_rejected()** (3 connections) — `tests/test_release.py`
- **.test_stale_manifest_rejected()** (3 connections) — `tests/test_release.py`
- **.setUp()** (2 connections) — `tests/test_release.py`
- **.test_private_filename_rejected()** (2 connections) — `tests/test_release.py`
- **.test_replace_object_cannot_hide_secret()** (2 connections) — `tests/test_release.py`
- **.test_symlink_rejected()** (2 connections) — `tests/test_release.py`
- **.test_unstaged_content_not_silently_approved()** (1 connections) — `tests/test_release.py`

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (1 shared connections)

## Source Files

- `tests/test_release.py`

## Audit Trail

- EXTRACTED: 31 (100%)
- INFERRED: 0 (0%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*