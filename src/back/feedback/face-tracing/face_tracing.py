import cv2
import dlib
import numpy as np
import boto3
import time
from urllib.parse import unquote_plus

s3 = boto3.client('s3')

def lambda_handler(event, context):
    # read file from s3
    bucket = event['Record']['s3']['bucket']['name']
    key = unquote_plus(event['Record']['s3']['object']['key'])
    video = s3.generate_presigned_url( ClientMethod='get_object', Params={ 'Bucket': bucket, 'Key': key} )
    
    start = time.time()

    # get video
    cap = cv2.VideoCapture(video)

    # get video information
    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frameWidth = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frameHeight = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)

    print("FPS (fps) : " + str(fps))
    print("The number of frame (frame) : " + str(length))
    print("running time (frame / fps) : " + str(length / fps))
    print("Frame Width (w) : " + str(frameWidth))
    print("Frame Heigth (h) : " + str(frameHeight))

    # detector function from dlib
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor("/opt/my-code/shape_predictor_68_face_landmarks.dat")

    color = (0,255,0)               # green
    weight = 5

    #movement_p30 = []
    #movement_p31 = []

    distance_p30 = []
    previous = (0,0)

    detecting_len = 0

    print("preprocessing : " + str(time.time() - start) + "s")
    start = time.time()

    for i in range(length): 
        _, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)

        for face in faces:
            landmarks = predictor(gray, face)
            #movement_p30.append([landmarks.part(29).x, landmarks.part(29).y])
            #movement_p31.append([landmarks.part(30).x, landmarks.part(30).y])
            distance_p30.append((landmarks.part(29).x - previous[0]) ** 2 + (landmarks.part(29).y - previous[1]) ** 2)
            previous = (landmarks.part(29).x, landmarks.part(29).y)



    cap.release()

    print("trace the face moving : " + str(time.time() - start) + "s")

    #movement_p30_numpy = np.array(movement_p30)
    #movement_p31_numpy = np.array(movement_p31)
    distance_p30_numpy = np.array(distance_p30)
    print(distance_p30_numpy)
    # X = np.linspace(0.0 ,len(distance_p30_numpy) / fps, num=len(distance_p30_numpy))

# lambda_handler("","")
