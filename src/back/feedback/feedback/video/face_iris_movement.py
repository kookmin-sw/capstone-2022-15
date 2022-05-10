import cv2
import mediapipe as mp

class HandsMove:
    def __init__(self, s3_path, stride=0):
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_hands = mp.solutions.hands
        self.path = s3_path
        self.stride = stride

    def measure(self):

        hands_movement = []

        cap = cv2.VideoCapture(self.path)
        frame_num = 0
        with self.mp_hands.Hands(model_complexity=0,
                            min_detection_confidence=0.2,
                            min_tracking_confidence=0.2) as hands:
            while cap.isOpened():
                if frame_num % self.stride != 0:
                    frame_num += 1
                    continue
                else:
                    frame_num = 1

                success, image = cap.read()
                if not success:
                    frame_num = 0
                    continue

                image.flags.writeable = False
                image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                results = hands.process(image)
                #hands_movement.append
                print(len(results.multi_hand_landmarks if results.multi_hand_landmarks else []))
        cap.release()
        return np.array(hands_movement)