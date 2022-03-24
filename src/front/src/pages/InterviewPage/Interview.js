import './Interview.css';

import React, {useState, useEffect} from "react"; 
import { Link } from 'react-router-dom';
let count = 1;

function Interview() {
    const [buttonState, setButtonState] = useState(true);
    const [questionNumberState, setQuestionNumberState] = useState(0);

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

    function changeQuestionNumberState() {
        setQuestionNumberState(questionNumberState + 1);
    }

    return (
        <div className="interview-app">
            {/*------ 가상 면접관 ------*/}
            <div className="interviewer-section">

            </div>
            {/*-------- 사용자 --------*/}
            <div className="button-section">
                {/* state true : 면접 시작 button */}
                {buttonState 
                && <button className="start-interview-button" onClick={() => setButtonState(false)}>
                    면접 시작
                </button>}
                {/* state false : 다음 질문 button */}
                {!buttonState 
                && questionNumberState < 2 
                && <button className="next-interview-button" onClick={() => setQuestionNumberState(questionNumberState+1)}>
                    다음 질문
                </button>}
                {/* state false : 면접 종료 button */}
                {questionNumberState === 2 
                && <button className="stop-interview-button">
                    면접 종료
                </button>}
            </div>
        </div>
    );
}

export default Interview;
