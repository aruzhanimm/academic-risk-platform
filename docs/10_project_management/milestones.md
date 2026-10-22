# Milestones and dependencies

**Planning snapshot: 23 October 2026, Asia/Almaty. Content: Draft. Team review: Pending.**

The submission deadline is **24 October 2026**. The immediate next check is to obtain the live form URL and confirm its closing time and time zone; these are absent from the supplied screenshots.

## Starting point

- Documents 03–08 are on `main`; peer review remains pending under [ARP-13].
- The evaluation plan is in open PR #6 under [ARP-8]. Proposal and management drafts are in the working branch under [ARP-9] and [ARP-10]; all three tasks are In Progress.
- The interactive prototype uses synthetic examples and browser memory only. It has no backend, authentication, persistent storage or forecasting model; export/deletion interactions are previews.
- Student discussions, participant observations and supervisor feedback have not yet been received. Actual evidence capture is targeted for 24 October.
- Fourteen YouTrack issues, ARP-2–ARP-15, exist: six Done, three In Progress and five To do. The [task register](task_register.md) records their fields and delivery links. Done publication tasks cover deliverable availability; evidence and review have separate tasks.

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
| Confirm the submission route and closing time · [ARP-15] | Immediate check: 23 October | Live form or authoritative instructions | Aruzhan Kartam | Recorded form URL, closing date/time/time zone, deadline source and successful access check. | Unconfirmed; ARP-15 To do. |
| Consolidate documentation · [ARP-8], [ARP-9], [ARP-10], [ARP-13] | 23 October | Published documents; evaluation PR #6; proposal and management drafts | Aruzhan Kartam: integration; Vitaliy Golubenko: cross-review coordination | Review comments resolved; materials integrated; all original report requirements covered or gaps identified. Another member reviews Vitaliy's contributions. | ARP-8–ARP-10 In Progress; ARP-13 To do. |
| Reconcile task tracking and delivery evidence · [ARP-10] | 23 October | Fourteen live issues and published deliverables | Aruzhan Kartam; all members check their entries | Issue fields, acceptance criteria and commit/PR links agree with the register and actual outcomes. | Issues and register exist; management publication In Progress. |
| Record user evidence and supervisor feedback · [ARP-11], [ARP-12] | 24 October, before the freeze | Reviewable materials; participant and supervisor availability | Saniya Yerzhan: user evidence; Aruzhan Kartam: supervisor feedback | Required relevance evidence, dated anonymised observations, feedback, decisions and revision links. | Both tasks To do. |
| Verify access · [ARP-14] | 23 October; recheck before submission | Repository access; accessible prototype; diagrams and sources | Vitaliy Golubenko | Dated checks of repository, prototype and diagram/source URLs under intended committee access conditions. | To do. |
| Capture task and review evidence · [ARP-15] | 24 October | Reconciled tasks, deliverables and actual reviews | Aruzhan Kartam; each member checks their contribution record | Readable board/issue captures with assignees, priorities, deadlines and statuses; a completed example includes expected outcome, acceptance criteria and commit/PR link. | To do. |
| Freeze the source revision · [ARP-15] | 24 October, before PDF generation | Consolidation; feedback/review decisions; access and task evidence | Aruzhan Kartam; all members confirm their information | One source commit recorded; all 11 report sections checked; links, statuses and remaining gaps reconciled. | To do. |
| Build and check both PDFs · [ARP-15] | 24 October | Frozen source, evidence captures and verified team details | Aruzhan Kartam | One board/task PDF, at most 10 MB; one main report, at most 100 MB, with all 11 sections in order, contents and accessible supporting links. Filename: `Group_RepresentativeSurname_ProbPeriod1.pdf`. Both open correctly and match the source revision. | To do. |
| Tag and submit · [ARP-15] | 24 October, before confirmed closing time | Checked PDFs, form details, access and team confirmation | Aruzhan Kartam as proposed representative | `prob-period-1` resolves to the frozen commit. The form contains the direct tag/repository URLs, accurate member details and contribution links; both PDFs are uploaded and confirmation retained. | To do. |

## Dependency sequence

Review, tracking and access work can proceed in parallel. Evidence assembly depends on their reconciled state. Confirming the submission route and closing time is an immediate prerequisite for scheduling the final upload.

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

If content changes after the freeze, record the new source revision and regenerate affected exports/PDFs before tagging. Preserve the published `prob-period-1` tag; handle subsequent corrections through the agreed submission procedure.

Check the main report's 11 sections against the original prescribed order and the submission form's fields separately. No separate presentation requirement is visible in the supplied form.

## Future gates

Schedule the following work after the first submission review and confirmation of its dependencies.

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
