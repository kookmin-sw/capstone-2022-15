import './PreInterview.css';
import styles from './SelectBox.module.css';
import { PageDescription } from '../../components/PageDescription';
import WebcamStreamCapture from '../../components/Webcam'
import React, { useEffect, useState, useRef, useCallback } from "react"; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ModalComponent from '../../components/Modal';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';

// import Footer from '../components/Footer';

const clickMotion = () => window.open('/interview', '_blank');

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
    const [preSignedUrl, setPreSignedUrl] = useState('')
    const [video, setVideo] = useState('')
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
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "s3/userid/embeded/202205081726_001.mp4";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);
    const isTest = true;
    let getInterviewerPreSignedUrl = isTest
                    ? `http://localhost:8000/interview/practice/${checkedId}`
                    : `https://kmuin4u.com/interview/practice/${checkedId}`;
    let postIntervieweePresignedUrl = isTest
                    ? `http://localhost:8000/interview/practice/${checkedId}`
                    : `https://kmuin4u.com/interview/practice/${checkedId}`;

    const getInterviewer = () => {
        // setLoading(true);
        axios({
            url: getInterviewerPreSignedUrl,
            method: 'GET'
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);
            setPreSignedUrl(response.data.interview_url);
            // setLoading(false);
        }).then(() => {
            setVideo(preSignedUrl)
        }).catch((error) => {
            console.log(error);
        })
    }

    const postInterviewee = () => {
        // setLoading(true);
        axios({
            url: postIntervieweePresignedUrl,
            method: 'POST',
            headers: {
                Authroization: 'Token knflskdnfan48729385y34u53'
            },
            data: {
                user_id: `${1}`,
                question_n: ``,
                field_id: `${checkedId}`,
                interview_date: ``
            }
        }).then((response) => {
            
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
                    video={video}
                    />
                }
                </div>
            </div> {/* add SelectInterviewType component */}
            {/* <Footer/> */}
        </div>
    );
}

export default PreInterview;