import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd';
import './navLeft.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
  render() {
    return (
      <div className='navleft'>
          <Menu theme="dark" mode="inline" className='menu'>
               
                    <Menu.Item key="1">                     
                        <Link to='/admin/home' className='link'>首页</Link>                                
                    </Menu.Item>
                       
               
                    <Menu.Item key="2">                      
                        <Link to='/admin/Order' className='link'>订单管理</Link>                                
                    </Menu.Item>
                
                <SubMenu title={ <span>图例</span> } >
                  <Menu.Item key="3">                      
                    <Link to='/admin/echarts/bar'>条形图</Link>                                
                  </Menu.Item>
                  <Menu.Item key="4">                      
                    <Link to='/admin/echarts/pie'>饼状图</Link>                               
                  </Menu.Item>
                </SubMenu>
                                     
          </Menu>
      </div>
    )
  }
}
