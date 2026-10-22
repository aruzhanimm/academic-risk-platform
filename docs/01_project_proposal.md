# 01. Project Proposal

**Development of a Platform for Early Prediction of the Risk of Academic Overload and Emotional Burnout in Students Using Explainable Machine Learning**

**Institution:** Astana IT University

**Programme and group:** Software Engineering, SE-2423

**Supervisor:** Akbota Rakym

**Content status:** Draft. **Team review:** Pending.

## Problem and proposed value

The project investigates how a student can understand changes in academic workload and what an early risk estimate could responsibly add to that understanding. Its starting hypothesis is that a concise record of study time and known deadlines, together with a readable personal history, may make workload easier to review. When an independently evaluated model becomes available, an explanation could help the student understand the information behind its estimate and the limits of that interpretation.

These are questions for investigation. Student discussions and observed prototype use will establish which information students find useful, how much they are willing to record, and whether the proposed screens are understandable. The project does not assume that collecting more information or displaying a risk score improves well-being.

The [literature review](03_literature_review.md) identifies differences between workload measures, burnout instruments, concurrent associations and individual forecasting. The [existing-system comparison](04_existing_system_comparison.md) provides relevant patterns from institutional analytics, support platforms and personal tracking. Together, they support testing a focused student workflow without establishing that the proposed combination is unique or superior.

## Users and context

The primary user is a university student who voluntarily records selected observations and reviews their own history. The intended use is awareness and planning: understanding what was recorded, what changed, and what an available estimate means. Participation, missing values and unavailable results should be understandable without specialist knowledge.

Academic advisers and university support specialists are potential stakeholders for later development. Any additional workspace or sharing mechanism would require a confirmed need, defined access permissions and an agreed student-facing process. The initial scope includes neither automatic sharing nor medical records or diagnostic decisions.

## Aim and objectives

The aim is to develop a student-facing research prototype and evaluate the feasibility of early prediction of academic overload and emotional burnout using appropriately measured outcomes, eligible observations and understandable model explanations.

The objectives are to:

1. Investigate needs through student discussions and task-based prototype walkthroughs; connect observed difficulties to requirements and design changes.
2. Synthesize scientific evidence on measurement, temporal dynamics, prediction and explainability, and compare relevant systems and engineering alternatives.
3. Establish a precise outcome, measurement procedure, prediction time and horizon for each experiment; audit data suitability, access conditions and feature availability.
4. Design and implement the agreed workflows, including validation, personal history, controlled access, explicit result states and observable export/deletion requests.
5. Compare simple baselines and candidate models under a reproducible protocol, reporting uncertainty, coverage, errors and the value of added feature groups.
6. Evaluate software behaviour, explanation properties and user understanding separately, preserving actual evidence and unresolved limitations.

## Product scope and engineering work

The [requirements specification](06_requirements_specification.md) defines six functional and six non-functional requirements around four workflows: submitting an observation, viewing personal history, inspecting an estimate/explanation, and requesting export or deletion. The [UX prototype](08_ux_prototype.md) makes these interactions reviewable using synthetic observations. Its browser-memory behaviour supports early design checks while persistent storage and authenticated operations remain implementation work.

The proposed implementation uses React, a REST-style JSON API described with OpenAPI, FastAPI and PostgreSQL. The [technology comparison](05_technology_comparison.md) records alternatives and trade-offs. The [architecture](07_architecture.md) separates validation, ownership, history, estimation, explanation and data-control responsibilities within an initially modular backend. Model training runs offline, outside student requests.

The engineering challenge extends beyond connecting a form to a model. Historical results must retain the input revision and configuration actually used; later corrections must not alter earlier evidence. Every private operation must enforce ownership on the server, including lists, related results and export downloads. Repeated submissions, partial failures, missing values and expired exports need defined behaviour. Inference and explanation require bounded execution and distinct failure states. These properties connect research reproducibility with reliable application behaviour.

## Measurement and data conditions

Academic workload, perceived overload and emotional burnout require distinct operational definitions. Assignment counts alone do not establish either overload or burnout. The initial experiment should use one primary outcome and one justified horizon; another construct needs its own measurement and evaluation rather than a renamed label.

The reviewed dataset descriptions have not established a suitable accessible longitudinal burnout dataset. Before training, the project must confirm permissions, instrument/version/language, scoring and recall period, participant linkage, repeated measurements and an independent future outcome. Every predictor must have been available at the prediction time. Evaluation must distinguish new students from future observations of known students and prevent future information from entering development data.

If these conditions cannot be met, the useful next step is an agreed collection protocol or a clearly bounded current-state study. Synthetic observations remain suitable for interaction and software checks. A suitable evaluated model is required before numerical forecasts can be enabled; otherwise the interface shows `model_unavailable`. The interface distinguishes insufficient inputs from execution failures and displays no invented scores or contributions.

## Deliverables and stage boundaries

For **24 October 2026**, the intended submission is a coherent project definition: the proposal, evidence of relevance, critical literature review, system and technology comparisons, requirements, architecture with editable diagrams, interactive synthetic prototype, evaluation plan, project-management evidence and a record of received feedback. Repository materials and the consolidated report must describe the same state. Real student discussions and feedback still need to be collected and incorporated; prepared questions and technical checks do not establish those findings.

Later implementation deliverables are the student interface and backend, controlled data storage, tested API/data-control operations, and reproducible research artifacts where the data conditions are satisfied. The [evaluation plan](https://github.com/aruzhanimm/academic-risk-platform/blob/8dad01c592a7471e34abf5dfdb186573932f9f88/docs/09_verification_evaluation.md) specifies separate technical, modelling and walkthrough procedures. Success requires valid comparisons and transparent limitations; a candidate failing to improve on a baseline remains a reportable research finding.

LMS/calendar imports, timetable integration, reminders and connections to support services are future extensions. They depend on demonstrated needs, available interfaces and appropriate access arrangements.

## Team responsibilities

| Team member | Area of responsibility |
| --- | --- |
| Aruzhan Kartam | Research design, dataset assessment, modelling, comparative experiments, explainability and evaluation. |
| Vitaliy Golubenko | Architecture, backend, database, API, model integration and technical verification. |
| Saniya Yerzhan | Measurement and feature review, ablations, error analysis, user research, interface design and visualisation. |

The [management plan](10_project_management/README.md) and [task register](10_project_management/task_register.md) connect GitHub deliverables to YouTrack tasks and reviews. Results record their executor and evidence; responsibility assignments describe the planned division of work. Supervisor and user feedback will guide scope changes as the project progresses.
