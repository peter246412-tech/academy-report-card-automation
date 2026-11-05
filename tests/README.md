# Regression Tests

The release suite runs with Node.js 22 or newer, without package installation or credentials:

```sh
node --test tests/new-student.test.cjs tests/quarter-reset.test.cjs tests/workflows.test.cjs
```

Release check on November 5, 2026: **78 passed, 0 failed, 0 skipped**.

## What Runs

| File | Tests | Scope |
| --- | --- | --- |
| `new-student.test.cjs` | 3 | Missing-ID regression, post-sort selection, validation before insertion |
| `workflows.test.cjs` | 24 | Student/class lifecycle, whole-row preservation, reports, averages, ranking, AI writes |
| `quarter-reset.test.cjs` | 51 | Archive verification, reset allowlist, failure recovery, formulas, folder resolution, exam rollover |

Fixtures are synthetic and do not load a real workbook or the private one-time roster migration script. The harness evaluates `Code.gs` and the actual report template; it models row insertion, movement, sorting, notes, formulas, and strict dropdown validation.

## Service Boundaries

- Sheets, Drive, permissions, properties, locks, and UI dialogs are simulated.
- Formula text is retained for assertions; the harness is not a full spreadsheet formula engine.
- PDF conversion is simulated. HTML preparation and log behavior are tested, not Google's final page layout.
- API responses and failures are simulated. No paid request is made, and linguistic quality is not scored.
- Style calls are mostly no-ops, so passing tests do not prove visual layout or dropdown colors.
- Rollback tests cover controlled failure points, not every possible service interruption.

## Live Acceptance on a Disposable Copy

1. Install all four application files and approve the intended OAuth scopes using the actual administrator account.
2. Verify that the source-of-truth sheet has the expected rows before any one-time migration. Compare all existing assessment data afterward.
3. Add a synthetic student; move its class; rename and delete an empty class. Verify comments, formulas, IDs, notes, and class separators remain attached.
4. Test teacher-account protections and confirm only authorized staff can perform destructive operations.
5. Generate representative PDFs with missing subjects, no comments, and long comments; inspect pages and Drive links.
6. With an approved test key and consented/synthetic content, exercise each AI subject and a manual resume.
7. Close a test quarter into a nonpublic archive folder. Independently inspect the archive and retained/reset columns, then verify December-to-April year rollover.
8. Cancel each confirmation and test a denied Drive permission. Do not intentionally interrupt production or test recovery against the academy's only copy.

These live checks are a deployment checklist, not a claim that they were performed during this local repository release.
