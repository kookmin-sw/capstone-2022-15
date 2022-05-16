/* eslint-disable */
import React, { useState, PureComponent, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import { Link } from 'react-router-dom';

import axios from 'axios';
export const Authentication = React.createContext(null);
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from "recharts";


const Feedback3 = () => {

  // const [user_id, setUser_id] = useState('')
  const [interview_id, setInterview_id] = useState(0)
  const [question_n, setQuestion_n] = useState(0)
  const [errors, setErrors] = useState(false)
  const isTest = false;
    let getFeedbackpage = isTest
    ? `http://localhost:8000/accounts/feedback` // checkedId -> ques
    : `https://setInterview_idapi.kmuin4u.com/accounts/feedback`; 

  axios({
    url: getFeedbackpage, 
    method: 'GET',
    headers: {
        'Authorization':'Token ' + window.localStorage.getItem('token')
        
    }
  }).then(response => {
    console.log("Mypage Get Success")
      setInterview_id(interview_id)
      setQuestion_n(question_n)
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
        <div className='Menu-box' style={{height: '325vh'}}>
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

  class MainFeedback extends Component{
    render(){
      const videoUrl = "https://www.youtube.com/embed/Y8JFxS1HlDo" 
      //const videoUrl = user_id + interview_id + "/interview_video/interview" + interview_id+".mp4"
      let chart_data1 = [
        {
            name: "우",
            uv: 2300,
            pv: 3200,
            amt: 2400,
        },
        {
            name: "와",
            uv: 2500,
            pv: 3398,
            amt: 2210,
        },
        {
            name: "아",
            uv: 2500,
            pv: 3800,
            amt: 2290,
        },
        {
            name: "아",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "아",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "악",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
      
      ];
      
      let chart_data2 = [
        {
            name: "제",
            uv: 2300,
            pv: 3200,
            amt: 2400,
        },
        {
            name: "발",
            uv: 2500,
            pv: 3398,
            amt: 2210,
        },
        {
            name: "피",
            uv: 2500,
            pv: 3800,
            amt: 2290,
        },
        {
            name: "드",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "백",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "페",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
      
      ];
      let chart_data3 = [
        {
            name: "지",
            uv: 2300,
            pv: 3200,
            amt: 2400,
        },
        {
            name: "성",
            uv: 2500,
            pv: 3398,
            amt: 2210,
        },
        {
            name: "공",
            uv: 2500,
            pv: 3800,
            amt: 2290,
        },
        {
            name: "하",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "자",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "구",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
      
      ];
      return(
        <div>
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
          
  
  {/*목소리 차트*/}
          <div className='Feedback-txt'style={{top:'32vh'}}>
                🔹 목소리 크기
              <div style={{ width: '50vw', height: '40vh',  left:'14vw',position:'absolute'}}>
                <Rechart chart_data= {chart_data1}  />
              </div>
          </div>
          
  
  
  {/*머리 움직임 차트*/}
          <div className='Feedback-txt' style={{top:'87vh'}}>
                🔹 머리 움직임
              <div style={{ width: '50vw', height: '40vh',  left:'14vw',position:'absolute'}}>
                <Rechart chart_data= {chart_data2}/>
              </div>
          </div>
  
  
  {/*시선처리 차트*/}
          <div className='Feedback-txt' style={{top:'141vh'}}>
                🔹 시선 처리
              <div style={{ width: '50vw', height: '40vh',  left:'14vw',position:'absolute'}}>
                <Rechart chart_data= {chart_data3}/>
              </div>
          </div>  
        </div>  
      );
    }
  }

  

const Rechart = ({
  // static demoUrl =  'https://codesandbox.io/s/tiny-line-chart-r5z0f';
    chart_data
}) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
          <LineChart
              width={500}
              height={300}
              data={chart_data}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 6 }}
              />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
      </ResponsiveContainer>
  );
}


export default Feedback3;
