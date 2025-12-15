# Upload Widget Server

A Node.js and TypeScript server built to support a file upload workflow,
designed to integrate with a front-end application and cloud storage services
using Cloudflare R2.

This project was developed as part of a postgraduate course in Full Stack Development
and used to explore backend architecture decisions that complement front-end features.

---

## 🎓 Academic Context

This project was developed during a postgraduate course with a focus on backend
engineering concepts, including:

- Backend architecture patterns
- Cloud storage integration strategies
- Modern Node.js and TypeScript practices
- Containerised development workflows

---

## 🚀 Overview

The project explores backend responsibilities commonly required to support
front-end applications, such as:

- File upload handling and streaming
- API validation and error handling
- Integration with cloud object storage (Cloudflare R2)
- Unique ID generation
- Docker-based development setup

This project does not focus on basic CRUD operations, assuming prior familiarity
with those concepts.

---

## 🛠️ Tech Stack

- Node.js
- TypeScript
- Express
- Multer (file handling)
- Cloudflare R2
- Docker

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
    git clone https://github.com/patriciasegantine/ftr-upload-server.git
    cd ftr-upload-server
```
2. Install dependencies
```bash
   npm install
```
3. To run with Docker
```bash
   docker-compose up
```

## 📄 API Documentation

TAPI documentation using OpenAPI/Swagger is planned for future updates.
Endpoints will cover file uploads, report generation, and basic health checks.

🎯 Purpose

This project was built to explore backend architecture and cloud storage integration in order to better support front-end features and understand the end-to-end flow
between UI, APIs, and infrastructure.

---

📚 Author
Patricia Segantine
Front-End Developer
GitHub Profile - [Patricia-Segantine](https://github.com/patriciasegantine)