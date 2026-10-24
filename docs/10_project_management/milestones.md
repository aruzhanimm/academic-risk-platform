# Milestones and dependencies

**Snapshot: 24 October 2026, Astana time. Targets and completion evidence are recorded separately.**

The confirmed submission deadline is **24 October 2026 at 18:00, Astana time**. Final form access, correct uploads and successful submission still require confirmation.

## Starting point

- PRs #1–#8 are merged in publication baseline [b5f53a8](https://github.com/aruzhanimm/academic-risk-platform/commit/b5f53a8de488113a8c34d8f638b4fa71ee300aa6), including the evaluation plan, proposal, management, user evidence and report. Substantive peer review remains pending under [ARP-13].
- The interactive prototype uses synthetic examples and browser memory only. It has no backend, authentication, persistent storage or forecasting model; export/deletion interactions are previews.
- The [user-needs study](../02_user_interviews.md) synthesises five interview records and nine questionnaire submissions, with unresolved session metadata and interpretation limits. [Supervisor feedback and responses](../11_supervisor_feedback.md) are recorded from the comments supplied on 24 October. All five expected next-review deliverables remain open.
- The first-period group has fourteen issues, ARP-2–ARP-15: ten Done, three In Progress and one To do at the verified snapshot. ARP-12 remains To do pending recording/publication acceptance. Three verified next-stage tasks, [ARP-16]–[ARP-18], are all To do with due dates unset, bringing the total to 17. The [task register](task_register.md) separates the two groups.
- [PR #8](https://github.com/aruzhanimm/academic-risk-platform/pull/8) published the earlier report and revised prototype on main. The updated 36-page report and editable Word document include received feedback and are prepared for the final publication.
- The repository and hosted prototype are public. [Access checks](../evidence/access_checks.md) passed for all 13 selected URLs; four views and the actual 500-pixel layout were checked. The seven-page [YouTrack evidence PDF](../../reports/prob-period-1/SE-2423_Kartam_YouTrack.pdf) is prepared and checked. Final publication/revision matching, the submission tag and form submission remain pending.

This submission consolidates research, design, prototype, management and evidence. It does not depend on completing a production application or training a model.

## Task due-date references

The following due-date fields match the live-task snapshot. Dates through 20 October follow recorded Git commit-date references; later dates are coordination and submission targets. Work, review and issue-creation timestamps remain separate evidence.

| Task scope | Live issue | Due-date reference |
| --- | --- | --- |
| Repository foundation | [ARP-2] | 11 October 2026 |
| Literature review | [ARP-3] | 13 October 2026 |
| Existing-system comparison | [ARP-4] | 14 October 2026 |
| Technology comparison and decisions | [ARP-5] | 16 October 2026 |
| Requirements and architecture | [ARP-6] | 18 October 2026 |
| UX prototype | [ARP-7] | 19 October 2026 |
| Verification and evaluation plan | [ARP-8] | 20 October 2026 |
| Proposal, management, peer review and access | [ARP-9], [ARP-10], [ARP-13], [ARP-14] | 23 October 2026 |
| User evidence, supervisor feedback and submission | [ARP-11], [ARP-12], [ARP-15] | 24 October 2026 |

## Submission milestones

| Milestone | Target | Dependencies | Coordinating owner | Completion evidence | Position at snapshot |
| --- | --- | --- | --- | --- | --- |
| Confirm the submission route and uploads · [ARP-15] | Before 24 October, 18:00 Astana time | Live form and confirmed deadline | Aruzhan Kartam | Correct form access, two required PDFs and retained submission confirmation. | Deadline confirmed; form submission pending. |
| Consolidate documentation · [ARP-8], [ARP-9], [ARP-10], [ARP-13] | 23 October | Published baseline; final user-evidence and submission additions | Aruzhan Kartam: integration; Vitaliy Golubenko: cross-review coordination | Review comments resolved; materials integrated; all original report requirements covered or gaps identified. Another member reviews Vitaliy's contributions. | Final additions merged through PR #8. Eight prototype checks recorded; substantive team confirmation and final reconciliation remain outstanding. |
| Reconcile task tracking and delivery evidence · [ARP-10] | 23 October | Fourteen first-period issues, three next-stage follow-ups and published deliverables | Aruzhan Kartam; all members check their entries | Issue fields, acceptance criteria and commit/PR links agree with the register and actual outcomes. | Board and task evidence prepared at the verified ten Done / three In Progress / one To do snapshot. Refresh the evidence after verified feedback-task updates. |
| Record user evidence and supervisor feedback · [ARP-11], [ARP-12] | 24 October, before the freeze | Reviewable materials; participant and supervisor availability | Saniya Yerzhan: user evidence; Aruzhan Kartam: supervisor feedback | Required relevance evidence, dated anonymised observations, feedback, decisions and revision links. | ARP-11 In Progress: evidence synthesised, metadata and interpretation checks remain. Supervisor feedback and an eight-comment response register are now recorded; verify the ARP-12 tracker update separately. |
| Verify access · [ARP-14] | Before submission | Public repository; hosted prototype; diagrams and sources | Vitaliy Golubenko | Dated checks of repository, prototype and diagram/source URLs under intended committee access conditions. | Done: access checks passed at b5f53a8 for 13/13 public URLs and file matches, four prototype views and the actual 500-pixel layout. Recheck report downloads after any replacement. |
| Capture task and review evidence · [ARP-15] | 24 October | Reconciled tasks, deliverables and actual reviews | Aruzhan Kartam; each member checks their contribution record | Readable board/issue captures with assignees, priorities, deadlines and statuses; a completed example includes expected outcome, acceptance criteria and commit/PR link. | Seven-page [YouTrack evidence PDF](../../reports/prob-period-1/SE-2423_Kartam_YouTrack.pdf) prepared and visually checked; substantive human review evidence remains outstanding. |
| Freeze the source revision · [ARP-15] | 24 October, before final PDF verification | Consolidation; feedback/review decisions; access and task evidence | Aruzhan Kartam; all members confirm their information | One source commit recorded; all 11 report sections checked; links, statuses and remaining gaps reconciled. | Completion evidence pending. |
| Build and check both PDFs · [ARP-15] | 24 October | Frozen source, evidence captures and verified team details | Aruzhan Kartam | One board/task PDF, at most 10 MB; one main report, at most 100 MB, with all 11 sections in order, contents and accessible supporting links. Main filename: `SE-2423_Kartam_ProbPeriod1.pdf`. Both open correctly and match the source revision. | Report, Word and YouTrack artifacts were prepared and visually checked. Update the final versions for the newly received feedback and verified issue changes, then repeat layout, size and publication/revision checks. |
| Tag and submit · [ARP-15] | 24 October, before 18:00 Astana time | Checked PDFs, form details, access and team confirmation | Aruzhan Kartam, team representative | `prob-period-1` resolves to the frozen commit. The form contains the direct tag/repository URLs, accurate member details and contribution links; both PDFs are uploaded and confirmation retained. | Completion evidence pending. |

## Dependency sequence

Review, tracking and access work can proceed in parallel. Evidence assembly depends on their reconciled state. The final upload must finish before the confirmed 18:00 deadline on 24 October; preparing PDFs is separate from submitting the form.

```text
Documentation consolidation ───────────────┐
Discussion, feedback and team review ──────┤
Live task tracking → evidence capture ─────┼→ Source freeze
Access verification ──────────────────────┘       │
                                                  v
                                         Two PDFs + final checks
                                                  │
                                                  v
                                      prob-period-1 → submission
```

If content changes after the freeze, record the new source revision and regenerate affected exports/PDFs before tagging. Once published, preserve the `prob-period-1` tag; handle subsequent corrections through the agreed submission procedure.

Check the main report's 11 sections against the original prescribed order and the submission form's fields separately. No separate presentation requirement is visible in the supplied form.

## Future gates

The supervisor specifies [five deliverables before the next review](../11_supervisor_feedback.md#expected-before-the-next-review): a feasibility decision, findings and updated requirements, a tested application slice, a reproducible research/verification record, and traceable project evidence with responses. All remain open; the next review date is unspecified. [ARP-16] covers feasibility and permissions, [ARP-17] the tested application/API workflow, and [ARP-18] the audit and protocol. [ARP-11] continues findings and UX work; [ARP-13] and [ARP-15] cover review and publication evidence. Use the following dependency gates to schedule that work.

| Gate | Depends on | Evidence required to proceed | Owner | If unmet |
| --- | --- | --- | --- | --- |
| Measurement and usable data | Defined research question and actual data access | Reviewed construct, instrument/version/language, permissions, scoring, recall window, prediction time and horizon; inspected records with student linkage, dates, missingness and follow-up. | Aruzhan Kartam and Saniya Yerzhan | Continue literature, design and synthetic checks. Do not claim a longitudinal burnout dataset or forecasting result. |
| Frozen research protocol | Measurement/data gate | Agreed population, intended generalisation, eligibility, temporal/student splits, primary endpoint and metric, baselines, tuning budget, uncertainty and practical acceptance criteria before final-test access. | Aruzhan Kartam, with feature/measurement review by Saniya | Keep final-test data sealed and resolve the missing decisions. |
| Shared implementation and personal-data pilot | Agreed requirements, architecture and data lifecycle | Implemented identity/ownership and persistence; agreed collection/retention/deletion rules; relevant software acceptance evidence, safe deployment and actual review. Synthetic technical checks may precede any personal-data collection. | Vitaliy Golubenko | Keep the interface synthetic; do not treat browser-only behaviour as server acceptance. |
| Valid research evaluation | Usable permitted data and frozen protocol | Reproducible experiments on eligible data; leakage checks, comparable baselines, actual metrics/uncertainty, coverage and error analysis, including negative results. | Aruzhan Kartam and Saniya Yerzhan | Report what remains unmeasured. Invalid experiments are not performance evidence. |
| Model enablement for the intended users | Valid research evaluation and relevant software acceptance | Separate review of applicability, predefined practical criteria, interpretation, trusted artifacts and operational limits. | Aruzhan Kartam for research; Vitaliy Golubenko for integration | Keep `model_unavailable`. Completing a research experiment alone does not authorise deployment. |

The [risk register](risks.md) tracks threats to these milestones. Requirements, architecture, UX and evaluation documents define acceptance criteria; the [task register](task_register.md) connects the current delivery work to live issues and evidence. Future implementation and research gates will be scheduled separately.

[ARP-2]: https://academic-risk-platform.youtrack.cloud/issue/ARP-2/Publish-the-repository-foundation-and-project-README
[ARP-3]: https://academic-risk-platform.youtrack.cloud/issue/ARP-3/Publish-the-critical-literature-review-draft
[ARP-4]: https://academic-risk-platform.youtrack.cloud/issue/ARP-4/Publish-the-existing-system-comparison
[ARP-5]: https://academic-risk-platform.youtrack.cloud/issue/ARP-5/Publish-technology-comparisons-and-proposed-ADRs
[ARP-6]: https://academic-risk-platform.youtrack.cloud/issue/ARP-6/Publish-requirements-architecture-and-editable-diagrams
[ARP-7]: https://academic-risk-platform.youtrack.cloud/issue/ARP-7/Publish-the-synthetic-student-UX-prototype
[ARP-8]: https://academic-risk-platform.youtrack.cloud/issue/ARP-8/Review-and-publish-the-verification-and-evaluation-plan
[ARP-9]: https://academic-risk-platform.youtrack.cloud/issue/ARP-9/Complete-the-project-proposal-and-submission-README
[ARP-10]: https://academic-risk-platform.youtrack.cloud/issue/ARP-10/Complete-project-management-risks-and-the-ARP-task-board
[ARP-11]: https://academic-risk-platform.youtrack.cloud/issue/ARP-11/Collect-actual-evidence-of-user-needs
[ARP-12]: https://academic-risk-platform.youtrack.cloud/issue/ARP-12/Obtain-supervisor-feedback-and-record-resulting-decisions
[ARP-13]: https://academic-risk-platform.youtrack.cloud/issue/ARP-13/Perform-and-record-cross-document-peer-review
[ARP-14]: https://academic-risk-platform.youtrack.cloud/issue/ARP-14/Provide-committee-accessible-prototype-and-review-access
[ARP-15]: https://academic-risk-platform.youtrack.cloud/issue/ARP-15/Assemble-the-submission-PDFs-exact-tag-and-form-evidence

[ARP-16]: https://academic-risk-platform.youtrack.cloud/issue/ARP-16

[ARP-17]: https://academic-risk-platform.youtrack.cloud/issue/ARP-17

[ARP-18]: https://academic-risk-platform.youtrack.cloud/issue/ARP-18
