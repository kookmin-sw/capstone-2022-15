import React, { Component, useState } from 'react';
import './Mypage.css';
import { Link } from 'react-router-dom';
import queryString from 'query-string';


import axios from 'axios';

const List = () => {
    const [interview_id, getInterviewrID] = useState('');
    const [field_id, getFieldID] = useState('')
    const [interview_start, getInterviewStart] = useState('')

    const data = {
        interview_id:interview_id,
        field_id:field_id,
        interview_start:interview_start
    }
    
    axios.get('https://api.kmuin4u.com/accounts/mypage', data)
    .then(response => {
      console.log("Mypage Get Success")
        getInterviewrID(response.data.interview_id)
        getFieldID(response.data.field_id)
        getInterviewStart(response.data.interview_id)
    })
    .catch(error => {
        console.log(error)
        alert('error')
    })


    return (
      <div className='List'>
        <div className='list_grid list_tit'>
          <div className='acenter'> 제목 </div>
          <div className='acenter'> 날짜 </div>
        </div>

        
          {interview_id ? data.map( (el, key) => {
            const GoFeedbackPage = '/accounts/feedback/' + interview_id;

            return(
              <div className='list_grid list_data' key={key}>
                <div> <Link to={GoFeedbackPage}> {el.interview_id} </Link> </div>
                <div> </div>
                <div className='acenter'> {el.date.slice(0, 10)} </div>
              </div>
            )
          })
            : null }
            <div> </div>
          </div>
    );
}


export default List;
