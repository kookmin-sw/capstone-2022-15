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
                    <div style={{color:'rgb(81, 119, 255)'}}>   
                    안내 사항&nbsp;
                    </div>
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>
                    • 연습 방법 • 면접 환경 세팅하기
                    </div>
                </span>
                <span className="description-content">
                    님, 안녕하세요.<br></br>
                    면접 시간은 총 3분입니다.<br></br>
                    면접 연습을 시작하기 전에 아래의 안내 사항을 잘 숙지해주세요. 
                </span>
            </div>
            <div className="notification-layout1">
                {/* <div className="notice-1">
                    <div className="notification-title">
                        3️⃣ 면접 연습 진행 방법
                    </div>
                    <div className="notification-content2">
                        <div>
                            Step 1 <br></br>
                            Start 버튼을 누르고 면접 연습 창이 나오면 면접 시작 버튼을 눌러 연습을 시작한다. <br></br>
                            Step 2 <br></br>
                            면접관의 질문이 끝나면 대답을 시작한다. 대답이 완료되면 대답 완료 버튼을 누른다. <br></br>
                            Step 3 <br></br>
                            다음 질문 버튼을 눌러 면접을 진행한다. <br></br>
                            Step 4 <br></br>
                            한 면접당 3개의 질문이 주어지고, 질문이 모두 끝나면 면접 종료 버튼을 눌러 면접을 종료한다.<br></br>
                            면접 종료 버튼을 누르면 면접이 종료되고 마이페이지로 이동한다.<br></br>
                            Step 5 <br></br>
                            중간에 <br></br>
                        </div>
                    </div>
                </div> */}
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