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


class Feedback extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            iris_movement : {},
            face_movement : {},
            volume_interview : {},
            stt_interview : {},
            videoUrl : '',
            loading : true,
            interview_id : 0
        }
    }

    componentDidMount(){
        this._getListData()
    }

    _getListData = async function(){
      const isTest = false;
      const interview_id = 5; // --------------- 변경
      const question_n = 0;
        let getFeedbackpage = isTest
        ? `http://localhost:8000/accounts/feedback/${interview_id}/${question_n}` // checkedId -> ques
        : `https://api.kmuin4u.com/accounts/feedback/${interview_id}/${question_n}`;      
      const data_list = await axios(getFeedbackpage,{
        method : 'GET',
        headers : {
            'Authorization':'Token ' + window.localStorage.getItem('token')
        }
      })
      this.setState({data: data_list})
    }
    render(){
        const list = this.state.data.data
        console.log("Mypage Get Success")
        console.log(list)

    if (!list) return (
        <div></div>
    )
    if (list){
    console.log("video: ", list.interviewee_url)
    console.log(list.interviewee_url.interviewee_url)
    alert('2 ~ 3분 후 피드백이 생성됩니다.')
        return (
          
            <div>
                <Navbar/>
                <Bar2/>

      <div className='Menu-box' style={{height: '2300px'}}>
          <div className='mypage_footer_top2'>
            <Footer/>
          </div> 
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
          <div className='Feedback-txt'style={{top:'50px'}}>
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
          <div className='Feedback-txt' style={{top:'117px'}}>
                🔹 나의 답변
            <div className="Stt">
              {list.stt_interview.slice(46, -2)}<br/>
            </div>
          </div>


  {/*시선 처리 차트*/}
          <div className='Feedback-txt'style={{top:'194px'}}>
                🔹 시선 처리
              <div className='ChartBackground'>
                <img src={img_interviewer}/>
              </div>

              <div style={{ width: '594px', height: '313px',  left:'190px',position:'absolute'}}>
                <Scatter_chart_iris scatter_data= {list.iris_movement}  />
              </div>

          </div>



  {/*머리 움직임 차트*/}
          <div className='Feedback-txt' style={{top:'605px'}}>
                🔹 머리 움직임
              <div style={{ overflowX:'scroll',width: '650px', height: '350px',  left:'160px',position:'absolute'}}>
              <div style={{ width: '800px', height: '300px'}}>  
                <Line_chart_face line_data= {list.face_movement}  />
              </div>
              </div>
          </div>


  {/*목소리 크기 차트 react horizontal scrolling?*/}
          <div className='Feedback-txt' style={{top:'1058px'}}>
                🔹 목소리 크기
              <div style={{ overflowX:'scroll',width: '650px', height: '350px',  left:'160px',position:'absolute'}}>
              <div style={{ width: '800px', height: '300px'}}>
              {/*<div style={{ width: '594px', height: '300px',  left:'150px',position:'absolute'}}>*/}
                <Line_chart_volume line_data= {list.volume_interview}  />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
  }
 }
}





{/*********************  Scatter Chart - 시선처리 차트 ********************/}
const Scatter_chart_iris = ({
  scatter_data
  }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <ScatterChart
      width={'500px'}
      height={'900px'}
      margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="x" unit="" />
      <YAxis type="number" dataKey="y" name="y" unit="" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={scatter_data} fill="#5B7EFB" />
    </ScatterChart>
  </ResponsiveContainer>
  );
}


{/*********************  Line Chart - 머리 움직임 차트 ********************/}
const Line_chart_face = ({
  line_data
  }) => {console.log("line", line_data)
  return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={'500px'}
            height={'300px'}
            data={line_data}
            margin={{
                      top: 30,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" unit="초"/><YAxis domain={[0, 0.03]}/> <Tooltip /> <Legend />
            <Line
              type="monotone"
              dataKey="y"
              name="머리움직임 빈도"
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
  }) => {console.log("line", line_data)
  return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            width={'500px'}
            height={'300px'}
            data={line_data}
            margin={{
                      top: 30,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" unit="초"/><YAxis unit="dB"/> <Tooltip /> <Legend />
            <Line
              type="monotone"
              dataKey="y"
              name="목소리 크기"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/*<Line type="monotone" dataKey="y" stroke="#82ca9d"/>*/}
          </LineChart>
        </ResponsiveContainer>

  );
}


class Bar2 extends Component{
  render(){
//function Bar2(props){

    return(
      <div className='Bar'>
          My Page - 피드백
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

export default Feedback;
