from fastapi import FastAPI
import os
from app.api.routes import router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(
    title="PDF QA System",
    description="Upload PDFs and ask questions using HuggingFace models!",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://askme-ai-1.onrender.com"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000)) 
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=True)