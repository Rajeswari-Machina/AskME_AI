import boto3
from app.config import AWS_REGION, S3_BUCKET_NAME ,AWS_SECRET_ACCESS_KEY,AWS_ACCESS_KEY_ID
print("reached s3")
s3_client = boto3.client(
    service_name ='s3',
    region_name=AWS_REGION,
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
    
)
print(s3_client)
def upload_file_to_s3(local_file_path, s3_key):
    s3_client.upload_file(local_file_path, S3_BUCKET_NAME, s3_key)
    print(f"Uploaded {s3_key} to S3 bucket {S3_BUCKET_NAME}")

def download_file_from_s3(s3_key, local_file_path):
    s3_client.download_file(S3_BUCKET_NAME, s3_key, local_file_path)
