import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd';
import './navLeft.less'
// const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  render() {
    return (
      <div className='navleft'>
          <Menu theme="dark" mode="inline" >
            
                    <Menu.Item key="1">
                       
                            <Link to='/admin/home' className='link'>首页</Link>  
                               
                    </Menu.Item>
                    <Menu.Item key="2">
                       
                            <Link to='/admin/secondPage' className='link'>第二页</Link>
                                 
                    </Menu.Item>
                   
          </Menu>
      </div>
    )
  }
}
