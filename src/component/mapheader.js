import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './mapheader.less'

export default class Mapheader extends Component {
  render() {
    return (
        <div className='head-wrap1 clearfix'>
            <div className='fll'>
                共享单车骑行详情
            </div>
            <div className='user-info1 flr clearfix'>
                <div className='flr'>
                    <Link to='/login'>退出</Link>
                </div>
                <div className='user-detail1 flr'>
                    欢迎,<span className='username1'>黄乾坤</span>
                </div> 
            </div>
      </div>
    )
  }
}
