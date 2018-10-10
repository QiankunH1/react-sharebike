import React, { Component } from 'react'
import {Row,Col} from 'antd'
import Header from '../../component/header'
import NavLeft from '../../component/navLeft'
import Footer from '../../component/footer'
import './index.less'

export default class Admin extends Component {
  render() {
    return (
      <div>
          <Row>
            <Col span={4}>
                <NavLeft></NavLeft>
            </Col>
            <Col span={20}>
                <Header></Header>
                <div className='content-wrap'>
                    <div className='content'>
                        {this.props.children}  
                    </div>    
                </div>  
                <Footer></Footer>
            </Col>
          </Row>
      </div>
    )
  }
}
