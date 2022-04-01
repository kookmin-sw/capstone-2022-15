# 머리 움직임 (Face tracing)

## Requirements
- docker

## 배포 (Deploy)

### 도커 이미지 빌드하기(Build a Docker Image)
```commandline
# 모델값 다운로드 (Download model weight)
cd face-tracing
wget http://dlib.net/files/shape_predictor_68_face_landmarks.dat.bz2
bzip2 shape_predictor_68_face_landmarks.dat.bz2

# 도커 이미지 (Build Docker Image)
docker build -t face-tracing .
```

### AWS ECR에 도커 이미지 올리기 (Push a Docker Image on AWS ECR)
Pushing a Docker image (AWS Docs) : [link](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)

### 컨테이너 기반 Lambda 함수 만들기 (Create Container Based Lambda Function)
Container based Lambda : [link](https://aws.amazon.com/ko/blogs/korea/new-for-aws-lambda-container-image-support/)

## 함수 설명 (About Function)
### 기본 도커 이미지 (Base Docker Image)
AWS 제공 Lambda 기반 Image (```python3.8```) :``` public.ecr.aws/lambda/python:3.8```

### 사용 라이브러리(Library)
- opencv
- dlib
- boto3

### 실행 과정(Step of Function)
1. ```opencv```를 통해 면접자의 면접 영상을 프레임 단위로 읽는다.
2. ```dlib```의 ```68 facial landmarks```를 기반으로 이전 프레임과 비교하여 머리의 움직임을 측정한다.
3. 머리 움직임에 대한 수치적인 결과값을 ```AWS S3```에 저장한다.


