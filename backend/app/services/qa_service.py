from app.models.vector_store import get_vector_store
from transformers import pipeline
from langchain.llms import HuggingFacePipeline
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate


prompt_template = PromptTemplate(
    input_variables=["question"],
    template="""
You are a knowledgeable assistant. When answering, explain concepts clearly and in a detailed, step-by-step manner.
Answer this question:

Context: {context}

Question: {question}

Answer in long, clear, detailed sentences:
"""
)


qa_pipeline = pipeline(
    "text2text-generation",
    model="google/flan-t5-base",
    device=-1,
    max_length=1024,       
    temperature=0.7        
)
llm = HuggingFacePipeline(pipeline=qa_pipeline)


def get_answer(question: str) -> str:
    vector_store = get_vector_store()
    if vector_store is None:
        raise ValueError("No PDF uploaded yet.")

    qa = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vector_store.as_retriever(),
        chain_type_kwargs={"prompt": prompt_template}
    )
    
    response = qa(question)
    print(response)

    return response
