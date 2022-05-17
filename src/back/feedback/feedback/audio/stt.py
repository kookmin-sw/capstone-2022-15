import boto3
import requests
from feedback.utils.io import download_audio_from_s3


class STT:
    def __init__(self, base_url, client_id, client_secret, lang="Kor"):
        self.text = ''
        self.url = base_url + lang
        self.headers = {
            "X-NCP-APIGW-API-KEY-ID": client_id,
            "X-NCP-APIGW-API-KEY": client_secret,
            "Content-Type": "application/octet-stream"
        }
        print('init class stt')

    def predict(self, s3, bucket, key):
        path = download_audio_from_s3(s3, bucket, key)
        speech_data = open(path, 'rb')
        response = requests.post(self.url, data=speech_data, headers=self.headers)
        response_code = response.status_code
        self.text = response.text
        assert response_code == 200, f"Error : {response.text}"

        return response.status_code

    def write(self, path='/tmp/result_stt.txt'):
        with open(path, 'w') as f:
            f.write(self.text)
        return path


