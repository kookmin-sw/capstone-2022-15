# "인퓨" Interview For You

**팀페이지 주소** : https://kookmin-sw.github.io/capstone-2022-15

<br>

### 우수상 수상 🏆 
Won Second Prize 

<br>

## 1. 프로젝트 소개
<p align="center"><img src="https://user-images.githubusercontent.com/39540525/158740938-f31ba6ad-a470-444c-b433-1924d181d633.png"></p>

프로젝트 이름인 '인퓨(INFU 또는 IN4U)'는 'Interview For You'의 뜻을 가진다. 
인퓨는 가상 생성된 얼굴의 면접관과 함께 사용자가 면접 연습을 하고 피드백을 받을 수 있는 웹 서비스다.

<!-- 이어서 프로젝트의 필요성에 대해 설명하겠습니다. -->
면접은 대입, 취업, 이직과 같이 새로운 시작을 할 때 필수이지만 많은 사람들이 어려워 하는 과정 중 하나이다.
사람인에서 진행한 설문조사에 따르면 면접을 경험한 구직자 중 약 77%가 자신의 면접에 대해 후회한다고 응답하였고, 그 중 반복적으로 연습하면 답할 수 있는 "준비한 답변을 제대로 하지 못해서"가 가장 높은 비율을 차지했다.
또한 2020년부터 언택트가 일상화 되면서 대부분의 면접이 비대면으로 바뀌었다. 
펜데믹 종식 이후에도 비대면 채용 유지를 지속한다는 기업이 증가하는 추세로, 온라인 면접 준비의 필요성이 높아지고 있다.

인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다.
StyleGAN과 Wav2lip으로 생성된 면접관과 함께 면접 연습을 할 수 있어, 대면 면접뿐 아니라 온라인으로 시행하는 사람 대 사람 면접 연습에 도움을 줄 수 있다.

<!-- 인퓨의 주요 기능 및 기대 효과는 다음과 같다. -->

<!-- 앞서 본 기존의 서비스들과 저희 인퓨의 차별점은 바로 면접관이 있다는 것입니다.  -->
<br>

### I. 주요 기능 

1.  면접관 
    - 미리 준비한 질문을 바탕으로 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문 전달 
  
2. 피드백 
    - 면접자(사용자)가 진행한 면접에 대한 수치화된 객관적 정보 제공
        - 영상 처리 : 머리 움직임, 시선 처리 
        - 음성 처리 : 목소리 크기, STT
<br>

### II. 기대효과

본 서비스를 통해 기대하는 효과는 다음과 같다.
- 면접 스터디나 학원의 도움 없이 혼자서도 면접 연습을 할 수 있다.
- 누구나, 언제나, 어디에서나 면접 연습이 가능하다.
- 가상 면접관과 연습을 하며 면접관과 마주 보며 말을 해야 한다는 부담감을 줄일 수 있다.
- 녹화된 나의 모습을 확인하면서 면접 중 무의식으로 나오는 습관을 확인할 수 있다.
- 피드백을 통해 면접자가 기본적으로 갖추어야할 면접 태도를 점검하고 개선할 수 있다.
 
<br>

### III. 시스템 구조도

