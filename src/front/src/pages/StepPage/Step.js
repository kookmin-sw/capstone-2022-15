import './Step.css';
import Navbar from '../components/Navbar/Navbar';

function clickHandler(e) {
    window.location.href = "/preinterview"
}

const Step = () => {
    return (
        <div className="NotificationApp">
            <Navbar/>
            <div className="description-layout">
                <span className="description-title">
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>   
                    안내 사항&nbsp;
                    </div>
                    <div style={{color:'rgb(81, 119, 255)'}}>
                    • 연습 방법&nbsp;
                    </div>
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>   
                    • 면접 환경 세팅하기
                    </div>
                </span>
                <span className="description-content">
                    면접 연습은 아래의 단계로 진행됩니다.<br></br>
                    방법을 잘 숙지한 뒤 다음 버튼을 눌러 진행해주세요.<br></br>
                </span>
            </div>
            <div className="notification-layout1">
                <div className="notification-title">
                    Step 1 <br></br>
                    왼쪽 상단의 카메라, 마이크 접근 허용을 눌러 화상 기기를 연결한다.<br></br>
                </div>
                <div className="notification-title">
                    Step 2 <br></br>
                    연습하고 싶은 면접의 종류를 선택한다.<br></br>
                </div>
                <div className="notification-title">
                    Step 3 <br></br>
                    Start 버튼을 누르고 면접 연습 창이 나오면 면접 시작 버튼을 눌러 연습을 시작한다.<br></br>
                </div>
                <div className="notification-title">
                    Step 4 <br></br>
                    면접관의 질문이 끝나면 대답을 시작한다. 대답이 완료되면 대답 완료 버튼을 누른다.<br></br>
                </div>
                <div className="notification-title">
                    Step 5 <br></br>
                    다음 질문 버튼을 눌러 면접을 진행한다.<br></br>
                </div>
                <div className="notification-title">
                    Step 6 <br></br>
                    한 면접당 3개의 질문이 주어지고, 질문이 모두 끝나면 면접 종료 버튼을 눌러 면접을 종료한다.<br></br>
                    면접 종료 버튼을 누르면 면접이 종료되고 마이페이지로 이동한다.<br></br>
                </div>
                <div className="next-button-layout">
                    {/* <Link to="/preinterview" > */}
                        <button className="next-button" onClick={() => {
                            clickHandler()
                        }}>
                            다음     
                        </button>
                    {/* </Link> */}
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default Step;