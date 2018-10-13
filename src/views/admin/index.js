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
          <Row className='wrap clearfix'>        
                    <Col span={3} className='wrapleft fll'>
                        <NavLeft></NavLeft>
                    </Col>                           
                    <Col span={21}  className='wrapright flr'>
                        <Header>
                        </Header>
                        <div className='content-wrap'>
                            <div className='content'>
                                {this.props.children}  
                            </div>    
                        </div>  
                        <Footer>                           
                       </Footer>
                    </Col>          
          </Row>
      </div>
    )
  }
}
