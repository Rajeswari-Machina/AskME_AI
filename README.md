
# AskME_AI - PDF Upload, S3 Storage, Embedding, and Question Answering

<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/style-TailWind CSS-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-FAISS-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/cloud store-AWS_S3-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deploy-Render-blueviolet?style=for-the-badge" />
</p>

---

##  Overview

AskME_AI is a full-stack application that allows users to upload PDF documents, automatically store them on AWS S3, process and embed the content using state-of-the-art language models, and retrieve intelligent answers based on user questions.

---

##  Architecture

![ChatGPT Image Apr 27, 2025, 10_27_25 PM](https://github.com/user-attachments/assets/70a78e87-9480-4e80-b2bf-db9d43b9d585)


---

##  Features

-  Upload PDFs via an intuitive web interface
-  Store uploaded PDFs securely in AWS S3
-  Split PDF content intelligently into text chunks
-  Generate vector embeddings using HuggingFace models
-  Search for answers using FAISS vector store
-  Auto-remove temporary files after upload

---

##  Tech Stack

| Layer       | Technology |
|:------------|:------------|
| Frontend    | React.js, Axios, Tailwind CSS |
| Backend     | FastAPI, LangChain, HuggingFace Transformers |
| Vector DB   | FAISS |
| Storage     | AWS S3 |
| Embedding Model | sentence-transformers/all-MiniLM-L6-v2 |

---

##  Folder Structure

```
frontend/
  └── src/
      ├── components/
      └── pages/
backend/
  └── app/
      ├── api/         # FastAPI Routes
      ├── services/    # S3 upload/download
      ├── models/      # Vector store instance
      ├── config/      # Configurations
temp_uploads/          # Temporary local file storage
```

---

##  Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/AskME_AI.git
cd AskME_AI
```

---

### 2. Backend Setup (FastAPI)

#### ➔ Create a virtual environment and activate it:

```bash
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate for Windows
```

#### ➔ Install dependencies:

```bash
pip install -r requirements.txt
```

#### ➔ Environment Variables

Create a `.env` file inside `backend/` with the following:

```env
AWS_REGION=region_name
S3_BUCKET_NAME=bucket_name
AWS_SECRET_KEY = secret_key
AWS_SECRET_ACCESS_KEY=access_key
LOCAL_TMP_DIR=./temp_uploads/
```

#### ➔ Run Backend Server:

```bash
PYTHONPATH. uvicorn app.main:app --reload
```

---

### 3. Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at [http://localhost:5173](http://localhost:5173).

---

##  API Endpoints

| Method | Endpoint             | Description |
|:------|:----------------------|:------------|
| POST  | `/upload_pdf/`         | Upload a PDF file |
| POST  | `/ask/`                | Ask a question based on uploaded documents |

---

##  Security

- CORS configured to allow frontend communication
- AWS credentials and config managed through environment variables
- Temporary files automatically deleted after use

---

##  Future Enhancements

-  User Authentication and Authorization
-  Support Multi-file Uploads
-  Stream processing for very large PDFs
-  Persistent FAISS storage (Disk-based VectorDB)
-  Chatbot-like dynamic conversations (multi-turn)
- Admin dashboard for managing uploads and vector stores

---


# 💬 Quick Preview

> 1. Upload a PDF 📄  
> 2. AI processes and understands it 
> 3. Ask questions and get answers instantly! 

---
