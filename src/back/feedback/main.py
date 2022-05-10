import os

import boto3
from urllib.parse import unquote_plus
from feedback.utils.io import upload_file_to_s3


def lambda_handler(event, context):
    # Get Feedback Type
    feedback_type = os.environ['FEEDBACK_TYPE']
    print(f"feedback_type : {feedback_type}")

    # Get S3 Object
    s3 = boto3.client('s3')
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = unquote_plus(event['Records'][0]['s3']['object']['key'])
    values = key.split("/")
    user_id = values[0]
    interview_id = values[1]

    BASE_RESULT_PATH = f"{user_id}/{interview_id}/result/"

    # get presinged url
    # url = s3.generate_presigned_url(ClientMethod='get_object',
    #                                 Params={'Bucket': bucket, 'Key': object})

    print(f"bucket : {bucket}")
    print(f"key : {key}")
    print(f"user_id : {user_id}")
    print(f"interview_id : {interview_id}")

    # (video) face movement
    if feedback_type == 'face-movement':
        from feedback.video.face_movement import FaceMovement
        pass

    # (video) iris movement
    elif feedback_type == 'iris-movement':
        from feedback.video.face_iris_movement import IrisMovement

    # (video) hand movemnt
    elif feedback_type == 'hand-movement':
        from feedback.video.hand_movement import HandsMovement

    # (audio) voice analysis
    elif feedback_type == 'voice-analysis':
        from feedback.audio.voice_analysis import VoiceVolume
        volume = VoiceVolume()
        volume.make_result(s3, bucket, key)
        path = volume.write()
        # TODO : use question id
        upload_key = BASE_RESULT_PATH + "result_volume_01.png"
        upload_file_to_s3(s3, path, bucket, upload_key)

    # (audio) STT
    elif feedback_type == 'stt':
        # sys.path.append('/home/jaeo/Desktop/22-1/capstone/feedback')
        from feedback.audio.stt import STT
        base_url = os.environ['STT_BASE_URL']
        client_id = os.environ['STT_CLIENT_ID']
        client_secret = os.environ['STT_CLIENT_SECRET']

        stt = STT(base_url, client_id, client_secret)
        status_code = stt.predict(s3, bucket, key)

        # Success
        if status_code == 200:
            path = stt.write()
            upload_key = BASE_RESULT_PATH + "result_stt_01.txt"
            upload_file_to_s3(s3, path, bucket, upload_key)
        # Fail
        else:
            pass
    else:
        pass
