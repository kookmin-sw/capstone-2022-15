def get_url_from_s3(s3, bucket, key):
    url = s3.generate_presigned_url(ClientMethod='get_object',
                                  Params={'Bucket': bucket, 'Key': key})
    return url


def download_audio_from_s3(s3, bucket, object):
    import librosa
    import soundfile as sf

    s3.download_file(bucket, object, "/tmp/feedback.mp4")
    data, sr = librosa.load("/tmp/feedback.mp4")
    sf.write('/tmp/stt.wav', data, sr)
    print('download finished!')
    return "/tmp/stt.wav"

def download_video_from_s3(s3, bucket, object):
    s3.download_file(bucket, object, "/tmp/feedback.mp4")
    return "/tmp/feedback.mp4"


def upload_file_to_s3(s3, path, bucket, key):
    s3.upload_file(path, bucket, key)
