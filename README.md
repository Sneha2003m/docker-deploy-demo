\# Containerized Node.js + MySQL App 🐳



\## Architecture

Client → Node.js App (Docker) → MySQL (Docker) → Persistent Volume



\## Features

\- Multi-stage Dockerfile (builder + production)

\- Docker Compose for local development

\- Health checks on app and DB

\- Environment variable management via .env

\- Non-root user in container (security best practice)



\## Run Locally

```bash

docker compose up --build

```



\## Endpoints

| Route | Description |

|-------|-------------|

| GET / | App status |

| GET /health | Health check |

| GET /db | DB connection test |



\## Tech Stack

\- Node.js + Express

\- MySQL 8.0

\- Docker + Docker Compose

