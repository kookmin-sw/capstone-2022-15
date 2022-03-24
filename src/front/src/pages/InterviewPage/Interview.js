import './Interview.css';

import React, {useState, useEffect} from "react"; 
import { Link } from 'react-router-dom';
let count = 1;

function Interview() {
    const [buttonState, setButtonState] = useState(true);
    const [questionNumberState, setQuestionNumberState] = useState(1);

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
            <div className="interviewer-section">

            </div>
            <div className="button-section">
                {buttonState && <button className="start-interview-button" onClick={() => setButtonState(false)}>
                    start
                </button>}
                {!buttonState && <button className="stop-interview-button" onClick={() => setButtonState(true)}>
                    stop
                </button>}
            </div>
        </div>
    );
}

export default Interview;
