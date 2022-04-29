/* eslint-disable */
import React, { useState } from 'react';
import Axios from 'axios';
import './Signup.css';
import img_main_simple from '../images/img_main_simple.png';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const Login = () => {

  const [user_id, setUser_id] = useState('')
  const [user_pw, setUser_pw] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      user_id: user_id,
      user_pw: user_pw
    }

    Axios.post('/accounts/login', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /*로 라우팅해야 한다
          window.location.replace('/login')
        } else {
          setUser_id('')
          setUser_pw('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
        setUser_id('')
        setUser_pw('')
      })
  }

  return (
    <div className='Signup_App'>
      <Navbar/>
      <div className='Signup_Footer'>
        <Footer/>
      </div>
      <img src={img_main_simple} className="Img"/>
      <div className='SignupBox_layer'>
        <div className='SignupBox'>
          <h1>로그인</h1>
          {errors === true && <h2>Cannot log in with provided credentials</h2>}
          <div className='Inner_grey'>
            <br/><br/><br/>
              <form onSubmit={onSubmit}>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  type='user_id'
                  value={user_id}
                  required
                  onChange={e => setUser_id(e.target.value)}
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/><br/>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호&nbsp;&nbsp;&nbsp;</label>
                <input
                  type='user_pw'
                  value={user_pw}
                  required
                  onChange={e => setUser_pw(e.target.value)}
                />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/><br/><br/>
                <input type='submit' className='BT-Join' value='로그인' />
                <br /><br /><br/><br/>
              </form>
            </div>
            <br/>
            <div className='Txt_login'>
            아직 IN4U의 회원이 아니라면 👉👉👉&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to ="/signup" className="BT-Login" >
                &nbsp;&nbsp;회원가입&nbsp;&nbsp;
                </Link>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default Login;
