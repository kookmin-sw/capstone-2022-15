/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import img_main_simple from '../images/img_main_simple.png';
import './Mypage.css';
import List from './list.js'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { checkToken } from '../LoginPage/Login'

const isLoggedIn = !!localStorage.getItem('token');


const Mypage = () => {

    useEffect(() => {
      if(!isLoggedIn){
          window.location.replace('/login')
      }
      const isTokenValid = checkToken(localStorage.getItem('token'))
      if(!isTokenValid){
          window.localStorage.clear()
          window.location.replace('/login')
      }
    }, [])
    
    return (
        <div>
            <Navbar/>
            <Bar/>
            <MenuBox/>
            <div className='mypage_footer_top'>
              <Footer/>
            </div>
        </div>
    );
};


class Bar extends Component{
    render(){
      return(
        <div className='Bar'>
            My Page - 피드백
        </div>
      );
    }
}
class MenuBox extends Component{
  render(){
    return(
      <div className='Menu-box' style={{height: '750px'}}>
          <div onClick={()=>console.log("마이 페이지로 페이지 변경")}>
                <Link to="/mypage" className='Menu-txt2'>
                연습목록
                </Link>
            </div>

          <img src={img_main_simple} className="Img_mypage"/>  

          <div className='Main-box'>
              <MainBox/>
          </div>
      </div>
    );
  }
}
class MainBox extends Component{
  render(){
    return(
      <div>
          <List/>
      </div>
        
    );
  }
}
  

export default Mypage;
