import numpy as np
import librosa

s3 = boto3.client('s3')

def lambda_handler(event, context):
    
    # TODO read audio file
    # TODO make it to trigger from "event"
    # amplitude : the amplitude of audio files
    # sr : sample rate of audio files
    # the number of data per second
    # running time is amplitude.shape[0] / sr

    amplitude, sr = librosa.load(audio_path)
    audio = s3.generate_presigned_url( ClientMethod='get_object', Params={ 'Bucket': "", 'Key': "" } )
    sr = None
    print(audio)

    # amplitude to decibal
    decibal = librosa.power_to_db(y ** 2, ref = np.min)

    # TODO write or send result



