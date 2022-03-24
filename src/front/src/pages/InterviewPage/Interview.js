import './Interview.css';

import React, {useState, useEffect} from "react"; 
import { Link } from 'react-router-dom';
let count = 1;

function Interview() {
    const [buttonState, setButtonState] = useState(true);
    // const [questionNumberState, setQuestionNumberState] = useState(1);

    // function changeButtonStateTrue() {
    //     setButtonState(true);
    //     count+=1;
    // }
    // function changeButtonStateFalse() {
    //     setButtonState(false);
    //     setInterviewState(interviewState + 1);
    // }

    // useEffect(() => {
    //     console.log('count ', count);
    // }, [count]);

    return (
        <div className="interview-app">
            {/*------ 가상 면접관 ------*/}
            <div className="interviewer-section">

            </div>
            {/*-------- 사용자 --------*/}
            <div className="button-section">
                {/* state true : 면접 시작 button */}
                {buttonState && <button className="start-interview-button" onClick={() => setButtonState(false)}>
                    면접 시작
                </button>}
                {/* state false : 다음 질문 button */}
                {/* {!buttonState && <button className="stop-interview-button" onClick={() => setButtonState(true)}> */}
                {!buttonState && <button className="stop-interview-button">
                    다음 질문
                </button>}
            </div>
        </div>
    );
}

export default Interview;
