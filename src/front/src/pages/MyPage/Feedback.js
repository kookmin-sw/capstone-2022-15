/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import img_main_simple from '../images/img_main_simple.png';
import { Link } from 'react-router-dom';

const Feedback = () => {
    return (
        <div>
            <Navbar/>
            <Bar2/>
            <MenuBox2/> 
            <div className='mypage_footer_top2'>
                <Footer/>
            </div> 
        </div>
    );
};
{/* 
질문 1, 2, 3, 4, 5를 왼쪽 메뉴바에 보여주고
그걸 클릭할 때마다 동영상/차트 이미지 값을 다르게 받아오면 될 것 같은데
이걸 어떻게 하냐...
*/}


class Bar2 extends Component{
    render(){
      return(
        <div className='Bar'>
            My Page - 피드백
        </div>
      );
    }
}
class MenuBox2 extends Component{
    render(){
      return(
        <div className='Menu-box' style={{height: '215vh'}}>
            <div onClick={()=>console.log("마이 페이지로 페이지 변경")}>
                <Link to="/mypage" className='Menu-txt22'>
                연습목록
                </Link>
            </div>
            <div className='Menu-txt3'>
            &nbsp;&nbsp;질문 1
            </div>
            
            <img src={img_main_simple} className="Img_mypage"/>  
            <div className='Main-box'>
              <MainFeedback/>
          </div>
        </div>
      );
    }
  }
class MainFeedback extends Component{
  render(){
    return(
      <div>
        <div className='Feedback-txt'style={{top:'5.2vh'}}>
              🔹 Video Check
        </div>
        <div className="Interviewer-section">

              <iframe width="700vw" height="394vh" src="https://www.youtube.com/embed/7H8VzdCyxu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
        </div>

        <div className='Feedback-txt' style={{top:'17vh'}}>
              🔹 머리 움직임
        </div>
        <img src={"https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"} className="Chart" style={{top:'14vh'}}/>  


        <div className='Feedback-txt'style={{top:'30vh'}}>
              🔹 목소리 크기
        </div>
        <img src={"https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"} className="Chart" style={{top:'26vh'}}/>  

      </div>
        
    );
  }
}
  
export default Feedback;
