import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img from './book.jpg'
import './index.less'
export default class NotMatch extends Component {
  render() {
    return (
      <div className='notmatch clearfix' >
          <div className='notmatch-left fll'>
              <div className='title'>
                    Oh,my god！
              </div>
              <div className='desc'>
                  404么有找到你要的页面
              </div>
              <ul>
                  <li>或者你可以</li>
                  <li>
                      <Link to='/admin/home'>回首页</Link>
                  </li>
              </ul>
          </div>
          <div className='img-wrap fll'> 
                <img src={img} alt="404"/>
          </div>
      </div>
       
      
    )
  }
}
