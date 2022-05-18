import React, { Component, useState } from 'react';
import './Mypage.css';
import { Link } from 'react-router-dom';


import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
    }
  }

  componentDidMount() {
    this._getListData()
  }

  _getListData = async function() {
    const isTest = false;
    let getMypage = isTest
    ? `http://localhost:8000/accounts/mypage` // checkedId -> ques
    : `https://api.kmuin4u.com/accounts/mypage`; 

    const data_list = await axios(getMypage, {
      method : 'GET',
      headers:  {
        'Authorization':'Token ' + window.localStorage.getItem('token')
    }
    })

    this.setState({ data : data_list })
  }

  render() {
    const list = this.state.data.data

    return (
      <div className='List'>

        <div className='list_grid list_tit'>
          <div className='acenter'> 제목 </div>
          <div className='acenter'> 날짜 </div>
        </div>

          {list ? list.map( (el, key) => {
            const GoFeedbackPage = '/accounts/feedback1/'+ el.interview_id;
            return(
              <div className='list_grid list_data' key={key}>
                <div className='acenter list_data'> <Link to={GoFeedbackPage}> {el.field_id} </Link> </div>
                <div> </div>
                <div className='acenter list_data'> {el.interview_date.slice(0, 10)} </div>
              </div>
            )
          })
            : null }
      </div>
    );
  }
}
export default List;
