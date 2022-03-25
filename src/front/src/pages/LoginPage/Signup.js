/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Signup.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import img_main_simple from '../images/img_main_simple.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [interest, setInterest] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/signup');
    } else {
      setLoading(false);
    }
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeId = (e) => {
    setId(e.target.value)
  }
  const onChangePw1 = (e) => {
    setPassword1(e.target.value)
  }
  const onChangePw2 = (e) => {
    setPassword2(e.target.value)
  }
  const onChangeInterest = (e) => {
    setInterest(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault();

    const user = {
      name: name,
      id: id,
      password1: password1,
      password2: password2,
      interest: interest
    };
    if(password1 !== password2) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
      return false
    }
  
    Axios.post('/api/v1/mall/auth/register/', user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/signup')
        } else {
          setName('')
          setId('')
          setPassword1('')
          setPassword2('')
          setInterest('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.clear()
        alert('아이디 혹은 비밀번호가 일치하지 않습니다')
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
              <label htmlFor='name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                name='name'
                type='name'
                value={name}
                onChange={onChangeName}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='id'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                name='id'
                type='id'
                value={id}
                onChange={onChangeId}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='password1'>비밀번호 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                name='password1'
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
              <label htmlFor='password2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인&nbsp;&nbsp;</label>
              <input
                name='password2'
                type='password'
                value={password2}
                onChange={onChangePw2}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='interest'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;관심분야 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
              <input
                name='interest'
                type='interest'
                value={interest}
                onChange={onChangeInterest}
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


