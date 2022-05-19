/* eslint-disable */
import React, { useState, PureComponent, Component, useEffect } from 'react';
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


const Feedback = () => {
    const [list, setList] = useState();
    const [loading, setLoading] = useState(true);
    const [interview_id, setInterviewId] = useState(0);

    const isTest = true;
    //const interview_id = 1;
    const question_n = 0;
    let getFeedbackpage = isTest
    ? `http://localhost:8000/accounts/feedback/${interview_id}/${question_n}` // checkedId -> ques
    : `https://api.kmuin4u.com/accounts/feedback/${interview_id}/${question_n}`;

  useEffect(()=>{axios({
    url: getFeedbackpage,
    method: 'GET',
    headers: {
      'Authorization':'Token ' + window.localStorage.getItem('token')

    },
  }).then(response => {
    console.log("Mypage Get Success")
    setList(response.data);
    console.log("res:", response)
    console.log("list:", list)
    //setVolumeInterview(response.data.volume_interview)
     // getSttInterview(response.data.stt_interview)
     // getVedioUrl(response.data.interviewee_url);
  })
  .catch(error => {
      console.log(error)
      alert(' error')
  })
  }, [])



    if (!list) return (
        <div></div>
    )
    if (list){
    //console.log("video: ", list.interviewee_url)
    //console.log(list.interviewee_url.interviewee_url)
        return (
            <div>
                <Navbar/>
                <Bar2/>

      <div className='Menu-box' style={{height: '377vh'}}>
          <div onClick={()=>console.log("마이 페이지(연습목록)로 페이지 변경")}>
              <Link to="/mypage" className='Menu-txt22'>
              연습목록
              </Link>
          </div>

          <div onClick={()=>console.log("질문 1 Feedback")}>
              <Link to="/feedback1/" className='Menu-txt3' style={{top:'14vh'}}>
              &nbsp;&nbsp;질문 1
              </Link>
          </div>

          <div onClick={()=>console.log("질문 2 Feedback")}>
              <Link to="/feedback2/" className='Menu-txt3' style={{top:'20vh'}}>
              &nbsp;&nbsp;질문 2
              </Link>
          </div>

          <div onClick={()=>console.log("질문 3 Feedback") }>
              <Link to="/feedback3/" className='Menu-txt3' style={{top:'26vh'}}>
              &nbsp;&nbsp;질문 3
              </Link>
          </div>


          <div className='Main-box'>
            <div>
          <div className='Feedback-Q'> Q1 </div>
          <div className='Feedback-txt'style={{top:'5.2vh'}}>
                🔹 Video Check
          </div>
          <div className="Interviewer-section">
                {/*<iframe width="700vw" height="394vh" src={list.interviewee_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
              {list.interviewee_url!=='' && <video width="80%" height="80%" autoPlay={true} controls>
                        <source src={list.interviewee_url}/>
                  </video>}
                    {list.interviewee_url==='' && <SyncLoader color={'blue'} loading={true} css={override} size={30} />}
          </div>


           {/*나의 답변*/}
          <div className='Feedback-txt' style={{top:'17vh'}}>
                🔹 나의 답변
            <div className="Stt">
              {list.stt_interview.slice(9, -2)}<br/>
            </div>
          </div>


            {/*시선 처리 차트*/}
          <div className='Feedback-txt'style={{top:'32vh'}}>
                🔹 시선 처리
              <div className='ChartBackground'>
                <img src={img_interviewer}/>
              </div>

              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Scatter_chart_iris scatter_data= {list.iris_movement}  />
              </div>

          </div>



  {/*머리 움직임 차트*/}
          <div className='Feedback-txt' style={{top:'100vh'}}>
                🔹 머리 움직임
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Line_chart_face line_data= {list.face_movemet}  />
              </div>
          </div>


  {/*목소리 크기 차트 react horizontal scrolling?*/}
          <div className='Feedback-txt' style={{top:'168vh'}}>
                🔹 목소리 크기
              <div style={{ width: '46.5vw', height: '51.3vh',  left:'14vw',position:'absolute'}}>
                <Line_chart_volume line_data= {list.volume_interview}  />
              </div>
          </div>
        </div>
        </div>
      </div>
                <div className='mypage_footer_top2'>
                    <Footer/>
                </div>
            </div>
        );
    }
}




{/*********************  Scatter Chart - 시선 처리 차트 ********************/}
const Scatter_chart_iris = ({
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
      <XAxis type="number" dataKey="X" name="x" unit="cm" />
      <YAxis type="number" dataKey="Y" name="y" unit="kg" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="name" data={scatter_data} fill="#5B7EFB" />
    </ScatterChart>
  </ResponsiveContainer>
  );
}


{/*********************  Line Chart - 머리 움직임 차트 ********************/}
const Line_chart_face = ({
  line_data
  }) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={'500px'}
            height={'300px'}
            data={line_data}
            margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" /><YAxis /> <Tooltip /> <Legend />
            <Line
              type="monotone"
              dataKey="y"
              name="머리움직임"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/*<Line type="monotone" dataKey="y" stroke="#82ca9d"/>*/}
          </LineChart>
        </ResponsiveContainer>

  );
}


{/*********************  Line Chart - 목소리 크기 차트 ********************/}
const Line_chart_volume = ({
  line_data
  }) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={'500px'}
            height={'300px'}
            data={line_data}
            margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/><YAxis /> <Tooltip /> <Legend />
            <Line
              type="monotone"
              dataKey="y"
              name="크기"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/*<Line type="monotone" dataKey="y" stroke="#82ca9d"/>*/}
          </LineChart>
        </ResponsiveContainer>

  );
}




//class Bar2 extends Component{
//  render(){
function Bar2(props){

    return(
      <div className='Bar'>
          My Page - 피드백
      </div>
    );
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

export default Feedback;