/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import img_main_simple from '../images/img_main_simple.png';
import './Mypage.css';
import List from './list.js'

//<img src={img_main_simple}/>  

const Mypage = () => {
    return (
        <div>
            <Navbar/>
            <Bar/>
            <MenuBox/>
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
        <div className='Menu-box'>
            <div className='Menu-txt1'>
                 Feedback
            </div>
            <div className='Menu-txt2'>
            &nbsp;&nbsp;&nbsp;&nbsp;연습기록
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
