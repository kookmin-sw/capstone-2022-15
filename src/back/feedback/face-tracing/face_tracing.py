import cv2
import dlib
import numpy as np
import boto3
import time
from urllib.parse import unquote_plus

s3 = boto3.client('s3')

def eval(path, predictor_file):

    # get video
    cap = cv2.VideoCapture(path)

    # result
    result = dict()

    # get video information
    result['frame_count'] = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    result['width'] = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    result['height'] = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    #result['fps'] = cap.get(cv2.CAP_PROP_FPS)
    #result['running_time'] = result['frame_count'] / result['fps']

    #print("FPS (fps) : {}".format(result['fps']))
    print("The number of frame (frame) : {}".format(result['frame_count']))
    #print("running time (frame / fps) : {}".format(result['running_time']))
    print("Frame Width (w) : {}".format(result['width']))
    print("Frame Heigth (h) : {}".format(result['height']))

    # detector function from dlib
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor(predictor_file)

    # point 30's movement
    distance_p30 = []
    previous = (0, 0)
    for n in range(result['frame_count']):
        _, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)

        for face in faces:
            landmarks = predictor(gray, face)
            distance_p30.append((landmarks.part(29).x - previous[0]) ** 2 + (landmarks.part(29).y - previous[1]) ** 2)
            previous = (landmarks.part(29).x, landmarks.part(29).y)

    cap.release()

    distance_p30_numpy = np.array(distance_p30)

    return distance_p30_numpy

# on aws lambda
def lambda_handler(event, context):
    # read file from s3
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = unquote_plus(event['Records'][0]['s3']['object']['key'])
    video = s3.generate_presigned_url( ClientMethod='get_object', Params={ 'Bucket': bucket, 'Key': key} )
    # face_tracing_result = eval(video, "/opt/my-code/shape_predictor_68_face_landmarks.dat")     # Docker Environment Files
    predictor_file = "/opt/my-code/shape_predictor_68_face_landmarks.dat"
    #############33
    # get video
    cap = cv2.VideoCapture(video)

    # result
    result = dict()

    # get video information
    result['frame_count'] = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    result['width'] = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    result['height'] = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    #result['fps'] = cap.get(cv2.CAP_PROP_FPS)
    #result['running_time'] = result['frame_count'] / result['fps']

    #print("FPS (fps) : {}".format(result['fps']))
    print("The number of frame (frame) : {}".format(result['frame_count']))
    #print("running time (frame / fps) : {}".format(result['running_time']))
    print("Frame Width (w) : {}".format(result['width']))
    print("Frame Heigth (h) : {}".format(result['height']))

    # detector function from dlib
    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor(predictor_file)

    # point 30's movement
    distance_p30 = []
    previous = (0, 0)
    for n in range(result['frame_count']):
        _, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)

        for face in faces:
            landmarks = predictor(gray, face)
            distance_p30.append((landmarks.part(29).x - previous[0]) ** 2 + (landmarks.part(29).y - previous[1]) ** 2)
            previous = (landmarks.part(29).x, landmarks.part(29).y)

    cap.release()

    distance_p30_numpy = np.array(distance_p30)

    print(face_tracing_result)

# local
def face_tracing(path):
    predictor_file = "shape_predictor_68_face_landmarks.dat"
    face_tracing_result = eval(path, predictor_file)
    print(face_tracing_result)
    return face_tracing_result


if __name__ == "__main__":
    path = "../test001.mp4"
    start = time.time()
    result = face_tracing(path)
    print(time.time() - start)
