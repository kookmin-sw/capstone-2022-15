/* eslint-disable */
import React, { useState, useEffect, Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Feedback.css';
import Footer from '../components/Footer';
//<img src={img_main_simple}/>  

const Feedback = () => {
    return (
        <div>
            <Navbar/>
            <div className='mypage_footer_top'>
              <Footer/>
            </div>
        </div>
    );
};

export default Feedback;
