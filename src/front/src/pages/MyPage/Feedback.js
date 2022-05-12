/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import './Mypage.css';
import { Link } from 'react-router-dom';
import Rechart from './Chart';

export const Authentication = React.createContext(null);


const Feedback = () => {


  const [user_id, setUser_id] = useState('')
  const [interview_id, setInterview_id] = useState(0)
  const [question_n, setQuestion_n] = useState(0)
  const [errors, setErrors] = useState(false)

//이거참고 https://blog.devgenius.io/django-react-authentication-part-2-ea626688165e


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

    return(
      <div>
        <div className='Feedback-txt'style={{top:'5.2vh'}}>
              🔹 Video Check
        </div>
        <div className="Interviewer-section">
              <iframe width="700vw" height="394vh" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
        </div>



{/*STT 해야되는 부분...
className= * 은 Mypage.css에 있움 */  }
        <div className='Feedback-txt' style={{top:'17vh'}}>
              🔹 나의 답변
          <div className="Stt">
            여기에 STT 내용 <br/>
            배경색 넣을까 말까<br/>
            🐟🐠🐡🦐🦑🐙🦞🐬🐳🐋🦀🐧🐚<br/>
            인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다. 인퓨는 가상 생성된 모습의 면접관이 입모양을 움직이며 음성으로 질문을 전달할 수 있어, 면접관이 존재하지 않고 텍스트와 음성만으로 질문을 확인하여 연습하는 기존 면접 연습 서비스와 다르게 더욱 현장감있는 면접 연습을 제공한다.  

          </div>
        </div>
        


{/*목소리 차트*/}
        <div className='Feedback-txt'style={{top:'32vh'}}>
              🔹 목소리 크기
            <div style={{ width: '50vw', height: '40vh',  left:'14vw',position:'absolute'}}>
              <Rechart />
            </div>
        </div>
        


{/*머리 움직임 차트*/}
        <div className='Feedback-txt' style={{top:'87vh'}}>
              🔹 머리 움직임
            <div style={{ width: '50vw', height: '40vh',  left:'14vw',position:'absolute'}}>
              <Rechart />
            </div>
        </div>
          
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
        
            <div className='Main-box'>
              <MainFeedback/>
          </div>
        </div>
      );
    }
  }


export default Feedback;
