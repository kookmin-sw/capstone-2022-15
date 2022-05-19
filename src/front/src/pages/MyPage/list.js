import React, { Component, useState } from 'react';
import './Mypage.css';
import { Link } from 'react-router-dom';



import axios from 'axios';
const interviewTypename = {
    0: '[인성] 인성 면접',
    1: '[직무] 임베디드 SW 엔지니어',
    2: '[직무] UI/UX 디자이너',
    3: '[직무] DB 엔지니어',
    4: '[직무] 보안 엔지니어',
    5: '[직무] 클라우드 아키텍처 개발자',
    6: '[직무] 빅데이터 개발자'
}
   
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
    const isTest = true;
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
            const GoFeedbackPage = '/feedback1'
            return(
              <div className='list_grid list_data' key={key}>
                <div className='acenter list_data'> <Link to={GoFeedbackPage}> {interviewTypename[el.fields.field_id]} </Link> </div>
                <div className='acenter list_data'> {el.fields.interview_date.slice(0,10)} </div>
              </div>
            )
          })
            : null }

      </div>
    );
  }
}
export default List;