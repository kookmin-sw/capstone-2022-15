import librosa
import numpy as np
import matplotlib.pyplot as plt
from feedback.utils.io import download_audio_from_s3

DOWN_SAMPLING = 100  # TODO : find appropriate sample rate


class VoiceVolume:
    def __init__(self, down_sampling=DOWN_SAMPLING) -> None:
        self.down_sampling = down_sampling
        self.running_time = 0
        self.decibal = np.array([])

    def make_result(self, s3, bucket, key) -> np.array:
        path = download_audio_from_s3(s3, bucket, key)
        data, sr = librosa.load(path)
        amplitude = librosa.resample(data, sr, target_sr=self.down_sampling)
        self.running_time = amplitude.shape[0] / DOWN_SAMPLING
        self.decibal = librosa.power_to_db(amplitude ** 2, ref=np.min)
        self.decibal = np.convolve(self.decibal, np.ones((DOWN_SAMPLING,)) / DOWN_SAMPLING, mode='valid')

    def write(self, path='/tmp/volume.png'):
        plt.plot(self.decibal)
        plt.xticks([i for i in range(1, len(self.decibal), DOWN_SAMPLING * 30)],
                   [i // DOWN_SAMPLING for i in range(1, len(self.decibal), DOWN_SAMPLING * 30)])
        plt.ylim([0, 80])
        plt.savefig(path)
        return path
