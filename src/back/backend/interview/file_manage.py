import logging
import boto3
import botocore
from botocore.exceptions import ClientError

# generate a presigned URL for S3 object using lambda
def create_presigned_url(bucket_name, object_name, expiration=600):

    # AWS 연결 / AWS CLI profile 필요
    s3_client = boto3.client('s3', region_name='ap-south-1', config=boto3.session.Config(signature_verision='s3v4'))
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket':bucket_name,
                                                            'Key':object_name},
                                                    ExpiresIn=expiration)
    except Exception as e:
        logging.error(e)
        return "Error"

    return response

def lambda_handler(event, context):
    URLs = []
    # short-lived S3 URLs / presigned URLs
    URLs.append(create_presigned_url('devopsjunction', 'SQSCLI.exe.zip', 3600))
    URLs.append(create_presigned_url('devopsjunction', 'SQSCLI.dmg.zip', 3600))
