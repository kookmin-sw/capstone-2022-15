import React, { useState } from 'react';
import Axios from 'axios';

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

    Axios.post('/accounts/login/', user)
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
    <div>
      <h1>로그인</h1>
      <br />
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
        <form onSubmit={onSubmit}>
          <label>아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type='user_id'
            value={user_id}
            required
            onChange={e => setUser_id(e.target.value)}
          />
          <br/><br/>
          <label>비밀번호&nbsp;&nbsp;&nbsp;</label>
          <input
            type='user_pw'
            value={user_pw}
            required
            onChange={e => setUser_pw(e.target.value)}
          />
          <br/><br/>
          <input type='submit' size="large" value='로그인' />
        </form>
    </div>
  )
}

export default Login;
