# Contributing

This repository is organised for the team's project documentation, research materials, design assets, and future implementation. Keep each change focused, traceable, and understandable to another team member.

## Getting Started

Use your own GitHub account and obtain access to this repository. Clone it once, then configure your author identity inside the local checkout:

```sh
git clone https://github.com/aruzhanimm/academic-risk-platform.git
cd academic-risk-platform
git config --local user.name "Your Name"
git config --local user.email "YOUR_VERIFIED_GITHUB_EMAIL"
```

Replace both identity placeholders before committing. Use an email verified in your GitHub account or your GitHub-provided noreply address. These settings apply only to this repository.

Read the root README and the guide for the area you are changing. Application installation and test commands will be documented with the relevant components when executable code is introduced.

## Task, Branch, and Commit

Once YouTrack is configured, each meaningful work item must have a task with an owner, expected outcome, acceptance criteria, priority, and deadline. Use the actual task ID in the branch name and commit message or pull request description.

Start from the latest reviewed version:

```sh
git switch main
git pull --ff-only
git switch -c ARP-12-short-description
```

`ARP-12` is an example, not an existing task. Replace it with the real YouTrack ID. During the initial repository setup, before YouTrack is available, use a descriptive branch such as `chore/repository-foundation`; link the resulting change to its task after setup.

Commit one coherent change at a time. Documentation and design changes follow the same process as code. Inspect the exact files being staged:

```sh
git status --short
git add path/to/reviewed-file
git diff --cached
git diff --cached --check
git commit -m "ARP-12: Describe the completed change"
git push -u origin HEAD
```

Replace the example path, task ID, and message. Do not stage unrelated draft materials or private files.

## Pull Requests and Review

1. Open a pull request into `main` using the repository template.
2. Explain the problem, the resulting change, the task ID and URL, and the checks actually performed.
3. Ask another team member to review the changed files. Review should cover correctness, evidence, consistency, and the task's acceptance criteria.
4. Address the comments and request another check of the revised parts when needed.
5. Merge after approval and completion of the relevant checks. Add the pull request or commit link to the YouTrack task; mark it complete only when its acceptance criteria are met.

The initial README and repository foundation may be committed directly to establish the starting structure. This exception ends with the initial setup; subsequent work uses branches and peer-reviewed pull requests. Repository rules are a team workflow, not a claim that GitHub branch protection has been configured.

Use explicit feedback: identify the affected section, explain the concern, and suggest a correction where possible. A review must reflect the reviewer's actual reading of the work.

## Documentation and Research

- Write repository documentation in English and keep terminology consistent.
- Distinguish proposed work, observed findings, and evaluated results.
- Support material factual claims with sources and the relevant page or section. Include access dates for changeable online sources.
- Update affected requirements, diagrams, links, and explanations together.
- Store editable diagram sources alongside readable exports and check the exports after editing.
- Report the checks that were run and their outcomes. If a check does not apply, explain why; do not treat a documentation change as evidence that the application or model works.

## Data and Configuration

Review the staged diff even when `.gitignore` is present. Ignore rules do not remove files already tracked by Git and cannot identify sensitive information inside an arbitrary file.

Keep credentials, participant identities, raw interview responses, private documents, and restricted datasets out of the repository. Use field descriptions, permitted source references, and clearly labelled synthetic examples instead. Follow the [data guide](data/README.md) for dataset documentation.

Add dependency definitions and configuration examples when they correspond to actual components. Use placeholders in configuration examples and document how to provide local values. Commit package lockfiles when the selected package manager creates them.

## Submission Versions

Use the same repository throughout the project. After the team checks the submission contents and reviewer access, tag the exact submitted commit as `pre-defense-1`, `pre-defense-2`, or `final-pre-defense`, as appropriate.

Record the repository link, tag, completed work, limitations, and outstanding tasks in the submission materials. Do not move an already submitted tag or replace shared history with a force-push.
