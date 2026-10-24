# 10. Project Management and Risks

**Task snapshot: 24 October 2026, Asia/Almaty. Submission deadline: 18:00 today.**

This section connects the 24 October submission to actual task ownership, deliverables, dependencies and evidence. It addresses requirement 10 of the original assignment; the [milestones](milestones.md) and [risk register](risks.md) also track the unfinished evidence and submission conditions.

## Live project and records

- [GitHub repository](https://github.com/aruzhanimm/academic-risk-platform)
- [YouTrack project ARP](https://academic-risk-platform.youtrack.cloud/projects/ARP)
- [Academic Risk Platform Task Management Board — First sprint](https://academic-risk-platform.youtrack.cloud/agiles/204-1/218-1)
- [ARP issue list](https://academic-risk-platform.youtrack.cloud/issues/ARP)
- [Task register and delivery evidence](task_register.md)

Fourteen issues, ARP-2 through ARP-15, were created on 23 October. The current snapshot contains **nine Done, four In Progress and one To do**. ARP-2–ARP-10 cover published deliverables; ARP-11, ARP-13, ARP-14 and ARP-15 remain In Progress, while ARP-12 awaits supervisor feedback. The [task register](task_register.md) records their evidence and unresolved conditions. Live issue pages hold the current acceptance criteria and fields.

## Responsibilities

| Member | YouTrack account | Coordinating responsibility |
| --- | --- | --- |
| Aruzhan Kartam | `admin` | Proposal, research design, dataset/evaluation decisions, management, supervisor feedback and submission assembly. |
| Vitaliy Golubenko | `checkybox` | Technology, requirements, architecture, technical verification, review coordination and committee access; conducted the five recorded user discussions. |
| Saniya Yerzhan | `saniya777` | Measurement and literature synthesis, system comparison, student UX, user-evidence synthesis and interpretation of findings. |

These are work allocations. Each result and review identifies its actual executor; Vitaliy coordinates cross-review, while another member must review his contributions. [ARP-13] tracks the outstanding substantive peer review.

## States and completion evidence

| State | Meaning for this register |
| --- | --- |
| To do | Required work or evidence remains outstanding. |
| In Progress | Preparation or review is underway, but the task's complete outcome is not yet published or verified. |
| Done | The task's stated acceptance criteria are met for its recorded scope. Publication tasks concern the availability of reviewable deliverables. |

Publication tasks may be Done while their documents remain Draft or Proposed. Publication and merge events do not establish peer approval, supervisor acceptance, application security, predictive validity or user-test success. Those checks retain their own tasks and evidence.

PRs #1–#7 are merged in the confirmed publication baseline [af97bec](https://github.com/aruzhanimm/academic-risk-platform/commit/af97bec97a4992f138b64f47bb5874df95708d79). [PR #6](https://github.com/aruzhanimm/academic-risk-platform/pull/6) published the [evaluation plan](../09_verification_evaluation.md) under [ARP-8]; [PR #7](https://github.com/aruzhanimm/academic-risk-platform/pull/7) published the [proposal](../01_project_proposal.md) and management materials under [ARP-9] and [ARP-10]. The final evidence additions, 35-page report, editable Word version and prototype files are published on [docs/probation-period-one](https://github.com/aruzhanimm/academic-risk-platform/tree/docs/probation-period-one), at commit [2c23187](https://github.com/aruzhanimm/academic-risk-platform/commit/2c23187) at this check. This branch has not been merged into main. The repository is public; hosted-prototype access verification remains In Progress.

Due dates are task fields, not proof of when work or review occurred. Deliverable dates through 20 October follow the recorded Git commit-date references; actual issue-creation, review and merge events remain separate evidence. See the [milestone date references](milestones.md).

## Working process

1. Keep each meaningful work item in ARP with an owner, outcome, acceptance criteria, priority, due date and dependencies.
2. Use the real issue ID in new task branches and commit or pull-request descriptions. Link existing delivery evidence to its issue without rewriting shared history.
3. Keep changes focused and report the checks actually performed, their results and limitations. Retain permitted source references and clearly label synthetic examples.
4. Ask another team member to read the change and record substantive comments and resulting revisions. Follow the [contribution workflow](../../CONTRIBUTING.md) before merging new work.
5. Update the issue with the final PR/commit and acceptance evidence. Mark it Done only for the scope actually fulfilled; keep unresolved review, access and research work visible.

Participant identities, private feedback and raw personal records stay outside the public repository. Published findings use permitted, de-identified evidence. Planned interviews, reviewer comments and model results must never be filled in as completed observations.

## Next submission gate

Complete the remaining [user-evidence](../02_user_interviews.md) metadata checks under [ARP-11]. Eight [prototype checks](../evidence/prototype_checks.md) are recorded, but substantive teammate review under [ARP-13] and [supervisor feedback](../11_supervisor_feedback.md) under [ARP-12] remain outstanding. Verify hosted-prototype access under [ARP-14], reconcile the final branch and task evidence, and record the source revision used for submission.

[ARP-15] has a prepared [35-page report PDF](../../reports/prob-period-1/SE-2423_Kartam_ProbPeriod1.pdf) and [editable Word document](../../reports/prob-period-1/SE-2423_Kartam_ProbPeriod1.docx). The YouTrack evidence PDF, final tag verification and form submission remain pending. The required tag is `prob-period-1`; it is not yet recorded as published. The deadline is **24 October 2026 at 18:00, Asia/Almaty**. The [milestones](milestones.md) specify the remaining packaging checks; the [risk register](risks.md) records owners and closure evidence. A complete application or trained model is not required for this submission.

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
