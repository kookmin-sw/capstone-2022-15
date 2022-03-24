/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Signup.css';

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

    fetch('http://127.0.0.1:8000/api/v1/mall/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/dashboard');
        } else {
          setName('');
          setId('');
          setPassword1('');
          setPassword2('');
          setInterest('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className='Signup_App'>
      <Navbar/>
      <div className='SignupBox_layer'>
        <div className='SignupBox'>
          {loading === false && <h1>회원가입</h1>}
          {errors === true && <h2>Cannot signup with provided credentials</h2>}
          <br />
          <div className='Inner_grey'>
            <form onSubmit={onSubmit}>
              <br /><br />
              <label htmlFor='name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                name='name'
                type='name'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='id'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아이디 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                name='id'
                type='id'
                value={id}
                onChange={e => setId(e.target.value)}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='password1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                name='password1'
                type='password'
                value={password1}
                onChange={e => setPassword1(e.target.value)}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='password2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;비밀번호 확인&nbsp;&nbsp;</label>
              <input
                name='password2'
                type='password'
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />
              <br />
              <label htmlFor='interest'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;관심분야 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
              <input
                name='interest'
                type='interest'
                value={interest}
                onChange={e => setInterest(e.target.value)}
                required
              />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br /><br /><br /><br />
              <input type='submit' className='BT-Join' value='회원가입' />
              <br /><br /><br />
            </form>
          </div>
          <br />
          <span>
            이미 IN4U의 회원이라면 👉👉👉
            
          </span>
          <div onClick={()=>console.log("로그인 페이지로 페이지 변경")}>
                
          </div>
          
        </div>
      </div>
    </div>
  );
};

class Core extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <Header/> */}
        <Navbar/>
        <Top/>
        <Middle/>
        <Bottom/>
        <Footer_pink/>
        <div className='footer_top'>
          <Footer/>
        </div>
        
        
      </div>
    );
  }
}


export default Signup;


