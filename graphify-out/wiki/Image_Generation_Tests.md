# Image Generation Tests

> 29 nodes

## Key Concepts

- **ImageTests** (28 connections) — `tests/test_images.py`
- **.accept()** (12 connections) — `tests/test_images.py`
- **.prepare()** (12 connections) — `tests/test_images.py`
- **.test_single_payload_inspection_rejects_file_swapped_during_decode()** (4 connections) — `tests/test_images.py`
- **.test_all_transparent_output_is_not_a_valid_generated_asset()** (3 connections) — `tests/test_images.py`
- **.test_changed_host_cannot_reuse_plan()** (3 connections) — `tests/test_images.py`
- **.test_different_session_cannot_reuse_plan()** (3 connections) — `tests/test_images.py`
- **.test_malformed_plan_request_is_structured_error()** (3 connections) — `tests/test_images.py`
- **.test_missing_tool_cannot_reuse_plan()** (3 connections) — `tests/test_images.py`
- **.test_modified_output_receipt_does_not_match()** (3 connections) — `tests/test_images.py`
- **.test_no_overwrite_and_matching_extension()** (3 connections) — `tests/test_images.py`
- **.test_opaque_output_fails_transparency()** (3 connections) — `tests/test_images.py`
- **.test_revoked_permission_or_changed_preference_invalidates_plan()** (3 connections) — `tests/test_images.py`
- **.test_success_imports_bytes_and_reports_provenance_limit()** (3 connections) — `tests/test_images.py`
- **.setUp()** (1 connections) — `tests/test_images.py`
- **.test_cli_error_is_structured_not_traceback()** (1 connections) — `tests/test_images.py`
- **.test_cloud_reference_upload_separate_permission()** (1 connections) — `tests/test_images.py`
- **.test_deny_cannot_be_bypassed_by_flags()** (1 connections) — `tests/test_images.py`
- **.test_empty_runtime_does_not_invent_host_tool()** (1 connections) — `tests/test_images.py`
- **.test_existing_image_never_calls_host()** (1 connections) — `tests/test_images.py`
- **.test_features_filter_before_choice()** (1 connections) — `tests/test_images.py`
- **.test_multiple_tools_require_selection()** (1 connections) — `tests/test_images.py`
- **.test_old_profile_does_not_enable_new_capability()** (1 connections) — `tests/test_images.py`
- **.test_paid_api_needs_paid_permission()** (1 connections) — `tests/test_images.py`
- **.test_project_cannot_grant_images()** (1 connections) — `tests/test_images.py`
- *... and 4 more nodes in this community*

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (1 shared connections)

## Source Files

- `tests/test_images.py`

## Audit Trail

- EXTRACTED: 50 (98%)
- INFERRED: 1 (2%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*