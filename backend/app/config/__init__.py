import os
from dotenv import load_dotenv

load_dotenv()

AWS_REGION = os.getenv("AWS_REGION", "Asia Pacific (Mumbai) ap-south-1")
S3_BUCKET_NAME = os.getenv("S3_BUCKET_NAME")
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")

LOCAL_TMP_DIR = "temp_uploads"
if not os.path.exists(LOCAL_TMP_DIR):
    os.makedirs(LOCAL_TMP_DIR)