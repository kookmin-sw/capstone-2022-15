import './Notification.css';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

// import { PageDescription } from '../../components/PageDescription';

// import Footer from '../components/Footer';


const PreInterview = () => {
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
                <div className="notice-1">
                    <div className="notification-title">
                        1️⃣ &nbsp;IN4U의 면접 연습은 웹캠을 통해 사용자의 모습을 녹화하며 진행됩니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;보다 정확한 피드백을 위해, 아래 그림에 표시된 선을 참고하여 카메라를 세팅해주세요.<br></br>
                    </div>
                </div>
                <div className="notification-content">
                    <div className="notice1-cam-show-example-layout">
                        <img className="notice1-cam-show-example"></img>
                    </div>
                </div>
                <div className="notice-1">
                    <div className="notification-title">
                        2️⃣ &nbsp;면접 연습은 총 3문제입니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;선택한 면접 종류에 따라 다른 질문이 주어집니다.<br></br>
                    </div>
                </div>
                <div className="notice-1">
                    <div className="notification-title">
                        3️⃣ &nbsp;면접 연습은 한 문제당 질문 시간을 포함하여 1분으로 제한됩니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;시간은 면접 시작 버튼을 누른 시점부터 대답 완료를 누를 때까지 입니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1분이 될 때까지 대답 완료 버튼을 누르지 않으면 면접관 영상이 종료되고(?) 녹화가 중지됩니다.<br></br>
                    </div>
                </div>
                <div className="notice-1">
                    <div className="notification-title">
                        4️⃣ &nbsp;네트워크 연결이 불안정하면 면접 연습이 원활하게 진행되지 않을 수 있습니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;실제 면접과 유사한 환경에서 연습할 수 있도록 사전에 응시 준비를 철저히 한 후 시작해주세요.<br></br>                        
                    </div>
                </div>
                <div className="notice-1">
                    <div className="notification-title">
                        5️⃣ &nbsp;면접 연습을 진행하며 녹화된 영상은 마이페이지의 피드백에서 확인할 수 있습니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이때 사용자의 목소리가 웹캠을 통해 녹음되므로, 스피커를 사용할 경우 면접관의 목소리와 주변 소음으로 인해 정확도가 떨어질 수 있습니다.<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가급적이면 헤드셋이나 이어폰을 사용해 면접 연습을 진행해 주시기 바랍니다.<br></br>
                    </div>
                </div>



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
            </div>
            <div className="next-button-layout">
                <Link to="/preinterview" >
                    <button className="next-button">
                        다음     
                    </button>
                </Link>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default PreInterview;