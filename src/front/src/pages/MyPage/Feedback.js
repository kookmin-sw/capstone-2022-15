/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import img_main_simple from '../images/img_main_simple.png';
import { Link } from 'react-router-dom';
import GetChart from './ChartTest';

export const Authentication = React.createContext(null);


const Feedback = () => {


  const [user_id, setUser_id] = useState('')
  const [interview_id, setInterview_id] = useState(0)
  const [question_n, setQuestion_n] = useState(0)
  const [errors, setErrors] = useState(false)

//참고 https://blog.devgenius.io/django-react-authentication-part-2-ea626688165e


/*
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
        window.location.replace('http://15.164.96.225:8000/accounts/feedback', {
        method: 'GET',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUser_id(data.user_id);
          setInterview_id(data.interview_id);
          setQuestion_n(data.question_n);
          setErrors(false);
        });
    }
  }, []);
*/

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

    const imgUrl = "https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"
    //


    const ChartHead = "https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"
    const ChartVoice = "https://github.com/usun813/temp/blob/main/cYZnk--br-br-.png?raw=true"

    return(
      
      <div>
        <div className='Feedback-txt'style={{top:'5.2vh'}}>
              🔹 Video Check
        </div>
        <div className="Interviewer-section">
              <iframe width="700vw" height="394vh" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
        </div>

        <div className='Feedback-txt' style={{top:'17vh', height:"40vh"}}>
              🔹 나의 답변
        </div>
        {/* <div className="Video_txt" >
                <p>{VideoTxt}</p>
        </div> */}
        <div className="Video_txt">
          {/* <input type="file" onChange={tihs.handleChange.bind(this)} />  */}
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


////////////////////////////////////////////여기부터는 꾸미는거//////////////////////////////////////
//질문1,2,3,4,5마다 Link to="/feedback/2 이렇게 해놓긴 했는데, 쓸려면 App.js에도 추가해야 함! 


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
        <div className='Menu-box' style={{height: '280vh'}}>
            <div onClick={()=>console.log("마이 페이지(연습목록)로 페이지 변경")}>
                <Link to="/mypage" className='Menu-txt22'>
                연습목록
                </Link>
            </div>

            <div onClick={()=>console.log("질문 1 Feedback")}>
                <Link to="/feedback/" className='Menu-txt3' style={{top:'14vh'}}>
                &nbsp;&nbsp;질문 1
                </Link>
            </div>

            <div onClick={()=>console.log("질문 2 Feedback")}>
                <Link to="/feedback/2" className='Menu-txt3' style={{top:'20vh'}}>
                &nbsp;&nbsp;질문 2
                </Link>
            </div>

            <div onClick={()=>console.log("질문 3 Feedback") }>
                <Link to="/feedback/3" className='Menu-txt3' style={{top:'26vh'}}>
                &nbsp;&nbsp;질문 3
                </Link>
            </div>

            <div onClick={()=>console.log("질문 4 Feedback") }>
                <Link to="/feedback/4" className='Menu-txt3' style={{top:'32vh'}}>
                &nbsp;&nbsp;질문 4
                </Link>
            </div>
            
            <div onClick={()=>console.log("질문 5 Feedback") }>
                <Link to="/feedback/5" className='Menu-txt3' style={{top:'38vh'}}>
                &nbsp;&nbsp;질문 5
                </Link>
            </div>
        
            
            <img src={img_main_simple} className="Img_mypage"/>  
            <div className='Main-box'>
              <MainFeedback/>
          </div>
        </div>
      );
    }
  }


export default Feedback;
