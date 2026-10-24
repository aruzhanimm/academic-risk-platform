# 04. Existing System Comparison

Official sources checked: **23 October 2026, Astana time**. Design implications are proposals for the initial prototype.

## Purpose and comparison method

This comparison identifies useful capabilities and boundaries for the Academic Risk Platform's initial student-facing prototype: voluntary workload input, personal history, understandable estimates when supported by an evaluated model, and control over personal records. This scope follows the [project overview](../README.md) and the distinction between measurement and forecasting established in the [literature review](03_literature_review.md).

Four existing systems are compared against eight common criteria using public official product pages. Documented capabilities are vendor statements, not findings from independent testing or access to private product accounts. **Not established** means that the reviewed material does not establish a capability; it does not mean the capability is absent. Pricing tiers, deployment-specific settings, and contractual guarantees were not evaluated.

The sample covers institutional student-risk analytics and two adjacent functions: access to well-being support and personal self-tracking. These groups serve different users and outcomes, so the comparison does not assign a single winner or convert unknown functions into zero scores. Vendor retention gains and satisfaction figures are not treated as comparable experimental results.

## Systems selected and relevance

| System | Comparison group | Reason for inclusion and target boundary |
| --- | --- | --- |
| **Civitas Learning — Institutional Impact Platform, Actionable Analytics** | Student-risk analytics | Models persistence, graduation, engagement, thriving, grades, and career outcomes. Whether “thriving” corresponds to an independently measured burnout outcome is not established. [SYS-01] |
| **EAB Navigate360** | Student-risk analytics | Combines student profiles, predictive analytics, and coordinated support. Its student-success and retention focus does not establish our proposed burnout target or forecast horizon. [SYS-04] |
| **YOU for Students — YOU at College** | Adjacent well-being and support platform | Combines self-checks, goals, personalised resources, and campus support. Resource personalisation is different from validated prediction of future overload. [SYS-05] |
| **Daylio** | Adjacent self-tracking application | Offers brief mood/activity entry and a personal record. Mood is not automatically a burnout measure, and its audience is broader than university students. [SYS-07] |

The first group overlaps with the **function of identifying student risk**, not necessarily with the project's outcome. The reviewed sample does not establish four exact counterparts combining voluntary student input, an independent future overload/burnout outcome, and explanations delivered to the student. This is a boundary of the comparison, not evidence that such products do not exist.

## Comparison across eight common criteria

The criteria cover purpose, input, history, forecasting, explanation, action, access, and portability. **SIS** means student information system; **LMS**, learning management system; **CRM**, customer relationship management system.

| Criterion | Civitas Learning | EAB Navigate360 | YOU for Students | Daylio |
| --- | --- | --- | --- | --- |
| **C1. Purpose and main users** | Institutional outcome analytics for leaders and student-support teams. [SYS-01] | Student-success CRM for students and university staff. [SYS-04] | Student well-being and connection to campus resources. [SYS-05] | Personal mood and activity diary. [SYS-07] |
| **C2. Data sources and input** | Institutional history; SIS, LMS, and CRM integration. [SYS-01], [SYS-02] | Primarily SIS data; optional LMS/custom datasets and student surveys. [SYS-04] | Interactive self-checks and user-defined goals. [SYS-05] | User-selected moods and activities, with optional notes. [SYS-07] |
| **C3. History and change over time** | Historical records and current profiles; a student's personal diary is not established. [SYS-01], [SYS-02] | Historical analytics and progress monitoring; personal well-being history is not established. [SYS-04] | Self-checks are documented; a student-visible timeline of results is not established. [SYS-05] | Lists, calendar views, charts, and entry statistics. [SYS-07] |
| **C4. Prediction of a future outcome** | Outcome-specific models are described; a burnout forecast horizon is not established. [SYS-01] | Predictive modelling is listed; a burnout label and horizon are not established. [SYS-04] | Individual future burnout prediction is not established. [SYS-05] | Individual future burnout prediction is not established. [SYS-07] |
| **C5. Explanation of a result** | Prediction factors for advisers; student-facing explanations and the attribution method are not established. [SYS-01] | Individual prediction explanations with feature contributions are not established. [SYS-04] | Personalised content; explanation of an ML forecast is not established. [SYS-05] | Mood/activity charts and correlations; not evidence of causality or predictive-model explanation. [SYS-07] |
| **C6. Next action or support** | Staff prioritisation of outreach and proactive support. [SYS-01] | Appointments, referrals, messages, alerts, and tasks. [SYS-04] | Goals, skill-building tools, and campus resources. [SYS-05] | Goals and journalling reminders. [SYS-07] |
| **C7. Access boundaries** | Role, permission, and student-record visibility controls are described. [SYS-03] | Multiple institutional users; the detailed record-access matrix is not established. [SYS-04] | Aggregate institutional analytics and confidentiality claims; individual access rules need clarification. [SYS-05], [SYS-06] | Provider describes local storage, optional private cloud backups, and no server access to entries. [SYS-08] |
| **C8. Portability of personal records** | Student-initiated export or deletion is not established. [SYS-01], [SYS-02] | Partner APIs and bulk exports; student-initiated export is not established. [SYS-04] | Export or deletion of personal records is not established. [SYS-05] | PDF/CSV export and backups are advertised; tier-specific restrictions were not checked. [SYS-07] |

