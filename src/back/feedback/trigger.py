import os
import json

import boto3
from urllib.parse import unquote_plus
sns = boto3.client("sns")

def lambda_handler(event, context):
    bucket = os.environ['S3_BUCKET_NAME_GET']
    key = unquote_plus(event['Records'][0]['s3']['object']['key'])
    arn = os.environ['SNS_TOPIC_ARN']
    response = sns.publish(
        TargetArn=arn,
        Message=f"{bucket}\t{key}"
    )
