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
        self.start = None

    def eval(self, s3, bucket, key) -> np.array:
        path = download_video_from_s3(s3, bucket, key)
        print(path)
        cap = cv2.VideoCapture(path)
        print('read video')
        self.result_iris = [[],[]]
        with self.mp_face_mesh.FaceMesh(
                max_num_faces=1,
                refine_landmarks=True,
                min_detection_confidence=0.5,
                min_tracking_confidence=0.5
            ) as face_mesh:
            cnt = 0
            while cap.isOpened():
                success, image = cap.read()
                if not success:
                    break
                image = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
                results = face_mesh.process(image)
                if results.multi_face_landmarks:
                    for face_landmarks in results.multi_face_landmarks:
                        if cnt == 0:
                            self.start = np.array([face_landmarks.landmark[6].x, face_landmarks.landmark[6].y])
                        landmark_474 = face_landmarks.landmark[474]
                        landmark_471 = face_landmarks.landmark[471]
                        self.result_iris[0].append((landmark_474.x + landmark_471.x) / 2)
                        self.result_iris[1].append((landmark_474.y + landmark_471.y) / 2)
                cnt += 1
            self.result_iris = np.array(self.result_iris)

        cap.release()

    def write(self, path='/tmp/iris_movement.npz'):
        np.savez(path, data=self.result_iris, start=self.start)
        return path
