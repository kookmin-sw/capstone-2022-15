/* eslint-disable */
import React, { useState, PureComponent, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import { Link } from 'react-router-dom';
import img_interviewer from '../images/img_interviewer.png';
import SyncLoader from "react-spinners/SyncLoader";
import axios from 'axios';
export const Authentication = React.createContext(null);
import {LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, ZAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';


const Feedback2 = () => {
  const isTest = false;
    let getFeedbackpage = isTest
    ? `http://localhost:8000/accounts/feedback` // checkedId -> ques
    : `https://api.kmuin4u.com/accounts/feedback`; 

  axios({
    url: getFeedbackpage, 
    method: 'GET',
    headers: {
      Authorization: 'Token aiefaengakejnf;aenf;erag;hwenrg;nq'
    },
    data: {
      //interview_id: `${interviewId}`, 
    //question_n: `${questionN}`,
      interview_id: `1`, 
      question_n: `1`,
    }
  }).then(response => {
    console.log("Mypage Get Success")
      getInterview_id(response.data.interview_id)
      getQuestion_n(response.data.question_n)
      getIris(response.data.iris_movement)
      getFaceMovement(response.data.face_movement)
      getVolumnInterview(response.data.volumn_interview)
      getSttInterview(response.data.stt_interview)
      getVedioUrl(response.data.interviewee_url);
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
      //const video = getVedioUrl
      let chart_data1 = [
        { x: 100, y: 200, z: 200 },
        { x: 120, y: 100, z: 260 },
        { x: 170, y: 300, z: 400 },
        { x: 140, y: 250, z: 280 },
        { x: 150, y: 400, z: 500 },
        { x: 110, y: 280, z: 200 },
      ];
      let chart_data2 = [
        {
            name: "Page A",
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            pv: 3800,
            amt: 2500,
        },
      ];

      return(
        <div>
          <div className='Feedback-Q'> Q2 </div>
          <div className='Feedback-txt'style={{top:'5.2vh'}}>
                🔹 Video Check
          </div>
          <div className="Interviewer-section">
                <iframe width="700vw" height="394vh" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
              {/*{video!=='' && <video width="80%" height="80%" autoPlay={true}> 
                        <source src={video}/>
                  </video>}
                    {video==='' && <SyncLoader color={'blue'} loading={true} css={override} size={30} />}
                 */}
          </div>
  
  
  {/*나의 답변*/}
          <div className='Feedback-txt' style={{top:'17vh'}}>
                🔹 나의 답변
            <div className="Stt">
             {/* 여기에 STT 내용 <br/>
              🐟🐠🐡🦐🦑🐙🦞🐬🐳🐋🦀🐧🐚<br/>*/}
              <getSttInterview/>
            </div>
          </div>
          
  
  {/*시선 처리 차트*/}
          <div className='Feedback-txt'style={{top:'32vh'}}>
                🔹 시선 처리
              <div className='ChartBackground'>
                <img src={img_interviewer}/>
              </div>
              
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Scatter_chart scatter_data= {chart_data1}  />
                {/*<Scatter_chart scatter_data= {getIris}  /> */}
              </div>
              
          </div>
          
  
  
  {/*머리 움직임 차트*/}
          <div className='Feedback-txt' style={{top:'100vh'}}>
                🔹 머리 움직임
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Line_chart line_data= {chart_data2}  />
                {/*<Line_chart line_data= {getFaceMovement}  /> */}
              </div>
          </div>
  
  
  {/*목소리 크기 차트*/}
          <div className='Feedback-txt' style={{top:'168vh'}}>
                🔹 목소리 크기
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                {/*<Line_chart line_data= {chart_data2}/>*/}
                <Line_chart line_data= {getVolumnInterview}  /> 
              </div>
          </div>  
        </div>  
      );
    }
  }


  
{/*********************  Scatter Chart - 시선처리 차트 ********************/}
const Scatter_chart = ({
  scatter_data
  }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <ScatterChart
      width={'500px'}
      height={'300px'}
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
      <Scatter name="A school" data={scatter_data} fill="#5B7EFB" />
    </ScatterChart>
  </ResponsiveContainer>
  );
}


{/*********************  Line Chart - 시선처리 차트 ********************/}
const Line_chart = ({
  line_data
  }) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={500}
            height={300}
            data={line_data}
            margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" /><YAxis /> <Tooltip /> <Legend />
            <Line
              type="monotone"
              dataKey="time"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="time" stroke="#82ca9d" />
          </LineChart>
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
const override = {
  margin: 'auto',
  borderColor: 'red',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  height: '98vh',
  width: '100%'
}
export default Feedback2;
