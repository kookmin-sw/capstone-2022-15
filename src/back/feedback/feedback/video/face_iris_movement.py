import cv2
import numpy as np
import mediapipe as mp
from feedback.utils.io import download_video_from_s3


class IrisMovement:
    def __init__(self):
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_drawing_styles = mp.solutions.drawing_styles
        self.mp_face_mesh = mp.solutions.face_mesh
        self.result_iris = []
        self.duration = 0

    def eval(self, s3, bucket, key) -> np.array:
        path = download_video_from_s3(s3, bucket, key)
        cap = cv2.VideoCapture(path)
        print('read url')
        print(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        fps = int(cap.get(cv2.CAP_PROP_FPS))
        frame_num = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        self.duration = frame_num / fps
        self.result_iris = [[],[]]
        with self.mp_face_mesh.FaceMesh(
                max_num_faces=1,
                refine_landmarks=True,
                min_detection_confidence=0.5,
                min_tracking_confidence=0.5
            ) as face_mesh:
            for cnt in range(frame_num):
                success, image = cap.read()

                image = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
                results = face_mesh.process(image)
                if cnt % 100 == 0:
                    print(cnt)
                if results.multi_face_landmarks:
                    for face_landmarks in results.multi_face_landmarks:
                        landmark_474 = face_landmarks.landmark[474]
                        self.result_iris[0].append(landmark_474.x)
                        self.result_iris[1].append(landmark_474.y)
            self.result_iris = np.array(self.result_iris)

        cap.release()

    def write(self, path='/tmp/iris_movement.npz'):
        time = np.linspace(0, self.duration, len(self.result_iris[0]))
        np.savez(path, time=time, data=self.result_iris)
        return path
