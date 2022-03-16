import numpy as np
import librosa
import boto3
from urllib.parse import unquote_plus

s3 = boto3.client('s3')

DOWN_SAMPLING = 1000    # TODO : find appropriate sample rate

def read_file_from_s3(bucket, key):
    download_path = "/tmp/" + key
    s3.download_file(bucket, key, download_path)
    amplitude, sr = librosa.load(download_path)
    librosa.resample(amplitude, sr, DOWN_SAMPLING)
    return amplitude

def lambda_handler(event, context):

    # amplitude : the amplitude of audio files
    # sr : sample rate of audio files
    # the number of data per second
    # running time is amplitude.shape[0] / sr

    # read file from s3
    bucket = event['Record']['s3']['bucket']['name']
    key = unquote_plus(event['Record']['s3']['object']['key'])
    amplitude = read_file_from_s3(bucket, key)

    # TODO : how to make unique id (from file name)
    id = key + "id"

    running_time = amplitude.shape[0] / DOWN_SAMPLING

    # amplitude to decibal
    decibal = librosa.power_to_db(amplitude ** 2, ref = np.min)

    save_csv = False
    save_path = "/tmp/" + id

    # TODO : file format
    # save result on lambda local "/tmp"
    if save_csv:
        import pandas as pd
        save_path = save_path + ".csv"
        pd.DataFrame(decibal).to_csv(save_path)
    else:
        np.savez(save_path, x=decibal)

    # upload file to s3
    # param1 : local path
    # param2 : bucket name
    # param3 : s3 file name
    s3.upload_file(save_path, bucket, id)