![시스템구조도](https://user-images.githubusercontent.com/39400030/170180525-26469b5c-c216-4bbf-81e4-1c0e7859eae3.png)
<!-- <img width="1440" alt="시스템구조도" src="https://user-images.githubusercontent.com/39400030/161415199-beed98b6-9382-4046-bf38-957439de9734.png"> -->

<br>

### IV. AWS 구조도
![AWS구조도](https://user-images.githubusercontent.com/39400030/170181004-ddbdc923-201c-4afe-8f70-6651d182acff.png)

<br>

### V. 실행 흐름 

![실행흐름](https://user-images.githubusercontent.com/39400030/161416930-fa4d4268-9061-486f-a769-a00122854310.jpg)
 <!-- <img width="1440" alt="실행흐름" src="https://user-images.githubusercontent.com/39400030/161415203-c5c2d4ac-6bcd-4b46-b6d8-aaf868c4026e.png"> -->

<br>
<br>

## 2. Abstract
The project name "인퓨(INFU or IN4U)" means "Interview For You."
인퓨 is a web service that allows users to practice interviews and receive feedback along with interviewers with virtually created faces.

Interviews are essential for new beginnings, such as college entrance, employment, and turnover, but are one of the difficult processes for many people.
According to a survey conducted by people, about 77% of job seekers who experienced the interview said they regretted it, and among them, "because they did not respond properly" that can be answered by repeated practice accounted for the highest percentage.
In addition, as untact has become commonplace since 2020, most interviews have changed non-face-to-face.
As more and more companies continue to maintain non-face-to-face employment even after the end of the pandemic, the need to prepare for online interviews is increasing.

인퓨 provides a more realistic interview practice unlike the existing interview practice service in which a virtually created interviewer moves his or her mouth and delivers questions by voice, without an interviewer existing.
Interview practice with interviewers created by StyleGAN and Wav2lip can help you practice face-to-face interviews as well as online interviews.

<br>
<br>

## 3. 소개 영상

### I. 시연 영상
[![시연 영상](https://user-images.githubusercontent.com/39400030/170182668-383448cf-c65a-46b8-8212-6edc240b7c0f.png)](https://youtu.be/ToXu0BNCu38)

<br>

### II. 200초 소개 동영상
<!-- [200초 소개 동영상](https://www.youtube.com/watch?v=7H8VzdCyxu0&feature=youtu.be) -->
[![200초 소개 동영상](https://user-images.githubusercontent.com/39400030/161255151-c149c739-6f6d-4eed-b79a-25bb87b332dc.png)](https://www.youtube.com/watch?v=7H8VzdCyxu0&feature=youtu.be)

<br>

### III. 중간 발표 영상
[![중간 발표 영상](https://user-images.githubusercontent.com/39400030/162360283-c2917008-e1e4-45ad-a0e1-8e31e4ca5712.png)](https://youtu.be/YphsQx7i4go)

<!-- <img width="1440" alt="200초소개동영상썸네일" src="https://user-images.githubusercontent.com/39400030/161255151-c149c739-6f6d-4eed-b79a-25bb87b332dc.png">
![200초소개동영상썸네일크롭](https://user-images.githubusercontent.com/39400030/161255171-7454753f-0751-4c2f-b490-e7ab5637597e.jpeg) -->

<br>

### IV. 최종 발표 영상
[![최종 발표 영상](https://user-images.githubusercontent.com/39400030/162360283-c2917008-e1e4-45ad-a0e1-8e31e4ca5712.png)](https://youtu.be/v0MnBo9dQ98)


<br>
<br>

## 4. 팀 소개


#### 정유선 (팀장) [@yoosun](https://github.com/usun813)
<img align="left" src="https://user-images.githubusercontent.com/39400030/161191794-c365e6c8-3a43-4030-84cb-b875f90637bd.png" width="135" height="135"/>

```
Student ID: 20181690
E-mail: usun18813@kookmin.ac.kr
Role: 프로젝트 매니저, 프론트엔드
    • UI/UX 디자인
    • 웹 클라이언트 개발
    • 로고, 이미지 디자인 
```


#### 김지민 [@miniee](https://github.com/JiminK)
<img align="left" src="https://user-images.githubusercontent.com/39400030/171572684-5f9dbe1b-ff4e-4580-b617-6f8317aee306.png" width="135"  height="135"/>

```
Student ID: 20181597
E-mail: jimin981005@kookmin.ac.kr
Role: 프론트엔드 리더, GIT 관리
    • UI/UX 디자인
    • 웹 클라이언트 개발
    • GIT 코드 형상 관리
```


#### 송경민 [@kyungmin](https://github.com/skm0626)
<img align="left" src="https://user-images.githubusercontent.com/39400030/161191790-ffb69be5-2a37-4772-a9ae-832c82c448f5.png" width="135" height="135"/>

```
Student ID: 20181630
E-mail: skm0626@kookmin.ac.kr
Role: AI
    • 가상 면접관 얼굴 생성 및 합성
    • 질문 mp3 생성
    • 가상 면접관 입모양 생성 
```


#### 조재오 [@Jaeo](https://github.com/Grievle)
<img align="left" src="https://user-images.githubusercontent.com/39400030/161191993-adfc28e6-3653-485c-9dac-8d0ac1a23d05.png" width="135" height="135"/>

```
Student ID: 20181696
E-mail: cho5095@kookmin.ac.kr
Role: 백엔드 리더, 피드백
    • 면접 결과에 대한 피드백 구현
      (영상 처리, 음성 처리)
    • AWS 시스템 구성  
```


#### 황예은 [@yeieun1213](https://github.com/yeieun1213)
<img align="left" src="https://user-images.githubusercontent.com/39400030/161310314-1dd32fbb-6579-4d8b-aa35-35c8f2ec1d99.png" width="135" height="135"/>

```
Student ID: 20181710
E-mail: yeieun1213@kookmin.ac.kr
Role: 서버
    • API 서버
    • DB 구축

```

<br>

<!-- ## 5. 사용법
### git clone
```
$ git clone https://github.com/kookmin-sw/capstone-2022-15.git
```

### Server setting
1. 
2. 

### Client setting
1. node module 설치
```
$ npm i
```
2. 실행
```
$ npm start
```
 -->
