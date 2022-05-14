import './Interview.css';

import React, {useState, useEffect} from "react"; 
import firstVideo from "./interviewer_01.mp4";
// import secondVideo from "./interviewer_02.mp4";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import SyncLoader from "react-spinners/SyncLoader";

let count = 1;

const override = {
  margin: 'auto',
  borderColor: 'red',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  height: '98vh',
  width: '100%'
}

function Interview({
    selectedInterviewType,
    startCaptureHandler,
    stopCaptureHandler,
    downloadHandler,
    closeModalHandler,
    getInterviewerHandler,
    postIntervieweeHandler,
    video,
    clearVideoHandler,
}) {
    const [buttonState, setButtonState] = useState(true);
    const [questionNumberState, setQuestionNumberState] = useState(1);
    const [loading, setLoading] = useState(false)

    const urlToBackend = `~/getPresigned/${selectedInterviewType}`;

    console.log('buttonState', buttonState)

    useEffect(() => {
        console.log('hehe')
    }, [video])

    // console.log(video, 'video')
    return (
        <>
            {!loading && <div className="interview-app">
                {/*------------------ 가상 면접관 ------------------*/}
                <div className="interviewer-section">
                    {video!=='' && <video width="80%" height="80%" autoPlay={true}> 
                        <source src={video}/>
                    </video>}
                    {video==='' && <SyncLoader color={'blue'} loading={true} css={override} size={50} />}
                </div>
                {/*-------------------- 사용자 --------------------*/}
                <div className="button-section">
                    {/* state true : 면접 시작 button */}
                    {buttonState 
                    && <button className="interview-button" onClick={async () => {
                        // stopInterval()
                        await setButtonState(false)
                        await startCaptureHandler() // 녹화시작
                        getInterviewerHandler()
                        // intervalFunc()
                    }}>
                        면접 시작
                    </button>}
                    {/* state false : 다음 질문 button */}
                    {!buttonState 
                    && questionNumberState < 10
                    && questionNumberState % 2 === 1
                    && <button className="done-button" onClick={() => {
                        setQuestionNumberState(questionNumberState + 1)
                        stopCaptureHandler()
                        postIntervieweeHandler()
                        clearVideoHandler()
                    }}>
                        대답 완료
                    </button>}
                    {!buttonState 
                    && questionNumberState < 10
                    && questionNumberState % 2 === 0
                    && <button className="done-button" onClick={async () => {
                        setQuestionNumberState(questionNumberState + 1)
                        getInterviewerHandler()
                        downloadHandler()
                        startCaptureHandler()
                    }}>
                        다음 질문
                    </button>}
                    {/* state false : 면접 종료 button */}
                    {questionNumberState === 10
                    && <button className="interview-button" onClick={closeModalHandler}>
                            면접 종료
                    </button>}
                </div>
                {selectedInterviewType}
            </div>}
            {loading && <SyncLoader color={'blue'} loading={loading} css={override} size={50} />}
        </>
    );
}


export default Interview;