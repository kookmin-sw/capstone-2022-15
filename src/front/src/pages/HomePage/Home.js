/* eslint-disable */
import './Home.css';
import img_logo_long from './img_logo_long.png';
import BT_mypage from './BT_mypage.png';
import img_main from './img_main.png';
import img_dots from './img_dots.png';
import img_gan from './img_gan.png';
import img_step1 from './img_step1.png';
import img_step3 from './img_step3.png';
import img_logo_footer from './img_logo_footer.png';

import React, { Component } from "react"; 
import { Link } from 'react-router-dom';

/*
const Home = () => {
    render() {
        return (
          <div className="App">
            <Header></Header>
            <Top></Top>
            <Middle></Middle>
            <Bottom></Bottom>
            <Footer_pink></Footer_pink>
            <Footer_gray></Footer_gray>
          </div>
        );
     }
};
*/

//버튼 이벤트 수정 예정 (아직 페이지 연결 X)
//반응형 웹으로 사이즈 수정 예정

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Top></Top>
        <Middle></Middle>
        <Bottom></Bottom>
        <Footer_pink></Footer_pink>
        <Footer_gray></Footer_gray>
      </div>
    );
  }
}


class Header extends Component{
  render(){
    return (
      <div className="App-header">
          <href onClick={()=>console.log("메인페이지로 페이지 변경 이벤트 추가 예정")}>
            <Link to="/HomePage">
                <img src={img_logo_long} className="App-logo"/>
            </Link>
          </href>
          
          <href onClick={()=>console.log("소개 페이지로 페이지 변경 이벤트 추가 예정")}>
            <span className="BT-navi" style={{width:'100px', height:'62px', left:'320px', top:'60px'}}>
              소개
            </span>
          </href>
          <href onClick={()=>console.log("면접 연습페이지로 페이지 변경 이벤트 추가 예정")}>
            <span className="BT-navi" style={{width:'100px', height:'62px', left:'445px', top:'60px'}}>
                <Link to="/preinterview">
                    면접연습
                </Link>
            </span>
          </href>
          <href onClick={()=>console.log("면접 연습페이지로 페이지 변경 이벤트 추가 예정")}>
            <span className="BT-navi" style={{width:'100px', height:'62px', left:'590px', top:'60px'}}>
              면접꿀팁
            </span>
          </href>
          <href onClick={()=>console.log("마이페이지로 페이지 변경 이벤트 추가 예정")}>
            <img src={BT_mypage} className="BT-mypage"/> 
          </href>
        </div>
    );
  }
}


class Top extends Component{
  render(){
    return(
      <div className="FR-top">
      <span className="top-txt" style={{width:'400px', height:'396px', left:'145px', top:'117px'}}>
      가상 면접관이 있는 <br></br>
      인퓨와 함께라면 <br></br>
      내일은 면접왕 <br></br>
      👑
      </span>
      <href onClick={()=>console.log("화상기기 설정 페이지로 페이지 변경 이벤트 추가")}
        className="BT-start" style={{width:'200px', height:'62px', left:'133px', top:'458px'}}>
        연습시작!
      </href>
      <href onClick={()=>console.log("로그인 페이지로 페이지 변경 이벤트 추가")} 
          className="BT-login" style={{width:'200px', height:'66px', left:'380px', top:'458px'}}>
        로그인
      </href>
      <img src={img_main} className="img-main"/> 
      <div className="circle1"/>
      <div className="circle2"/>
      <div className="circle3"/>
      <div className="circle4"/>
      <img src={img_dots} className="img-dots"/> 
    </div>      
    );
  }
}


class Middle extends Component{
  render(){
    return(
      <div className="FR-middle">
          <img src={img_gan} className="img-gan"/> 
          <span className="middle-txt1" style={{width:'594px', height:'349px', left:'840px', top:'0px'}}>
            면접, <br></br>
            언제 어디서든 실전처럼!
          </span>
          <span className="middle-txt2" style={{width:'690px', height:'349px', left:'840px', top:'160px'}}>
            인퓨는 가상 생성된 모의 면접관과 함께 <br></br>
            실제 면접과 유사한 방식으로 연습할 수 있습니다.
          </span>
          <href onClick={()=>console.log("로그인(회원가입) 페이지로 페이지 변경 이벤트 추가")}
              className="BT-join" style={{width:'250px', height:'72px', left:'1000px', top:'310px', background:'#FFAFC2', border: '1px solid #FFAFC2'}}>
              회원가입
          </href>
        </div>      
    );
  }
}


class Bottom extends Component{
  render(){
    return(
      <div className='FR-bottom'>
          <div className="box-step" style={{left: "100px"}}>
            <img src={img_step1} className="img-step"/> 
            <span className="bottom-txt1">
              STEP 1
            </span>
            <span className="bottom-txt2">
              카메라와 마이크를 연결해<br></br>
              면접 연습 환경 준비
            </span>
          </div>
          <div className="box-step" style={{left: "550px"}}>
            <img src={img_step1} className="img-step"/> 
            <span className="bottom-txt1">
                STEP 2
            </span>
            <span className="bottom-txt2">
              가상 면접관과 기출 문제로<br></br>
              실전 면접 연습
            </span>
          </div>
          <div className="box-step" style={{left: "1000px"}}>
            <img src={img_step3} className="img-step"/> 
            <span className="bottom-txt1">
                STEP 3
            </span>
            <span className="bottom-txt2">
              녹화된 영상과 피드백으로<br></br>
              문제점 개선
            </span> 
          </div>
        </div>
    );
  }
}


class Footer_pink extends Component{
  render(){
    return(
      <div className='FR-footer-pink'>
          <div className='box-pink'>
            <span className='footer-pink-txt1'>
              인퓨랑 면접.. 연습할래...?
            </span>
            <span className='footer-pink-txt2'>
              오늘 준비할 면접을 내일로 미루지 말자!
            </span>
          </div>
          <href onClick={()=>console.log("로그인(회원가입) 페이지로 페이지 변경 이벤트 추가")}
              className="BT-join" style={{width:'250px', height:'72px', left:'1120px', top:'460px', background:'#5B7EFB', border: '1px solid #5B7EFB'}}>
              회원가입
          </href>
        </div>
    );
  }
}
class Footer_gray extends Component{
  render(){
    return(
      <div className='FR-footer-gray'>
      <img src={img_logo_footer} className="img-logo-footer"/> 
      <span className='footer-gray-txt'>
        국민대학교 소프트웨어학부<br></br>
        캡스톤 15조
      </span>
    </div>
    );
  }
}
export default Home;