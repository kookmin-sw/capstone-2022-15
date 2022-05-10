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
    const webcamRef = useRef(null);

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
            </div>
            <div>
                면접 종류
                <SelectBox
                    type={'checkBox'}
                    className={styles.selectBox}
                    changeHandler={changeHandler}
                    selectBoxObject={interviewTypeName} />
            </div> {/* add SelectInterviewType component */}
            {/* <Footer/> */}
        </div>
    );
}

export default PreInterview;
