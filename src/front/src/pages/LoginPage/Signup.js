/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Signup.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import img_main_simple from '../images/img_main_simple.png';
import Footer from '../components/Footer';

const Signup = () => {
  const [user_name, setName] = useState('');
  const [user_id, setuser_id] = useState('');
  const [password1, setPassword1] = useState('');
  const [user_pw, setuser_pw] = useState('');
  // const [user_interest, setuser_interest] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(false);
    localStorage.clear();
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/login');
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
  // const onChangeuser_interest = (e) => {
  //   setuser_interest(e.target.value)
  // }
  const onSubmit = e => {
    e.preventDefault();

    const user = {
      user_name: user_name,
      user_id: user_id,
      password : password1,
//      user_pw: user_pw,
       user_interest: "user_interest"
    };
    if(password1 !== user_pw) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다')
      return false
    }
    //'/api/v1/mall/auth/register/'

    Axios.post('http://localhost:8000/accounts/join', user)
      .then(res => {
          console.log(res.data)
        if (res.data.token) {
          localStorage.clear()
          localStorage.setItem('token', res.data.token)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/login')
          setErrors(false)
        } else {
          setName('아')
          setuser_id('아')
          setPassword1('abcABC123!@#')
          setuser_pw('abcABC123')
          // setuser_interest('')
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
      <div className='Signup_Footer'>
        <Footer/>
      </div>
      
      <img src={img_main_simple} className="Img"/>
      <div className='SignupBox_layer'>
        <div className='SignupBox'>
          {loading === false && <h1>회원가입</h1>}
          {errors === true && <h2>Cannot signup with provided credentials</h2>}
          
          <div className='Inner_grey'>
            <form onSubmit={onSubmit}>
              <br /><br />
              <label htmlFor='user_name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
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
              <label htmlFor='user_id'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
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
              <label htmlFor='password1'>비밀번호 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
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
              <label htmlFor='user_pw'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인&nbsp;&nbsp;</label>
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
              {/* <label htmlFor='user_interest'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;관심분야&nbsp;
                <SelectBox options={OPTIONS} defaultValue="0"/>
              </label>  */}
              {/* <input
                user_user_interest='user_interest'
                type='user_interest'
                value={user_interest}
                onChange={onChangeuser_interest}
                required
              />{' '} */}
              
              {/* <br /><br /> */}
              <br />
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

const OPTIONS = [
  { value: "0", name: "선택없음" },
	{ value: "1", name: "Front-end" },
  { value: "1", name: "Back-end" },
];


const SelectBox = (props) => {
	const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};

	return (
		<SelectBoxWrapper>
			<Select onChange={handleChange}>
				{props.options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						defaultValue={props.defaultValue === option.value}
					>
						{option.name}
					</option>
				))}
			</Select>
		</SelectBoxWrapper>
	);
};
const SelectBoxWrapper = styled.div`
  width: 77.2%;
  white-space: pre-wrap;
  display: inline-block;
`;

export const Select = styled.select`
	margin: 0;
	min-width: 0;
  padding: 3.5px 3.5px;
	width: 77.2%;
	font-size: inherit;
	line-height: inherit;

	color: inherit;
	background-color: #fff;

	&:focus {
		border-color: blue;
	}
`;
export default Signup;


