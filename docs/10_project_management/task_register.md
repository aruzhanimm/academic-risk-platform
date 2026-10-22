# Task Register and Delivery Evidence

**Snapshot: 23 October 2026, Asia/Almaty. Content: Draft. Team review: Pending.**

This register covers the fourteen actual ARP issues created on 23 October. Follow an issue link for its outcome, detailed acceptance criteria and current fields. The owner, priority, due date and state below are the task-field snapshot, not independently inferred from a filename or commit count.

Six publication tasks are Done; three items are In Progress and five are To do. Done publication tasks establish the stated deliverable's availability, while actual peer review remains tracked by ARP-13. The live [ARP issue list](https://academic-risk-platform.youtrack.cloud/issues/ARP) is authoritative after this snapshot.

Due dates through 20 October use the deliverables' recorded commit-date references. They are not dates of issue creation, verified work sessions, merge events or approval. For example, the evaluation plan has a 20 October due-date reference and is still In Progress in open PR #6. The [milestones](milestones.md) explain the reference dates and remaining targets.

Dependencies distinguish reviewable inputs from final evidence gates. Draft preparation, feedback and review can proceed iteratively; documents can be reviewed while their tasks remain In Progress. Each final acceptance decision uses the actual evidence.

| Issue | Owner | Priority | Due | State | Deliverable / outcome | Current delivery evidence | Dependencies / required inputs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [ARP-2] | Aruzhan Kartam | Normal | 2026-10-11 | Done | Initial [README](../../README.md), contribution rules and directory guides. | Published foundation; [ed26666](https://github.com/aruzhanimm/academic-risk-platform/commit/ed26666209811755f1fa2ebb06edf64ea3b909cc). | None. |
| [ARP-3] | Saniya Yerzhan | Normal | 2026-10-13 | Done | [Critical literature review](../03_literature_review.md) and research records: 13 sources, including ten scientific publications. | [PR #1](https://github.com/aruzhanimm/academic-risk-platform/pull/1) merged; [218c8f0](https://github.com/aruzhanimm/academic-risk-platform/commit/218c8f00432c694619c08ed26bea77d0ffc9bae3). Content remains a working draft. | [ARP-2] |
| [ARP-4] | Saniya Yerzhan | Normal | 2026-10-14 | Done | [Existing-system comparison](../04_existing_system_comparison.md): four systems, eight criteria and official sources. | [PR #2](https://github.com/aruzhanimm/academic-risk-platform/pull/2) merged; [833361c](https://github.com/aruzhanimm/academic-risk-platform/commit/833361c7d908c7a55db6281bed35d2db2da7318d). | [ARP-2], [ARP-3] |
| [ARP-5] | Vitaliy Golubenko | Normal | 2026-10-16 | Done | [Technology comparison](../05_technology_comparison.md) and four [proposed ADRs](../adr/README.md). | [PR #3](https://github.com/aruzhanimm/academic-risk-platform/pull/3) merged; [426f61b](https://github.com/aruzhanimm/academic-risk-platform/commit/426f61b2b4559e3b4d80d8a025b96eab2f029024). ADRs remain Proposed. | [ARP-2], [ARP-3], [ARP-4] |
| [ARP-6] | Vitaliy Golubenko | Normal | 2026-10-18 | Done | [Requirements](../06_requirements_specification.md), [architecture](../07_architecture.md) and three [editable/exported diagrams](../../diagrams/README.md). | [PR #4](https://github.com/aruzhanimm/academic-risk-platform/pull/4) merged; [e1b54db](https://github.com/aruzhanimm/academic-risk-platform/commit/e1b54db08fdbbc616d46f39e5560910ef6ee3cb3). Documents remain Draft. | [ARP-3], [ARP-5] |
| [ARP-7] | Saniya Yerzhan | Normal | 2026-10-19 | Done | [UX specification](../08_ux_prototype.md), [interactive sources](../../prototypes/README.md) and five screen captures; synthetic, memory-only behaviour. | [PR #5](https://github.com/aruzhanimm/academic-risk-platform/pull/5) merged; [f1b3374](https://github.com/aruzhanimm/academic-risk-platform/commit/f1b337487e6eca9378cbba13281f2a7e24b5deec). Capture renames are in PR #6. | [ARP-6] |
| [ARP-8] | Aruzhan Kartam | Major | 2026-10-20 | In Progress | Verification and evaluation plan; document navigation and JPEG-extension corrections. | [PR #6](https://github.com/aruzhanimm/academic-risk-platform/pull/6) open; [8dad01c](https://github.com/aruzhanimm/academic-risk-platform/commit/8dad01c592a7471e34abf5dfdb186573932f9f88). Not yet integrated into main. | [ARP-3], [ARP-6], [ARP-7]; review: [ARP-13] |
| [ARP-9] | Aruzhan Kartam | Major | 2026-10-23 | In Progress | [English proposal](../01_project_proposal.md) and updated submission README; working-branch drafts pending review. | Existing published overview; dedicated proposal prepared in the working branch. Delivery and review links are maintained on the issue. | Inputs: [ARP-2], [ARP-3], [ARP-4], [ARP-6]; evidence/review: [ARP-11], [ARP-12], [ARP-13] |
| [ARP-10] | Aruzhan Kartam | Major | 2026-10-23 | In Progress | [Management overview](README.md), this register, [milestones](milestones.md) and [risks](risks.md); working-branch drafts and live ARP tasks. | Fourteen real ARP issues exist. Documents remain in the working branch; delivery and review links are maintained on the issue. | Delivery evidence: [ARP-2], [ARP-3], [ARP-4], [ARP-5], [ARP-6], [ARP-7], [ARP-8], [ARP-9]; coordinate [ARP-13], [ARP-15] |
| [ARP-11] | Saniya Yerzhan | Critical | 2026-10-24 | To do | Actual relevance evidence: three to five user discussions or a substantive agreement with an actual client; findings mapped to requirements. | No completed discussion evidence recorded. The UX document provides planned tasks and an empty evidence record. | Reviewable inputs: [ARP-9], [ARP-6], [ARP-7] |
| [ARP-12] | Aruzhan Kartam | Critical | 2026-10-24 | To do | Actual supervisor comments, decisions, revision links and unresolved items. | Supervisor identified; substantive feedback and response log remain outstanding. | Reviewable inputs: [ARP-9], [ARP-3], [ARP-4], [ARP-5], [ARP-6], [ARP-7], [ARP-8]; evidence/access: [ARP-11], [ARP-14] |
| [ARP-13] | Vitaliy Golubenko | Major | 2026-10-23 | To do | Actual cross-document review by other team members, comments and resulting revisions. | Published PRs and technical checks exist; substantive team review still needs its own records. | Reviewable inputs: [ARP-2], [ARP-3], [ARP-4], [ARP-5], [ARP-6], [ARP-7], [ARP-8], [ARP-9], [ARP-10]; final reconciliation: [ARP-11], [ARP-12] |
| [ARP-14] | Vitaliy Golubenko | Major | 2026-10-23 | To do | Committee-accessible prototype, repository and diagram links, with dated access checks. | Sources and captures are published; committee-accessible prototype and access evidence remain outstanding. | [ARP-7], [ARP-8]; coordinate [ARP-13] |
| [ARP-15] | Aruzhan Kartam | Critical | 2026-10-24 | To do | Eleven-section report PDF, YouTrack evidence PDF, exact submission tag and checked form information. | Form requirements received; final PDFs, matching tag and submission confirmation remain outstanding. | All deliverables [ARP-2], [ARP-3], [ARP-4], [ARP-5], [ARP-6], [ARP-7], [ARP-8], [ARP-9], [ARP-10]; final gates [ARP-11], [ARP-12], [ARP-13], [ARP-14] |

## Evidence and updates

PRs #1–#5 are merged; PR #6 remains open at this snapshot. ARP-9 and ARP-10 link the proposal and management changes to their delivery and review records. Update this register after review and integration.

Keep the expected outcome, acceptance criteria and evidence together on the issue. A review record identifies its actual reviewer, date, affected material, comments and resolution. Technical document checks, synthetic interaction checks, substantive human review and research experiments are different evidence types; report each at its actual scope.

Before the submission freeze, reconcile this register with the live board, reviewed repository revision and both PDFs. Record remaining gaps in the report and form rather than treating a Done publication task as acceptance of the full project. The [management overview](README.md), [milestones](milestones.md) and [risk register](risks.md) define the remaining responsibilities and gates.

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
