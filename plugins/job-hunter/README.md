# job-application-agent

A Claude Code plugin that runs a job application end to end: company research, job ad analysis, a tailored resume, cover letter and email, selection criteria responses, a portfolio shortlist, linting, and export to Word.

It follows the UNSW Careers guides to resumes, cover letters and selection criteria, tuned for graduate tech roles and Australian applications.

## Install

In Claude Code:

```
/plugin marketplace add carriegale2710/job-application-agent
/plugin install job-application-agent@job-application-agent
```

Or from your shell:

```bash
claude plugin marketplace add carriegale2710/job-application-agent
claude plugin install job-application-agent@job-application-agent
```

To get updates later:

```bash
claude plugin marketplace update job-application-agent
```

### Requirements

- **Python 3** for the linter. No packages needed.
- **Node.js** and the `docx` package for Word export. Run `npm install docx` in the folder where you keep your applications.

## Use

Start Claude Code in the folder where you keep your resume and applications, then ask:

> Apply for this role: \<paste the job ad or a link\>

The `job-application-agent` agent runs these steps:

1. **Master resume and stories.** Builds or reads your source-of-truth resume and STAR story bank.
2. **Research.** Looks up the company's products, recent projects, values and news, and finds hooks for your cover letter.
3. **Decode the ad.** Picks the 3-5 criteria that decide shortlisting and tags each as *can do*, *will do* or *fit*. Notes the closing date and warns you if it is 3 days away or less. For any criterion with weak or missing evidence, it interviews you to find experience you haven't written down, then lets you choose how to handle the gaps that remain.
4. **Resume.** Chooses and orders sections, writes achievement statements, and writes the profile last.
5. **Cover letter and email.** One page, covering the vital criteria and why you want this company.
6. **Selection criteria.** Only when the employer asks. Each answer has an overview, a STAR example and a link back to the role.
7. **Application form.** Only when the employer uses a form with written questions. Writes answers sized to each field's limit, ready to paste.
8. **Portfolio.** Shortlists 2-4 case studies that prove the criteria, and drafts a new case study when none fits.
9. **Lint.** Checks every document against the guides' checklists, and reports which of the ad's keywords the resume is missing.
10. **Export.** Writes formatted `.docx` files, ready to send.
11. **Track.** Adds the application to `applications/tracker.md`, with closing and follow-up dates.
12. **Interview prep.** When you get an interview: likely questions matched to your STAR stories, honest answers for gaps and hard questions, company facts and questions to ask.

You can also call any skill on its own, for example `/job-application-agent:cover-letter`. Use `/job-application-agent:linkedin-profile` to write your LinkedIn headline, About section and Featured items from your master resume.

### Rules it always follows

- Never invents facts, numbers, dates or company details. It asks you instead.
- Never adds referees or "references available upon request".
- Writes in Australian English unless the application says US.
- Never mentions salary unless the ad asks for it.

## Your files

The plugin reads and writes Markdown in your workspace, so everything can live in Git.

```
resume/
  master-resume.md          everything about you; never sent to anyone
  stories.md                STAR stories for criteria, cover letters and interviews
  portfolio-index.md        your portfolio case studies
  case-studies/             drafts of new case studies, before you publish them
  linkedin.md               LinkedIn sections, ready to paste
applications/
  tracker.md                every application, with status and dates
applications/<company>-<role>/
  research.md               company research and cover letter hooks
  criteria.md               decoded job ad, closing date, spelling
  resume.md                 tailored resume
  cover-letter.md
  email.md
  selection-criteria.md     only when required
  form-answers.md           only for form-based applications
  portfolio.md              case study shortlist
  interview-prep.md         only when you get an interview
  resume.docx  cover-letter.docx  selection-criteria.docx
```

## What's inside

| Component | What it does |
|---|---|
| `agents/job-application-agent.md` | Runs the workflow and enforces the rules above |
| `skills/master-resume` | Builds your master resume, selling points, motivations, values and story bank, and runs gap interviews |
| `skills/company-research` | Researches the organisation, its terminology and cover letter hooks, with sources |
| `skills/job-ad-decoder` | Finds the vital criteria, evidence level, keywords, gaps, risks and application facts |
| `skills/section-architect` | Chooses resume sections, order, cuts, length and formatting |
| `skills/achievement-statements` | Writes bullets as action verb + task + outcome, finds honest numbers, and rewords true facts in the employer's terms |
| `skills/career-profile` | Writes the 3-5 point profile |
| `skills/cover-letter` | Writes job-ad, speculative, follow-up and referral letters, plus the email |
| `skills/selection-criteria` | Writes 3-part criteria responses |
| `skills/application-form` | Writes answers to online application form questions, within each field's limit |
| `skills/portfolio-curator` | Picks the case studies to feature, and drafts new ones from a template |
| `skills/application-lint` | Checklists plus `lint.py` for resumes, cover letters, criteria and keyword coverage |
| `skills/docx-export` | `export_docx.js` and Word templates |
| `skills/interview-prep` | Likely questions, matched stories, gap answers, hard questions and questions to ask |
| `skills/linkedin-profile` | Writes your LinkedIn headline, About, experience, skills and Featured items |
| `skills/career-changer-translator` | Translates skills and experience from one industry into the target field's language, and builds the "why I'm changing" story |
| `skills/cold-email-writer` | Writes personalised cold outreach emails to hiring managers and founders |
| `skills/creative-portfolio-resume` | Balances visual design with ATS compatibility for creative roles |
| `skills/reference-list-builder` | Formats your professional references and prepares reference materials |
| `skills/salary-negotiation-prep` | Researches market rates, builds a negotiation strategy and writes counter-offer scripts |

### Word templates

`skills/docx-export/templates/` holds three templates: a graduate tech resume (the default), a general resume and a cover letter. Each one is A4, 11pt Calibri, with right-aligned dates and no italics. The `.docx` files are generated from the `.md` files beside them.

## Run the tools directly

```bash
# Lint: --type resume | cover | criteria
python3 skills/application-lint/scripts/lint.py --type cover applications/acme-grad/cover-letter.md

# Lint a resume and check it covers the ad's keywords
python3 skills/application-lint/scripts/lint.py --type resume --keywords applications/acme-grad/criteria.md applications/acme-grad/resume.md

# Export Markdown to Word
node skills/docx-export/scripts/export_docx.js applications/acme-grad/resume.md applications/acme-grad/resume.docx
```

## Development

Try the plugin without installing it:

```bash
claude --plugin-dir .
```

Run the checks:

```bash
claude plugin validate .
python3 skills/application-lint/scripts/lint.py --test
node skills/docx-export/scripts/export_docx.js --test
```

### GitHub Copilot

The skills are plain `SKILL.md` folders. Copy `skills/*` into `.github/skills/`, and copy `agents/job-application-agent.md` to `.github/agents/job-application-agent.agent.md`.

## Credits

Based on UNSW Careers and Employment resources: *Resume / C.V. Guide with Examples*, *Cover Letter Guide*, *Addressing Selection Criteria*, and *Building a Professional Resume, Cover Letter and Portfolio*.

The gap interview, reframing strategies, gap options, terminology map and interview prep are adapted from [resume-tailoring-skill](https://github.com/varunr89/resume-tailoring-skill), MIT License, Copyright (c) 2025 Varun Ramesh.

The application form answers, keyword coverage check, number-finding guide, application tracker, hard interview questions, LinkedIn profile and case study template are adapted from [ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills), MIT License, Copyright (c) 2026 Resume Skills.
