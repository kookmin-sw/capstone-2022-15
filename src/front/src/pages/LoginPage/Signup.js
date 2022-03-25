/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Signup.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import img_main_simple from '../images/img_main_simple.png';

const Signup = () => {
  const [user_name, setName] = useState('');
  const [user_id, setuser_id] = useState('');
  const [password1, setPassword1] = useState('');
  const [user_pw, setuser_pw] = useState('');
  const [user_interest, setuser_interest] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/');
    } else {
      setLoading(false);
    }
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeuser_id = (e) => {
    setuser_id(e.target.value)
  }
  const onChangePw1 = (e) => {
    setPassword1(e.target.value)
  }
  const onChangePw2 = (e) => {
    setuser_pw(e.target.value)
  }
  const onChangeuser_interest = (e) => {
    setuser_interest(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault();

    const user = {
      user_name: user_name,
      user_id: user_id,
      password1: password1,
      user_pw: user_pw,
      user_interest: user_interest
    };
    if(password1 !== user_pw) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
      return false
    }
    //'/api/v1/mall/auth/register/'
    Axios.post('/accounts/join', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
        } else {
          setName('')
          setuser_id('')
          setPassword1('')
          setuser_pw('')
          setuser_interest('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아직 회원가입 불가')
      })
  }

  return (
    <div className='Signup_App'>
      <Navbar/>
      <img src={img_main_simple} className="Img"/>
      <div className='SignupBox_layer'>
        <div className='SignupBox'>
          {loading === false && <h1>회원가입</h1>}
          {errors === true && <h2>Cannot signup with provided credentials</h2>}
          
          <div className='Inner_grey'>
            <form onSubmit={onSubmit}>
              <br /><br />
              <label htmlFor='user_name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                user_name='user_name'
                type='user_name'
                value={user_name}
                onChange={onChangeName}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='user_id'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                user_user_id='user_id'
                type='user_id'
                value={user_id}
                onChange={onChangeuser_id}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='password1'>비밀번호 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                user_pw1='password1'
                type='password'
                value={password1}
                onChange={onChangePw1}
                minLength='8'
                pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
                required
              />{' '}
              <br/>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(소문자, 숫자, 특수문자 포함 8~16자) </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <label htmlFor='user_pw'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인&nbsp;&nbsp;</label>
              <input
                user_pw='user_pw'
                type='password'
                value={user_pw}
                onChange={onChangePw2}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='user_interest'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;관심분야 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
              <input
                user_user_interest='user_interest'
                type='user_interest'
                value={user_interest}
                onChange={onChangeuser_interest}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br /><br /><br />
              <input type='submit' className='BT-Join' value='회원가입' />
              <br /><br /><br />
            </form>
          </div>
          <br />
          <div className='Txt_login'>
            이미 IN4U의 회원이라면 👉👉👉&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to ="/login" className="BT-Login" >
                &nbsp;&nbsp;로그인&nbsp;&nbsp;
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Signup;


