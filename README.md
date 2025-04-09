# Technical Assessment Microservice

This project is a RESTful microservice developed for a technical assessment using **Node.js**, **Express**, **JWT**, **Docker**, **Terraform**, **Azure Kubernetes Service (AKS)**, and a **CI/CD pipeline** with **Azure DevOps**.

---

## 📌 Features

- `/DevOps` POST endpoint with input/output JSON structure.
- JWT generation unique per transaction.
- API Key validation via HTTP headers.
- Automatic deployment to Azure Kubernetes Service.
- Infrastructure as Code with Terraform.
- CI/CD pipeline (build, test, Docker push, and deploy).
- Static analysis via ESLint.
- Dependency management via npm.
- API key and JWT shown in Postman.
- Public IP endpoint (LoadBalancer).
- Multiple environments supported (`develop`, `staging`, `production`).

---

## 🧪 Request Format

```
POST /DevOps
Headers:
  X-Parse-REST-API-Key: 2f5ae96c-b558-4c7b-a590-a501ae1c3f6c
  X-JWT-KWY: ${jwt_generated}
Body:
{
  "message": "This is a test",
  "to": "Juan Perez",
  "from": "Rita Asturia",
  "timeToLifeSec": 45
}
```

### ✅ Response Example

```json
{
  "message": "Hello Juan Perez your message will be send",
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 🛠️ Development

Install dependencies:

```bash
npm ci
```

Run tests:

```bash
npm test
```

Start the server:

```bash
npm start
```

---

## 📦 Docker

Build and run locally:

```bash
docker build -t microservice .
docker run -p 3000:3000 microservice
```

---

## ☁️ Infrastructure (Terraform)

- Azure Resource Group
- Azure Container Registry (ACR)
- AKS Cluster with 2 nodes and Load Balancer

To deploy:

```bash
cd infra
terraform init
terraform plan
terraform apply
```

---

## 🚀 CI/CD Pipeline (Azure DevOps)

- Build and Test Stage (Node.js)
- Docker Build & Push to ACR
- Deploy to AKS only if branch is `master`, `develop` or `staging`
- Runs on push or manually

> 📝 Define service connections in Azure DevOps (`ACR_CONNECTION`, `AZURE_CONNECTION`).
> 🛠️ Request [free parallelism](https://aka.ms/azpipelines-parallelism-request) for hosted agents.

---

## 🔐 How to Generate API Key using Postman

1. Open Postman and set the request to `POST http://134.33.129.206/DevOps`
2. Set headers:
   - `X-Parse-REST-API-Key`: `2f5ae96c-b558-4c7b-a590-a501ae1c3f6c`
3. Send this JSON in the body (raw, type: JSON):

```json
{
  "message": "This is a test",
  "to": "Juan Perez",
  "from": "Rita Asturia",
  "timeToLifeSec": 45
}
```

4. You will receive a response with a `jwt` field.
5. Use that JWT as `X-JWT-KWY` in future requests.

---

## 📂 Project Structure

```
technical-assessment-project/
│
├── src/
│   └── index.js              # Main microservice code
│
├── infra/                    # Terraform IaC
│   └── main.tf, variables.tf, outputs.tf
│
├── Dockerfile                # Docker build file
├── azure-pipelines.yml       # CI/CD pipeline
├── .eslintrc.js              # ESLint configuration
└── package.json              # Node metadata and scripts
```

---

## 👤 Author

**Santiago Yambay**  
GitHub: [Santiago-Yambay](https://github.com/Santiago-Yambay)
