import os
import boto3
from urllib.parse import unquote_plus

from feedback.utils.io import *


def face_movement(url):
    from feedback.video.face_movement import FaceMovement
    fm = FaceMovement()
    print("Init Face Movement")
    fm.eval(url)
    path = fm.write()
    print("Save result on /tmp")
    return path


def iris_movement(url):
    from feedback.video.face_iris_movement import IrisMovement
    pass


def hand_movement(url):
    from feedback.video.hand_movement import HandsMovement
    pass


def voice_analysis(s3, bucket, key):
    from feedback.audio.voice_analysis import VoiceVolume
    volume = VoiceVolume()
    volume.make_result(s3, bucket, key)
    path = volume.write()
    return path


def speech_to_text(s3, bucket, key):
    from feedback.audio.stt import STT
    base_url = os.environ['STT_BASE_URL']
    client_id = os.environ['STT_CLIENT_ID']
    client_secret = os.environ['STT_CLIENT_SECRET']

    stt = STT(base_url, client_id, client_secret)
    status_code = stt.predict(s3, bucket, key)

    # Success
    if status_code == 200:
        path = stt.write()
    # Fail
    else:
        stt.text = f'Fail (Status code : {status_code}'
        path = stt.write()
    return path


def lambda_handler(event, context):
    # Get trigger s3 information
    message = event['Records'][0]['Sns']['Message'].split('\t')

    # Get Feedback Type
    feedback_type = os.environ['FEEDBACK_TYPE']
    save_bucket = os.environ['S3_BUCKET_NAME_SUBMIT']
    print(f"feedback_type : {feedback_type}")

    # Get S3 Object
    s3 = boto3.client('s3')
    bucket = message[0]
    key = message[1]
    values = key.split("/")
    user_id = values[0]
    interview_id = values[1]
    filename = values[-1].split(".")[0]

    # print information
    BASE_RESULT_PATH = f"{user_id}/{interview_id}/result/"
    print(f"bucket : {bucket}")
    print(f"key : {key}")
    print(f"user_id : {user_id}")
    print(f"interview_id : {interview_id}")
    print("** setting finish **")
    print("--" * 10)

    # get presinged url
    url = get_url_from_s3(s3, bucket, key)

    # 5 feedback types
    # (1) face_movement
    # (2) iris movement
    # (3) hand movement (Not Service)
    # (4) voice volume
    # (5) STT(Speech To Text)

    # (video) face movement
    if feedback_type == 'face-movement':
        path = face_movement(url)
        # user_id_{}/interview_id_{}/result/face_movement_{filename}.png
        upload_key = BASE_RESULT_PATH + f"face_movement_{filename}.png"

    # (video) iris movement
    elif feedback_type == 'iris-movement':
        path = iris_movement(url)
        # user_id_{}/interview_id_{}/result/iris_movement_{filename}.png
        upload_key = BASE_RESULT_PATH + f"iris_movement_{filename}.png"

    # (video) hand movemnt
    elif feedback_type == 'hand-movement':
        path = hand_movement(url)
        # user_id_{}/interview_id_{}/result/hand_movement_{filename}.png
        upload_key = BASE_RESULT_PATH + f"hand_movemnt_{filename}.png"

    # (audio) voice analysis
    elif feedback_type == 'voice-analysis':
        path = voice_analysis(s3, bucket, key)
        # user_id_{}/interview_id_{}/result/volume_{filename}.png
        upload_key = BASE_RESULT_PATH + f"volume_{filename}.png"

    # (audio) STT
    elif feedback_type == 'stt':
        path = speech_to_text(s3, bucket, key)
        # user_id_{}/interview_id_{}/result/stt_{filename}.txt
        upload_key = BASE_RESULT_PATH + f"stt_{filename}.txt"

    else:
        raise Exception(f"Invalid Feedback Type : {feedback_type}")

    # Upload Result
    upload_file_to_s3(s3, path, save_bucket, upload_key)
    print("Upload result file")


