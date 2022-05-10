import './PreInterview.css';
import styles from './SelectBox.module.css';
import { PageDescription } from '../../components/PageDescription';
import WebcamStreamCapture from '../../components/Webcam'
import React, { useEffect, useState, useRef, useCallback } from "react"; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ModalComponent from '../../components/Modal';
import SelectBox from '../../components/SelectBox';
// import Footer from '../components/Footer';

const clickMotion = () => window.open('/interview', '_blank');

const interviewTypeName = {
    0: '인성면접',
    1: '임베디드',
    2: 'UI/UX',
    3: '데이터베이스',
    4: '보안',
    5: '클라우드',
    6: '빅 데이터'   
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

    return (
        <div className="PreInterviewApp">
            <Navbar/>
            <PageDescription/>
            <div className="cam-setting-layout">
                <div className="mini-title">
                    <div className="cam-setting-title">
                        WEBCAM 연결
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
                <button className="start-button" onClick={() => isOpenModal(true)}>
                    START
                </button>
                {isOpenModal && <ModalComponent
                    isOpen={openModal}
                    closeModalHandler={closeModalHandler}
                    modalStyle={modalStyle}
                    CloseButtonStyle={closeButtonStyle}
                    selectedInterviewType={selectedInterviewType}

                    />
                }
            </div>
            <div>
                면접 종류
                <SelectBox
                    type={'checkBox'}
                    className={styles.selectBox}
                    checkedId={checkedId}
                    changeHandler={changeHandler}
                    selectBoxObject={interviewTypeName} />
            </div> {/* add SelectInterviewType component */}
            {/* <Footer/> */}
        </div>
    );
}

export default PreInterview;
