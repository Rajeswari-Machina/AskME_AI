import shutil
import os
from app.models.vector_store import set_vector_store
from app.services.s3_service import upload_file_to_s3, download_file_from_s3
from app.config import LOCAL_TMP_DIR
from langchain.document_loaders import PyMuPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS

def process_pdf(file):
    local_file_path = os.path.join(LOCAL_TMP_DIR, file.filename)
    print(local_file_path)
    with open(local_file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    # Upload to S3
    print("Uploading callling s3")
    upload_file_to_s3(local_file_path, file.filename)

    # Load PDF locally
    loader = PyMuPDFLoader(local_file_path)
    documents = loader.load()

    # Split into chunks
    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
    docs = splitter.split_documents(documents)

    # Generate embeddings
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

    # Create vectorstore
    vector_store = FAISS.from_documents(docs, embeddings)

    # Save globally
    set_vector_store(vector_store)

    # Delete temp file
    os.remove(local_file_path)
