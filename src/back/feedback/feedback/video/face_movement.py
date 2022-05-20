import numpy as np
import cv2
import mediapipe as mp
from feedback.utils.io import download_video_from_s3

class FaceMovement:
    def __init__(self):
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_drawing_styles = mp.solutions.drawing_styles
        self.mp_face_mesh = mp.solutions.face_mesh
        self.result_distance = []
        self.duration = 0

    def eval(self, s3, bucket, key) -> np.array:
        path = download_video_from_s3(s3, bucket, key)
        cap = cv2.VideoCapture(path)
        print('read url')
        print(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        fps = cap.get(cv2.CAP_PROP_FPS)
        self.result_distance = []
        previous = np.array([0,0,0])
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
                if int(cnt % (fps/2)) == 0:
                    if results.multi_face_landmarks:
                        for face_landmarks in results.multi_face_landmarks:
                            landmark = face_landmarks.landmark[5]
                            current = np.array([landmark.x, landmark.y, landmark.z])
                            self.result_distance.append(np.sqrt(np.sum((current-previous)**2)))
                            import copy
                            previous = copy.deepcopy(current)
                cnt += 1
        self.duration = cnt / fps

        cap.release()

    def write(self, path='/tmp/face_movement.npz'):
        time = np.array([i*0.5 for i in range(1, len(self.result_distance[1:])+1)])
        print(time)
        np.savez(path, time=time, data=self.result_distance[1:])
        return path