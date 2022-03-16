import React, { Component } from "react"; 

export class Body extends Component { 
    render() {
        return (
            <div className="description">
                <span className="descrip-title">
                    화상 기기 설정
                </span>
                <span className="descrip-content">
                    IN4U의 면접 연습은 웹캠을 통해 사용자의 모습을 녹화하며 진행됩니다.<br></br>
                    화상 기기를 연결한 후 START버튼을 눌러 면접 연습을 시작하세요.
                </span>
            </div>
        );
    }
}

export default Body;