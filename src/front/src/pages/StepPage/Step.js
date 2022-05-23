import './Step.css';
import Navbar from '../components/Navbar/Navbar';
import step1 from '../images/step1.png'
import step2 from '../images/step2.jpg'
import step3 from '../images/step3.jpg'
import step3_2 from '../images/step3_2.jpg'
import step4 from '../images/step4.png'
import step5 from '../images/step5.jpg'
import step6 from '../images/step6.jpeg'
import step6_2 from '../images/step6_2.jpeg'
import Footer from '../components/Footer';


function clickHandler(e) {
    window.location.href = "/preinterview"
}

const Step = () => {
    return (
        <div className="StepApp">
            <Navbar/>
            <div className="description-layout">
                <span className="description-title">
                    <div style={{color:'rgba(91, 126, 251, 0.3)'}}>   
                        안내 사항&nbsp;
                    </div>
                    <div style={{color:'rgb(81, 119, 255)'}}>
                        • 연습 방법&nbsp;•&nbsp;
                    </div>
                    <div className="direct-to-setting" onClick={() => {
                        clickHandler()
                    }}>
                        면접 환경 세팅하기
                    </div>
                </span>
                <span className="description-content">
                    면접 연습은 아래의 단계로 진행됩니다.<br></br>
                    방법을 잘 숙지한 뒤 다음 버튼을 눌러 진행해주세요.<br></br>
                </span>
            </div>
            <div className="notification-layout1">
                <div className="step-title">
                    STEP 1
                </div>
                <div className="step-content">
                    왼쪽 상단의 카메라, 마이크 접근 허용을 눌러 화상 기기를 연결한다.
                    <img src={step1} className="step1"></img>
                </div>
                <div className="step-title">
                    STEP 2 
                </div>
                <div className="step-content">
                    연습하고 싶은 면접의 종류를 선택한다.
                    <img src={step2} className="step2"></img>
                </div>
                <div className="step-title">
                    STEP 3 
                </div>
                <div className="step-content">
                    Start 버튼을 누르고 면접 연습 창이 나오면 면접 시작 버튼을 눌러 연습을 시작한다.
                    <img src={step3} className="step3"></img>
                    <img src={step3_2} className="step3_2"></img>
                </div>
                <div className="step-title">
                    STEP 4 
                </div>
                <div className="step-content">
                    면접관의 질문이 끝나면 대답을 시작한다. 대답이 완료되면 대답 완료 버튼을 누른다.
                    <img src={step4} className="step4"></img>
                </div>
                <div className="step-title">
                    STEP 5 
                </div>
                <div className="step-content">
                    다음 질문 버튼을 눌러 면접을 진행한다.
                    <img src={step5} className="step5"></img>
                </div>
                <div className="step-title">
                    STEP 6 
                </div>
                <div className="step-content">
                    한 면접당 3개의 질문이 주어지고, 질문이 모두 끝나면 면접 종료 버튼을 눌러 면접을 종료한다. <br></br>
                    면접 종료 버튼을 누르면 면접이 종료되고, 피드백 확인을 위해 마이페이지로 이동한다.
                    <img src={step6} className="step6"></img>
                    <img src={step6_2} className="step6_2"></img>
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
            <div className='step-footer'>
              <Footer/>
            </div>
        </div>
    );
}

export default Step;