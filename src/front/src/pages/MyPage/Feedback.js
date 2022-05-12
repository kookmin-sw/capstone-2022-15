/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import txtFile from './testForTxt.txt';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div className='Menu-box' style={{height: '285vh'}}>
            <div onClick={()=>console.log("마이 페이지로 페이지 변경")}>
                <Link to="/mypage" className='Menu-txt22'>
                연습목록
                </Link>
            </div>

            <div onClick={()=>console.log("마이 페이지로 페이지 변경")}>
                <Link to="/feedback/" className='Menu-txt3' style={{top:'14vh'}}>
                &nbsp;&nbsp;질문 1
                </Link>
            </div>

            <div onClick={()=>console.log("마이 페이지로 페이지 변경")}>
                <Link to="/feedback/2" className='Menu-txt3' style={{top:'20vh'}}>
                &nbsp;&nbsp;질문 2
                </Link>
            </div>

            <div onClick={()=>console.log("마이 페이지로 페이지 변경") }>
                <Link to="/feedback/3" className='Menu-txt3' style={{top:'26vh'}}>
                &nbsp;&nbsp;질문 3
                </Link>
            </div>

            <div onClick={()=>console.log("마이 페이지로 페이지 변경") }>
                <Link to="/feedback/4" className='Menu-txt3' style={{top:'32vh'}}>
                &nbsp;&nbsp;질문 4
                </Link>
            </div>
            
            <div onClick={()=>console.log("마이 페이지로 페이지 변경") }>
                <Link to="/feedback/5" className='Menu-txt3' style={{top:'38vh'}}>
                &nbsp;&nbsp;질문 5
                </Link>
            </div>
        
            <div className='Main-box'>
              <MainFeedback/>
          </div>
        </div>
      );
    }
  }

// 수정 예정
export const getID = async () =>
  await axios.get('/feedback/');

export const getInterviewID = async () =>
  await axios.get('/feedback/');

export const getChartHead= async () =>
  await axios.get('/feedback/');

export const getChartVoice= async () =>
  await axios.get('/feedback/');

class MainFeedback extends Component{
  handleChange(e){
    let file = txtFile;
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
  }
  render(){
    const videoUrl = "https://www.youtube.com/embed/7H8VzdCyxu0"
    // const user_id = getID
    // const interview_id = getInterviewID
    // const videoUrl = user_id + interview_id + "/interview_video/interview" + interview_id+".mp4"

    const ChartHead = "https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"
    const ChartVoice = "https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"
    let VideoTxt = txtFile;
    return(
      
      <div>
        <div className='Feedback-txt'style={{top:'5.2vh'}}>
              🔹 Video Check
        </div>
        <div className="Interviewer-section">
              <iframe width="600vw" height="394vh" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
        </div>

      

        <div className='Feedback-txt' style={{top:'17vh', height:"40vh"}}>
              🔹 나의 답변
        </div>
        {/* <div className="Video_txt" >
                <p>{VideoTxt}</p>
        </div> */}
        <div className="Video_txt">
          <input type="file" onChange={tihs.handleChange.bind(this)} />
        </div>

        <div className='Feedback-txt'style={{top:'30vh'}}>
              🔹 목소리 크기
        </div>
        <img src={ChartVoice} className="Chart" style={{top:'26vh'}}/>  

        <div className='Feedback-txt' style={{top:'43vh'}}>
              🔹 머리 움직임
        </div>
        <img src={ChartHead} className="Chart" style={{top:'39vh'}}/>  
      </div>
        
    );
  }
}
  
export default Feedback;
