from langchain.vectorstores import FAISS

# Singleton storage for vector DB
vector_store = None

def set_vector_store(store):
    global vector_store
    vector_store = store

def get_vector_store():
    return vector_store
