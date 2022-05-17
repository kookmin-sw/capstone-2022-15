import './PreInterview.css';
import styles from './SelectBox.module.css';
import { PageDescription } from '../../components/PageDescription';
import WebcamStreamCapture from '../../components/Webcam'
import React, { useEffect, useState, useRef, useCallback } from "react"; 
import Navbar from '../components/Navbar/Navbar';
import ModalComponent from '../../components/Modal';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';
// import Footer from '../components/Footer';

const interviewTypeName = {
    0: '[인성] 인성 면접',
    1: '[직무] 임베디드 SW 엔지니어',
    2: '[직무] UI/UX 디자이너',
    3: '[직무] DB 엔지니어',
    4: '[직무] 보안 엔지니어',
    5: '[직무] 클라우드 아키텍처 개발자',
    6: '[직무] 빅데이터 개발자' 
}
const modalStyle = {
    content:{
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '90vw',
        height: '90vh',
        transform: 'translate(-50%, -50%)',
        background: 'white'
    }
}

const closeButtonStyle = {
    color: "blue"
}

const PreInterview = () => {
    const [openModal, isOpenModal] = useState(false);
    const [checkedId, setCheckedId] = useState();
    const [questionN, setQuestionN] = useState(0);
    const [selectedInterviewType, setSelectedInterviewType] = useState('')
    const closeModalHandler = () => {
        downloadHandler()
        isOpenModal(false)
    }
    const changeHandler = (id) => {
        setCheckedId(id)
        setSelectedInterviewType(id)
    }
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [preSignedUrl, setPreSignedUrl] = useState('') // 가상면접관 Presigned url
    const [intervieweePreSignedUrl, setIntervieweePresignedUrl] = useState('') // 녹화영상 presigned url
    const [video, setVideo] = useState('')

    useEffect(() => {
        if(preSignedUrl !== ''){
            setVideo(preSignedUrl)
        }
    }, [preSignedUrl])

    const startCaptureHandler = useCallback(() => {

        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
          mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      }, [webcamRef, mediaRecorderRef]);

      const handleDataAvailable = useCallback(
        ({ data }) => {
          if (data.size > 0) {
            setRecordedChunks((prev) => prev.concat(data));
          }
        },
        [setRecordedChunks]
      );
    const stopCaptureHandler = useCallback(() => {
        mediaRecorderRef.current.stop();
    }, [mediaRecorderRef, webcamRef]);
    
    const downloadHandler = useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
            type: "video/mp4"
            });
            let file = new File([blob], 'interviewee video'); // 테스트 필요
            let formData = new FormData();
            formData.append("data", file);
            formData.append("Content-Type", "video/mp4");
            axios.put(`${intervieweePreSignedUrl}`, file)
                .then((_response) => {
                  setRecordedChunks([])
              }).catch((error) => {
                console.log(error);
            })
        }
    }, [recordedChunks, intervieweePreSignedUrl]);
    const isTest = false;
    let getInterviewerPreSignedUrl = isTest
                    ? `http://localhost:8000/interview/practice/${checkedId}` // checkedId -> ques
                    // ? `http://127.0.0.1:8000/interview/practice/${checkedId}`
                    : `https://api.kmuin4u.com/interview/practice/${checkedId}`; // interviewer 영상을 get요청할 수 있는 presigned url을 요청할 수 있는 url
    let postIntervieweePresignedUrl = isTest
                    ? `http://localhost:8000/interview/practice/save` 
                    // ? 'http://127.0.0.1:8000/interview/practice/save'
                    : `https://api.kmuin4u.com/interview/practice/save`;
    
    const getInterviewer = () => { 
        // console.log('called')
        axios({
            url: getInterviewerPreSignedUrl, // interviewer 영상을 get요청할 수 있는 presigned url을 요청할 수 있는 url
            method: 'GET',
            headers: {
                'Authorization':'Token ' + window.localStorage.getItem('token')
            }
        }).then((response) => { // response에는 get요청으로 받아온 presigned url이 들어감
            setPreSignedUrl(response.data.interviewer_url); // 확인하기 -> 맞음 
        }).catch((error) => {
            console.log(error);
        })
    }

    const postInterviewee = () => { 
        axios({
            url: postIntervieweePresignedUrl,
            method: 'POST', // GET 
            headers: {
                'Authorization':'Token ' + window.localStorage.getItem('token')
            },
            data: {
                question_n: `${questionN}`,
                field_id: `${checkedId}`, 
            }
        }).then((response) => { // 대안 -> 녹화 영상 저장할 s3는 public으로  
            setIntervieweePresignedUrl(response.data.interviewee_url); // 확인하기 , 어디에 저장해야하는지 주소 필요 
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="PreInterviewApp">
            <Navbar/>
            <PageDescription/>
            <div className="cam-setting-layout">
                <div className="mini-title">
                    <div className="cam-setting-title">
                        • WEBCAM 연결 
                    </div>
                    {/* <button className="notification" onClick={() => isOpenModal(true)}>
                        i
                    </button> */}
                 </div>
                <div className="cam-show-layout">
                    <div className="cam-show">
                        {<WebcamStreamCapture
                            webcamRef={webcamRef}
                            recordedChunks={recordedChunks}
                            />}
                    </div>
                </div>
            </div>
            <div className="select-interview-type">
                <div className="mini-title">
                    <div className="cam-setting-title">
                        • 면접 종류 선택
                    </div>
                </div>
                <div className="select-interview-type-layout">
                    <SelectBox
                        type={'checkBox'}
                        className={styles.selectBox}
                        checkedId={checkedId}
                        changeHandler={changeHandler}
                        selectBoxObject={interviewTypeName} />
                </div>
                <div className="button-layout">
                    <button className="start-button" onClick={() => isOpenModal(true)}>
                        START
                    </button>
                {isOpenModal && <ModalComponent
                    isOpen={openModal}
                    closeModalHandler={closeModalHandler}
                    modalStyle={modalStyle}
                    CloseButtonStyle={closeButtonStyle}
                    selectedInterviewType={selectedInterviewType}
                    startCaptureHandler={startCaptureHandler}
                    stopCaptureHandler={stopCaptureHandler}
                    downloadHandler={downloadHandler}
                    getInterviewerHandler={getInterviewer}
                    postIntervieweeHandler={postInterviewee}
                    video={video}
                    clearVideoHandler={() => {setVideo('')}}
                    questionNHandler={setQuestionN}
                    />
                }
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default PreInterview;