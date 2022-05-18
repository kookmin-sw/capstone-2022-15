/* eslint-disable */
import React, { useState, PureComponent, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import { Link } from 'react-router-dom';
import img_interviewer from '../images/img_interviewer.png';

import axios from 'axios';
export const Authentication = React.createContext(null);
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';


const Feedback = () => {
  const isTest = false;
    let getFeedbackpage = isTest
    ? `http://localhost:8000/accounts/feedback` // checkedId -> ques
    : `https://api.kmuin4u.com/accounts/feedback`; 

  axios({
    url: getFeedbackpage, 
    method: 'GET',
    headers: {
        'Authorization':'Token ' + window.localStorage.getItem('token')
        
    }
  }).then(response => {
    console.log("Mypage Get Success")
      setInterview_id(response.data.interview_id)
      setQuestion_n(response.data.question_n)
      setPreSignedUrl(response.data.interview_url);
  })
  .catch(error => {
      console.log(error)
      alert(' error')
  })


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


  class MainFeedback extends Component{
    render(){
      const videoUrl = "https://www.youtube.com/embed/Y8JFxS1HlDo" 
      //const videoUrl = user_id + interview_id + "/interview_video/interview" + interview_id+".mp4"
      let chart_data1 = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
      ];
      const chart_data2 = [
        { x: 200, y: 260, z: 240 },
        { x: 240, y: 290, z: 220 },
        { x: 190, y: 290, z: 250 },
        { x: 198, y: 250, z: 210 },
        { x: 180, y: 280, z: 260 },
        { x: 210, y: 220, z: 230 },
      ];
      

      return(
        <div>
          <div className='Feedback-Q'> Q1 </div>
          <div className='Feedback-txt'style={{top:'5.2vh'}}>
                🔹 Video Check
          </div>
          <div className="Interviewer-section">
                <iframe width="700vw" height="394vh" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
          </div>
  
  
  {/*나의 답변*/}
          <div className='Feedback-txt' style={{top:'17vh'}}>
                🔹 나의 답변
            <div className="Stt">
              여기에 STT 내용 <br/>
              🐟🐠🐡🦐🦑🐙🦞🐬🐳🐋🦀🐧🐚<br/>
              인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다.  
  
            </div>
          </div>
          
  
  {/*시선 처리 차트*/}
          <div className='Feedback-txt'style={{top:'32vh'}}>
                🔹 시선 처리
              <div className='ChartBackground'>
                <img src={img_interviewer}/>
              </div>
              
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Rechart chart_data= {chart_data1}  />
              </div>
              
          </div>
          
  
  
  {/*머리 움직임 차트*/}
          <div className='Feedback-txt' style={{top:'100vh'}}>
                🔹 머리 움직임
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Rechart chart_data= {chart_data2}  />
                {/*<Rechart chart_data= {response.data.face_movement}  /> */}
              </div>
          </div>
  
  
  {/*목소리 크기 차트*/}
          <div className='Feedback-txt' style={{top:'168vh'}}>
                🔹 목소리 크기
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Rechart chart_data= {chart_data1}/>
                {/*<Rechart chart_data= {response.data.volumn_interview}  /> */}
              </div>
          </div>  
        </div>  
      );
    }
  }


  

const Rechart = ({
  chart_data
  }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <ScatterChart
      width={500}
      height={300}
      margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={chart_data} fill="#5B7EFB" />
    </ScatterChart>
  </ResponsiveContainer>
  );
}

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
      <div className='Menu-box' style={{height: '377vh'}}>
          <div onClick={()=>console.log("마이 페이지(연습목록)로 페이지 변경")}>
              <Link to="/mypage" className='Menu-txt22'>
              연습목록
              </Link>
          </div>

          <div onClick={()=>console.log("질문 1 Feedback")}>
              <Link to="/feedback1/*" className='Menu-txt3' style={{top:'14vh'}}>
              &nbsp;&nbsp;질문 1
              </Link>
          </div>

          <div onClick={()=>console.log("질문 2 Feedback")}>
              <Link to="/feedback2/*" className='Menu-txt3' style={{top:'20vh'}}>
              &nbsp;&nbsp;질문 2
              </Link>
          </div>

          <div onClick={()=>console.log("질문 3 Feedback") }>
              <Link to="/feedback3/*" className='Menu-txt3' style={{top:'26vh'}}>
              &nbsp;&nbsp;질문 3
              </Link>
          </div>

      
          <div className='Main-box'>
            <MainFeedback/>
        </div>
      </div>
    );
  }
}
export default Feedback;