## Interpretation and proposed design decisions

The comparison suggests five decisions for the initial prototype. These are design inferences for review, not findings from user interviews.

1. **Start with concise input and personal history.** Self-tracking offers a useful interaction pattern to test: a small number of clear actions followed by a readable history. The exact workload fields must follow the [feature operationalisation register](../research/feature_operationalization.md), measurement evidence, and user feedback. The register's candidate fields are not all mandatory interface fields. Whether students find this workflow useful remains a question for evaluation.

2. **Design explanations for the student's decisions.** An explanation should identify the information used, the meaning of the estimate, and its limitations. A staff-facing risk explanation cannot simply be copied into a student interface. Since prediction factors already appear in the reviewed systems, explainability alone is not a sufficient novelty claim. Attribution quality and user understanding require separate evaluation, as discussed in the [literature review](03_literature_review.md).

3. **Keep history, current assessment, and forecasting distinct.** A history chart can remain useful without a suitable predictive model. Mood, retention, overload, and burnout are different constructs. Any future forecast needs an agreed outcome, time horizon, and information available at prediction time. If the model is unavailable or inputs are insufficient, the interface should explain that state without producing a numerical estimate. An unavailable result must not appear as zero risk.

4. **Defer institutional integrations.** Institutional analytics depends on university data and support workflows. The initial project can instead test voluntary entry and access to the student's own records. LMS/calendar imports and adviser access should require a separate needs assessment, access agreement, and explicit sharing design. They are not prerequisites for evaluating the initial input/history workflow.

5. **Specify data control as observable behaviour.** Define who can read a record, how export or deletion can be requested, and how completion is communicated. A confidentiality statement does not demonstrate those behaviours. Access restrictions and request handling must be checked in the eventual implementation; they cannot be inferred from a database or framework choice.

The proposed position is a focused research prototype for student awareness and planning, with small-scale voluntary input, personal history, and explainable estimates only when the measurement and model evidence support them. This comparison does not establish superiority, clinical benefit, scientific novelty, or model readiness. The platform is not intended to diagnose a medical condition or replace professional support.

## Primary-source register

**Access date for every source: 23 October 2026.** These are official product descriptions and documentation, not peer-reviewed scientific publications. The locations below identify the sections used; private documentation, account interfaces, demos, and contracts were not inspected.

| ID | Official source | Reading location and evidence used |
| --- | --- | --- |
| **SYS-01** | [Civitas Learning — Actionable Analytics](https://civitaslearning.com/analytics/) | Opening outcome list; “Institution-Specific Predictive Models”; “Real-Time, Holistic Views”; staff-use section; FAQ on prediction factors. Supports outcomes, profiles, and adviser-facing explanations. |
| **SYS-02** | [Civitas Learning — Data Lakehouse](https://civitaslearning.com/data-lakehouse/) | “From fragmented systems to actionable intelligence”; FAQ on changing source systems. Supports SIS/LMS/CRM integration and preservation of historical records. |
| **SYS-03** | [Civitas Learning — AI Governance](https://civitaslearning.com/ai-governance/) | “AI Access”; subsections separating AI access from student-data access and handling unavailable permissions. Supports stated role and student-visibility controls; not an independent security audit. |
| **SYS-04** | [EAB — Navigate360](https://eab.com/solutions/navigate360/) | “Staff Workflow & Automation”; “Student Engagement Hub”; “Reporting & Analytics”; FAQs on users and data sources/exports. Supports documented workflows, analytics, and data movement. |
| **SYS-05** | [YOU for Students](https://youatcollege.com/higher-education-wellbeing-products/you-for-students/) | “How YOU for Students Works”; “Data-Driven Student Success”. Supports self-checks, goals, personalised resources, campus connections, and aggregate analytics. |
| **SYS-06** | [YOU at College](https://youatcollege.com/) | “The Foundation for Campus Success”, especially its personalisation and confidentiality subsections. Supports the provider's privacy claims, not independently verified guarantees. |
| **SYS-07** | [Daylio — Journal, Diary and Mood Tracker](https://daylio.net/) | “How Does Daylio Work?”; chart/history descriptions; “Other Features”. Supports entry, history, correlations, goals, reminders, backup, and export. |
| **SYS-08** | [Daylio — Data security](https://daylio.net/faq/docs/daylio-faq/about/how-secure-is-my-data/) | Main article. Supports the provider's description of local storage, optional Google Drive/iCloud backups, and its lack of access to diary entries. |

[SYS-01]: https://civitaslearning.com/analytics/
[SYS-02]: https://civitaslearning.com/data-lakehouse/
[SYS-03]: https://civitaslearning.com/ai-governance/
[SYS-04]: https://eab.com/solutions/navigate360/
[SYS-05]: https://youatcollege.com/higher-education-wellbeing-products/you-for-students/
[SYS-06]: https://youatcollege.com/
[SYS-07]: https://daylio.net/
[SYS-08]: https://daylio.net/faq/docs/daylio-faq/about/how-secure-is-my-data/
