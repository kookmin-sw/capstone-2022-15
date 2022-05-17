import './Interview.css';

import React, {useState, useEffect} from "react"; 
// import axios from 'axios';
import BarLoader from "react-spinners/BarLoader";

const override = {
//   margin: '200px 0 0 0',
//   margin: 'auto 0',
//   justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '100%',
//   color: 'black'
//   margin: '2px'
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
    questionNHandler
}) {
    const [buttonState, setButtonState] = useState(true);
    const [questionNumberState, setQuestionNumberState] = useState(1);
    const [loading, setLoading] = useState(false)

    console.log('buttonState', buttonState)

    useEffect(() => {
    }, [video])

    useEffect(() => {
        if (questionNumberState % 2 === 0) {
            questionNHandler(questionNumberState / 2)
        }
    }, [questionNumberState])
    // console.log(video, 'video')

    function clickHandler(e) {
        window.location.href = "/mypage"
    }

    return (
        <>
            {!loading && <div className="interview-app">
                {/*------------------ 가상 면접관 ------------------*/}
                <div className="interviewer-section">
                    {video!=='' && <video width="80%" height="80%" autoPlay={true}> 
                        <source src={video}/>
                    </video>}
                    {video==='' && <BarLoader color={'rgb(81, 119, 255)'} loading={true} css={override} height={8} speedMultiplier={0.7} />}
                </div>
                {/*-------------------- 사용자 --------------------*/}
                <div className="button-section">
                    {/* state true : 면접 시작 button */}
                    {buttonState 
                    && <button className="interview-button" onClick={async () => {
                        await setButtonState(false)
                        await startCaptureHandler() // 녹화시작
                        getInterviewerHandler()
                    }}>
                        면접 시작
                    </button>}
                    {/* state false : 다음 질문 button */}
                    {!buttonState 
                    && questionNumberState < 6
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
                    && questionNumberState < 6
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
                    {questionNumberState === 6
                    && <button className="interview-button" onClick={() => {
                        closeModalHandler()
                        setQuestionNumberState(0)
                        clickHandler()
                    }}>
                        면접 종료
                    </button>}
                </div>
            </div>}
            {loading && <BarLoader color={'rgb(81, 119, 255)'} loading={loading} css={override} height={8} speedMultiplier={0.7} />}
        </>
    );
}


export default Interview;