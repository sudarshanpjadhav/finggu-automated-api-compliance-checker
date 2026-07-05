# Automated API Compliance Checker 🛡️

> **Automate your API compliance with seamless integration — catch violations before they reach production.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-4169E1?logo=postgresql)](https://postgresql.org)

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Features](#-features)
- [Architecture](#️-architecture)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Configuration](#-configuration)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔥 The Problem

Modern APIs must comply with a growing web of industry standards — GDPR, PCI-DSS, HIPAA, OpenAPI best practices, and internal governance rules. **Manual compliance checks are:**

- 🐌 **Slow** — Engineers spend 20-30% of development time on compliance reviews
- 😵 **Error-prone** — Human reviewers miss subtle violations
- 📉 **Inconsistent** — Different reviewers apply different standards
- 🔄 **Stale** — Compliance rules evolve faster than documentation

---

## 💡 The Solution

**Automated API Compliance Checker** continuously monitors your API endpoints against configurable compliance frameworks. It integrates directly into your CI/CD pipeline, alerting your team the moment a violation is detected — before it reaches production.

> "Shift compliance left" — catch issues during development, not after deployment.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Real-time Monitoring** | Intercept and analyze every API request/response against your compliance rules |
| 📋 **Custom Templates** | Define compliance rules as reusable YAML/JSON templates — GDPR, PCI-DSS, or your own |
| 🚨 **Smart Alerts** | Get notified via Slack, email, or webhook when compliance violations are detected |
| 📊 **Audit Reports** | Generate detailed PDF/HTML reports with violation evidence for auditors |
| 🔌 **Framework Agnostic** | Works with Express, Fastify, Koa, Flask, Django, Spring Boot — any HTTP API |
| 🧪 **CI/CD Integration** | Gate your deployments on compliance checks with GitHub Actions, GitLab CI, Jenkins |

---

## 🏗️ Architecture

```
┌─────────────┐     ┌───────────────────┐     ┌──────────────────┐
│   API Client │────▶│  FingguServer     │────▶│  Compliance      │
│  (Browser)   │     │  (Express)        │     │  Checker Engine  │
└─────────────┘     └───────────────────┘     └──────────────────┘
                                                    │
                                                    ▼
                                            ┌──────────────────┐
                                            │  Template Manager│
                                            │  (Rule Engine)   │
                                            └──────────────────┘
                                                    │
                                                    ▼
                            ┌───────────────────────────────────────┐
                            │         PostgreSQL Database           │
                            │  ┌─────────┐  ┌────────┐  ┌────────┐ │
                            │  │checks   │  │alerts  │  │reports │ │
                            │  └─────────┘  └────────┘  └────────┘ │
                            └───────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Node.js 18+, Express.js |
| **Frontend** | React 18, Recharts (dashboard), Tailwind CSS |
| **Database** | PostgreSQL 14 |
| **Background Jobs** | Bull / Redis for async compliance scanning |
| **Auth** | JWT + API Key authentication |
| **Deployment** | Docker, Docker Compose |

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/sudarshanpjadhav/finggu-automated-api-compliance-checker.git
cd finggu-automated-api-compliance-checker

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and API keys

# 4. Run database migrations
npm run migrate

# 5. Start the development server
npm run dev
```

Open [http://localhost:8787](http://localhost:8787) to see the dashboard.

---

## ⚙️ Configuration

All configuration is managed via environment variables:

| Variable | Default | Description |
|---|---|---|
| `PORT` | `8787` | Server port |
| `DATABASE_URL` | — | PostgreSQL connection string |
| `JWT_SECRET` | — | Secret key for JWT tokens |
| `COMPLIANCE_RULES_DIR` | `./rules` | Directory with compliance templates |
| `SLACK_WEBHOOK_URL` | — | Slack webhook for alerts |
| `ALERT_EMAIL` | — | Email recipient for compliance alerts |

---

## 📡 API Reference

### Check compliance of an API request

```http
POST /api/check
Content-Type: application/json

{
  "method": "GET",
  "path": "/api/users",
  "headers": { "Authorization": "Bearer ..." },
  "body": null,
  "frameworks": ["gdpr", "owasp"]
}
```

**Response:**

```json
{
  "passed": true,
  "checks": [
    { "rule": "gdpr-data-minimization", "status": "pass" },
    { "rule": "owasp-auth-check", "status": "pass" }
  ],
  "violations": []
}
```

### List compliance templates

```http
GET /api/templates
```

### Generate audit report

```http
POST /api/reports
Content-Type: application/json

{
  "dateRange": { "from": "2026-01-01", "to": "2026-07-01" },
  "format": "pdf"
}
```

---

## 📁 Project Structure

```
src/
├── FingguServer.js            # Express server entry point
├── FingguComplianceChecker.js # Core compliance checking engine
├── FingguTemplateManager.js   # Rule/template management
├── FingguAlertService.js      # Notification dispatch (Slack, email, webhook)
├── FingguReportGenerator.js   # PDF/HTML report generation
├── components/
│   ├── FingguDashboard.js     # Main monitoring dashboard
│   └── FingguAlertList.js     # Real-time alert feed
├── styles/
│   └── FingguStyles.css       # Application styles
db/
├── migrations/                # Database schema migrations
└── seeds/                     # Seed data
```

---

## 🗺️ Roadmap

- [ ] **AI-powered violation detection** — ML models to detect anomalous API behavior
- [ ] **Auto-remediation** — Automatically fix common compliance violations
- [ ] **Multi-cloud support** — Monitor APIs across AWS, GCP, Azure
- [ ] **VS Code extension** — Real-time compliance hints while coding
- [ ] **OpenAPI/Swagger import** — Auto-generate compliance rules from API specs

---

## 🤝 Contributing

Contributions are welcome! Please read our [contribution guidelines](CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<p align="center">
  Built with ❤️ by the Finggu Autonomous Software Factory
</p>
