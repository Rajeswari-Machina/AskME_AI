from fastapi import APIRouter, UploadFile, File, HTTPException,Form
from fastapi.responses import JSONResponse
from app.services.pdf_processor import process_pdf
from app.services.qa_service import get_answer

router = APIRouter()
@router.get("/")
async def root():
    return {"message": "Welcome to the PDF QA System!"}
@router.post("/upload_pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(status_code=400, detail="Only PDF files are supported.")
        print("reached post request")
        process_pdf(file)
        return {"message": "PDF uploaded and processed successfully."}
    except HTTPException as he:
        raise he 
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/ask/")
async def ask_question(question: str = Form(...)):
    try:
        answer = get_answer(question)
        return JSONResponse(content={"question": question, "answer": answer})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
