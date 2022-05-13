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
    getIntervieweePresignedUrlHandler,
    video,
}) {
    const [buttonState, setButtonState] = useState(true);
    const [questionNumberState, setQuestionNumberState] = useState(1);
    const [preSignedUrl, setPreSignedUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const urlToBackend = `~/getPresigned/${selectedInterviewType}`;

    console.log('buttonState', buttonState)

    // api to backend
    // axios({
    //     url: urlToBackend,
    //     method: 'GET'
    // }).then((response) => {
    //     setPreSignedUrl(response.data)
    //     setLoading(false)
    // }).catch((error) => {
    //     console.log(error)
    // })

    console.log('questionNumberState', questionNumberState)
    // var intervalFunc = setInterval(() => {
    //     console.log('time out')
    //     downloadHandler()
    //     startCaptureHandler()
    //     stopInterval()
    //     setQuestionNumberState(questionNumberState + 1)
    // }, 5000)

    // var stopInterval = () => {
    //     clearInterval(intervalFunc)
    // }
    // useEffect(() => {
    //     stopInterval()
    // }, [])
    return (
        <>
            {!loading && <div className="interview-app">
                {/*------------------ 가상 면접관 ------------------*/}
                <div className="interviewer-section">
                    {video!=='' && <video width="80%" height="80%">
                        {/* <source src="./test_video.mp4" type="video/mp4">
                        </source> */}
                        {/* video가 빈string이 아닐 때 */}
                        <source src={video}/>
                    </video>}
                        {video==='' && <SyncLoader color={'blue'} loading={true} css={override} size={50} />}
                        {/* {video==='' && <div>No Video</div>} */}
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
                    && <button className="done-button" onClick={async () => {
                        setQuestionNumberState(questionNumberState + 1)
                        await stopCaptureHandler()
                        getIntervieweePresignedUrlHandler()
                        // stopInterval()
                    }}>
                        대답 완료
                    </button>}
                    {!buttonState 
                    && questionNumberState < 10
                    && questionNumberState % 2 === 0
                    && <button className="done-button" onClick={async () => {
                        setQuestionNumberState(questionNumberState + 1)
                        // await downloadHandler()
                        
                        await startCaptureHandler()
                        // intervalFunc()
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