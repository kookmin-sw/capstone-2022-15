import React, { Component } from "react"; 

export class PageDescription extends Component { 
    render() {
        return (
            <div className="description-layout">
                <span className="description-title">
                    {/* <div style={{color:'rgba(91, 126, 251, 0.3)'}}>   
                    안내 사항 •
                    </div>
                    <div style={{color:'rgb(81, 119, 255)'}}>
                    &nbsp;연습 방법 
                    </div>
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>
                    &nbsp;• 면접 환경 세팅하기
                    </div> */}
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>   
                    안내 사항&nbsp;• 연습 방법 
                    </div>
                    <div style={{color:'rgb(81, 119, 255)'}}>
                    &nbsp;• 면접 환경 세팅하기
                    </div>
                </span>
                <span className="description-content">
                    IN4U의 면접 연습은 웹캠을 통해 사용자의 모습을 녹화하며 진행됩니다.<br></br>
                    왼쪽 상단의 화상 기기 허용을 누른 뒤, 정상적으로 웹캠이 연결되었는지 하단에 보이는 본인의 모습을 통해 확인하세요.<br></br>
                    그 후, 면접 종류를 선택하고 START버튼을 눌러 면접 연습을 시작하세요.
                </span>
            </div>
        );
    }
}

export default PageDescription;