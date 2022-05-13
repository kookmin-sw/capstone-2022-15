import numpy as np
import cv2
import mediapipe as mp
import matplotlib.pyplot as plt

class FaceMovement:
    def __init__(self):
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_drawing_styles = mp.solutions.drawing_styles
        self.mp_face_mesh = mp.solutions.face_mesh
        self.result_distance = []

    def eval(self, s3_url) -> np.array:
        cap = cv2.VideoCapture(s3_url)
        print('read url')
        print(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        fps = int(cap.get(cv2.CAP_PROP_FPS))
        frame_num = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        self.result_distance = []
        previous = np.array([0,0,0])
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
                print(cnt)
                if results.multi_face_landmarks:
                    for face_landmarks in results.multi_face_landmarks:
                        landmark = face_landmarks.landmark[5]
                        current = np.array([landmark.x, landmark.y, landmark.z])
                        self.result_distance.append(np.sqrt(np.sum((current-previous)**2)))
                        import copy
                        previous = copy.deepcopy(current)

        cap.release()
        print(self.result_distance)

    def write(self, path='/tmp/face_movemnt.png'):
        plt.plot(self.result_distance[1:])
#        plt.ylim([0,1])
        plt.savefig(path)
        return path