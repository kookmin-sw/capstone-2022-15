/* eslint-disable */
import '../HomePage/Home.css';
import img_top_txt from '../images/img_top_txt.png';
import img_circle1 from '../images/img_circle1.png';
import img_circle2 from '../images/img_circle2.png';
import img_circle3 from '../images/img_circle3.png';
import img_circle4 from '../images/img_circle4.png';
import img_dots from '../images/img_dots.png';
import img_main from '../images/img_main.png';
import img_gan from '../images/img_gan.png';
import img_step1 from '../images/img_step1.png';
import img_step3 from '../images/img_step3.png';

import React, { Component } from "react"; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

class Home_a extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar/>
        <Top/>
        <Middle/>
        <Bottom/>
        <Footer_pink/>
        <div className='footer_top'>
          <Footer/>
        </div>
        
      </div>
    );
  }
}

class Top extends Component{
  render(){
    return(
      <div className="FR-top">
      <span className="top-txt">
      가상 면접관이 있는 <br></br>
      인퓨와 함께라면 <br></br>
      내일은 면접왕 <br></br>
      👑
      </span>

      <div onClick={()=>console.log("화상기기 설정 페이지로 페이지 변경")}>
            <Link to="/notification" className="BT-start" style={{width:'9.5vw', height:'6vh', left:'6.5vw', top:'47vh'}}>
                연습시작!
            </Link>
      </div>
      <div onClick={()=>console.log("로그인(회원가입) 페이지로 페이지 변경")}>
            <Link to ="/" className="BT-login" style={{width:'10vw', height:'7vh', left:'18vw', top:'47vh'}}>
                로그아웃
            </Link>
      </div>
      <img src={img_main} className="img-main"/> 
      <img src={img_circle1} className="img-circle1"/>
      <img src={img_circle2} className="img-circle2"/>
      <img src={img_circle3} className="img-circle3"/>
      <img src={img_circle4} className="img-circle4"/>
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
          <span className="middle-txt1" style={{width:'33vw', left:'60vw', top:'12vh'}}>
            면접, <br></br>
            언제 어디서든 실전처럼!
          </span>
          <span className="middle-txt2" style={{width:'32vw', left:'60.5vw', top:'33vh'}}>
            인퓨는 가상 생성된 모의 면접관과 함께 <br></br>
            실제 면접과 유사한 방식으로 연습할 수 있습니다.
          </span>
          <div onClick={()=>console.log("면접연습 페이지로 페이지 변경")}>
                <Link to ="/preinterview" className="BT-join" style={{left:'68.2vw', top:'52vh'}}>
                  연습시작
                </Link>
          </div>
        </div>      
    );
  }
}


class Bottom extends Component{
  render(){
    return(
      <div className='FR-bottom'>
          <div className="box-step" style={{left: "4vw"}}>
            <img src={img_step1} className="img-step"/> 
            <span className="bottom-txt1">
              STEP 1
            </span>
            <span className="bottom-txt2">
              카메라와 마이크를 연결해<br></br>
              면접 연습 환경 준비
            </span>
          </div>
          <div className="box-step" style={{left: "36.5vw"}}>
            <img src={img_step1} className="img-step"/> 
            <span className="bottom-txt1">
                STEP 2
            </span>
            <span className="bottom-txt2">
              가상 면접관과 기출 문제로<br></br>
              실전 면접 연습
            </span>
          </div>
          <div className="box-step" style={{left: "69vw"}}>
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
          <div onClick={()=>console.log("로그인(회원가입) 페이지로 페이지 변경 이벤트 추가")}>
            <Link to ="/preinterview" className="BT-join" style={{left:'74vw', top:'33vh'}}>
                 연습시작
            </Link>
          </div>
        </div>
    );
  }
}

export default Home_a;
