# Academic Risk Platform

**Development of a Platform for Early Prediction of the Risk of Academic Overload and Emotional Burnout in Students Using Explainable Machine Learning**

Diploma project · Astana IT University · Software Engineering · SE-2423

**Supervisor:** Akbota Rakym

## Overview

Academic Risk Platform is a diploma project exploring how explainable machine learning can help students understand their academic workload and recognise patterns associated with overload and emotional burnout. The project aims to combine workload tracking, a personal history of observations, and understandable explanations of model estimates in a single research prototype.

The platform is intended to support students’ awareness and planning. It does not provide medical diagnoses or replace professional support.

## Problem and Target Users

Students manage assignments, deadlines, and study time across multiple tools. The project investigates whether bringing these observations together can help students recognise changes in their workload and understand the factors behind a risk estimate.

**Primary users:** university students who want to track and reflect on their academic workload.

**Potential additional users:** academic advisers and university support specialists, with separately defined access and the student’s consent.

User discussions and prototype feedback will inform the requirements and help determine which information is useful, understandable, and practical to record.

## Aim and Expected Outcomes

The aim is to develop a research prototype and evaluate the feasibility of predicting academic overload and emotional burnout risk from appropriately collected student data.

Expected outcomes include:

- A documented problem definition, user requirements, and system architecture.
- A prototype for entering workload observations, viewing personal history, and exploring explanations of model estimates.
- A comparison of candidate models against baseline approaches under a reproducible evaluation protocol.
- An analysis of model errors, feature contributions, data limitations, and the usefulness of explanations.
- Technical tests and documentation supporting further development.

## Initial Scope

The initial prototype is planned around four capabilities:

1. **Workload input:** record selected workload observations and their dates through a concise form.
2. **Personal history:** review changes over time and identify missing observations.
3. **Explainable estimates:** display an estimate together with relevant contributing factors and its limitations, when supported by an evaluated model and sufficient data.
4. **Data control:** restrict access to each student’s records and provide clear controls over sharing and deletion.

Academic overload and emotional burnout will be treated as distinct outcomes. Forecasting experiments require repeated observations and outcomes measured after the prediction time; a current-state assessment will be reported separately from a future prediction. Model evaluation will account for student identity, time, and the availability of each feature at prediction time.

## Team and Responsibilities

| Team member | Responsibilities |
| --- | --- |
| **Aruzhan Kartam** | Research design, dataset assessment, model development, comparative experiments, explainability, and evaluation. |
| **Vitaliy Golubenko** | System architecture, backend development, database design, APIs, model integration, and technical testing. |
| **Saniya Yerzhan** | Risk-factor measurement, feature engineering, ablation studies and error analysis, user research, interface design, and visualisation. |

## Proposed Technology Stack

| Component | Proposed technology |
| --- | --- |
| Frontend | React |
| Backend | Python with FastAPI |
| Data storage | PostgreSQL |
| Component communication | REST API with an OpenAPI specification |
| Research and machine learning | Python; modelling libraries selected according to the data and evaluation protocol |
| Version control and review | Git and GitHub |
| Task management | YouTrack |

Technology choices will be assessed against the requirements and documented alongside the alternatives considered.

## Future Directions

Potential extensions include a personal task calendar, Moodle calendar import, timetable integration, configurable deadline reminders, and information about university support services. Integration work depends on user needs, available interfaces, and university approval. These extensions are outside the initial prototype scope.

## Repository Structure

```text
academic-risk-platform/
├── .github/          # Pull request template
├── docs/             # Project documentation and decisions
├── research/         # Literature, data assessment, and experiment protocols
├── diagrams/         # Editable diagram sources and readable exports
├── prototypes/       # Interface mockups and user flows
├── src/
│   ├── backend/      # API and application services
│   ├── frontend/     # Student-facing interface
│   └── ml/           # Model training, evaluation, and inference
├── tests/            # Automated tests and supporting fixtures
├── data/             # Data documentation, schemas, and synthetic examples
└── CONTRIBUTING.md   # Contribution and review workflow
```

Directory guides describe the intended contents; they do not represent an implemented application.

## Project Resources

- **Repository:** [aruzhanimm/academic-risk-platform](https://github.com/aruzhanimm/academic-risk-platform)
- **Contributing:** [workflow and review guidelines](CONTRIBUTING.md)
- **Documentation:** [document guide](docs/README.md)
- **Research:** [research guide](research/README.md)
- **Design:** [diagrams](diagrams/README.md) and [prototypes](prototypes/README.md)
- **Engineering:** [backend](src/backend/README.md), [frontend](src/frontend/README.md), [ML](src/ml/README.md), and [tests](tests/README.md)
- **Data:** [data handling and documentation](data/README.md)
- **YouTrack:** the project link will be added after setup.

Installation, execution, and testing instructions will accompany the runnable components when they are added to the repository.
