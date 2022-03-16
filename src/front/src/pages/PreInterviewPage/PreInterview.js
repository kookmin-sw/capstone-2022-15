// import Button from ''
import './PreInterview.css';
import img_logo_long from './img_logo_long.png';
import { PageDescription } from '../../components/PageDescription';
import BT_mypage from './BT_mypage.png';
import img_logo_footer from './img_logo_footer.png';

import React, { Component } from "react"; 
import { Link } from 'react-router-dom';


class PreInterview extends Component {
    render() {
        return (
            <div className="PreInterviewApp">
                {/* <Header></Header> */}
                <PageDescription></PageDescription>
                <CamSetting></CamSetting>
                {/* <Footer_gray></Footer_gray> */}
            </div>
        );
    }
}
class Header extends Component{
    render() {
      return (
        <div className="App-header">
            <href onClick={()=>console.log("메인페이지로 페이지 변경 이벤트 추가 예정")}>
              <Link to="/">
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


class CamSetting extends Component { 
    render() {
        return (
            <div className="cam-setting-layout">
                <span className="cam-setting-title">
                    WEBCAM 연결 · · ·
                </span>
                <div className="cam-show-layout">
                    <div className="cam-show">

                    </div>
                    {/* conneting webcam */}
                </div>
                <button className="start-button">
                    START
                </button>
            </div>
        );
    }
    

}

class Footer_gray extends Component {
    render() {
      return (
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

export default PreInterview;
