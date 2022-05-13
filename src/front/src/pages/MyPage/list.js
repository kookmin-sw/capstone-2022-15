import React, { useState, Component } from 'react';
import './Mypage.css';

import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      page : 1,
      limit : 10,
      all_page : [], 
    }
  }

  componentWillMount() {
    this._getListData();
    this._setPage();
  }

  _getListData = async function() {
    const { limit } = 10;
    // const page = this._setPage();
    const {user_id} = this.state;
    const {field_id} = this.state;
    const {interview_start} = this.state;
  

    // Board 테이블 데이터 전체 수
    const total_cnt = 7;

    // 데이터 가져오기
    const total_list = await axios('/accounts/mypage', {
      method : 'GET',
      // headers: new Headers(),
      data : { user_id: user_id,
               field_id: field_id,
               interview_start: interview_start
             }
    })

    // 전체 페이지 수 구하기
    let page_arr = [];

    for(let i = 1; i <= Math.ceil(total_cnt.data.cnt / limit); i++) {
      page_arr.push(i);
    }

    this.setState({ data : total_list, all_page : page_arr })
  }

  _changePage = function(el) {
    this.setState({ page : el })
    sessionStorage.setItem('page', el);

    return this._getListData();
  }

  _setPage = function() {
    if(sessionStorage.page) {
      this.setState({ page : Number(sessionStorage.page) })
      return Number(sessionStorage.page);
    }

    this.setState({ page : 1 })
    return 1;
  }

  render() {
    const list = this.state.data.data
    const { all_page, page } = this.state;

    return (
      <div className='List'>

        <div className='list_grid list_tit'>
          <div className='acenter'> 유형 </div>
          {/* <div className='acenter'> 진행상황 </div> */}
          <div className='acenter'> 날짜 </div>
        </div>

          {list ? list.map( (el, key) => {
            return(
              <div className='list_grid list_data' key={key}>
                <div> {el.title} </div>
                <div> </div>
                <div className='acenter'> {el.date.slice(0, 10)} </div>
              </div>
            )
          })
            : null }

          <div className='paging_div'>
            <div> </div>
            <div>
              <ul>
                {all_page ? all_page.map( (el, key) => {
                  return(
                    el === page ? <li key={key} className='page_num'> <b> {el} </b> </li>
                                : <li key={key} className='page_num' onClick={() => this._changePage(el)}> {el} </li>
                  )
                })
                
                : null}
              </ul>
            </div>
            <div> </div>
          </div>

      </div>
    );
  }
}

export default List;
