import './Notification.css';
import Navbar from '../components/Navbar/Navbar';
import intervieweeGuide from '../images/interviewee_sample_2.png'
import Footer from '../components/Footer';

function clickHandler(e) {
    window.location.href = "/step"
}
function directToSettingHandler(e) {
    window.location.href = "/preinterview"
}

const Notification = () => {
    return (
        <div className="NotificationApp">
            <Navbar/>
            <div className="description-layout">
                <span className="description-title">
                    <div style={{color:'rgb(81, 119, 255)'}}>   
                        안내 사항&nbsp;
                    </div>
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>
                        • 연습 방법&nbsp;•&nbsp;
                    </div>
                    <div className="direct-to-setting" onClick={() => {
                        directToSettingHandler()
                    }}>
                        면접 환경 세팅하기
                    </div>
                </span>
                <span className="description-content">
                    김소융 님, 안녕하세요.<br></br>
                    면접 시간은 총 3분입니다.<br></br>
                    면접 연습을 시작하기 전에 아래의 안내 사항을 잘 숙지해주세요. 
                </span>
            </div>
            <div className="notification-layout1">
                <div className="notification-title">
                    1️⃣ &nbsp;IN4U의 면접 연습은 웹캠을 통해 사용자의 모습을 녹화하며 진행됩니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보다 정확한 피드백을 위해, 아래의 샘플 이미지를 참고하여 카메라를 세팅해주세요.<br></br>
                </div>
                <div className="notice1-cam-show-example-layout">
                    <div className="notice1-cam-show-example-layout-2">
                    <img src={intervieweeGuide} className="notice1-cam-show-example"></img>
                    </div>
                </div>
                <div className="notification-title">
                    2️⃣ &nbsp;면접 연습은 총 3문제입니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;선택한 면접 종류에 따라 다른 질문이 주어집니다.<br></br>
                </div>
                <div className="notification-title">
                    3️⃣ &nbsp;면접 연습은 한 문제당 질문 시간을 포함하여 1분으로 제한됩니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간은 면접 시작 버튼을 누른 시점부터 대답 완료를 누를 때까지 입니다.<br></br>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1분이 될 때까지 대답 완료 버튼을 누르지 않으면 면접관 영상이 종료되고(?) 녹화가 중지됩니다.<br></br> */}
                </div>
                <div className="notification-title">
                    4️⃣ &nbsp;네트워크 연결이 불안정하면 면접 연습이 원활하게 진행되지 않을 수 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;실제 면접과 유사한 환경에서 연습할 수 있도록 사전에 응시 준비를 철저히 한 후 시작해주세요.<br></br>                        
                </div>
                <div className="notification-title">
                    5️⃣ &nbsp;면접 연습을 진행하며 녹화된 영상은 마이페이지의 피드백에서 확인할 수 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이때 사용자의 목소리가 웹캠을 통해 녹음되므로, 스피커를 사용할 경우 면접관의 목소리와 주변 소음으로 인해 정확도가 떨어질 수 있습니다.<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가급적이면 헤드셋이나 이어폰을 사용해 면접 연습을 진행해 주시기 바랍니다.<br></br>
                </div>
                <div className="next-button-layout">
                    {/* <Link to="/step" > */}
                        <button className="next-button" onClick={() => {
                            clickHandler()
                        }}>
                            다음     
                        </button>
                    {/* </Link> */}
                </div>
            </div>
            <div className='notification-footer'>
              <Footer/>
            </div>
        </div>
    );
}

export default Notification;