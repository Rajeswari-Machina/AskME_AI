from app.models.vector_store import get_vector_store
from transformers import pipeline
from langchain.llms import HuggingFacePipeline
from langchain.chains import RetrievalQA

qa_pipeline = pipeline("text2text-generation", model="google/flan-t5-base", device=-1)
llm = HuggingFacePipeline(pipeline=qa_pipeline)

def get_answer(question: str) -> str:
    vector_store = get_vector_store()
    if vector_store is None:
        raise ValueError("No PDF uploaded yet.")

    qa = RetrievalQA.from_chain_type(llm=llm, retriever=vector_store.as_retriever())
    response = qa(question)
    print(response)
    return response
