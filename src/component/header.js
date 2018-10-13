import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import { Breadcrumb } from 'antd';
import './header.less'
import {formData} from '../utils'
import axios from 'axios'



export default class Header extends Component {

    constructor(props){
        super(props)
    }
    state={
        time:'2018-08-01 23:30:56',
        weather:'低温3° 晴天'
    }

    getTime(){
        setInterval(()=>{
            let unix = new Date().getTime()
            let timeStr = formData(unix)
            this.setState({
                time:timeStr
            })
        },1000)
    }
    getWeather(){
       axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=北京市`).then(res=>{
            // console.log(res)
            // console.log(res.data.data.forecast[0])
            let weather = res.data.data.forecast[0]
            let weatherStr=`${weather.low}~${weather.high} ${weather.fengxiang} ${weather.fengli}`
            this.setState({
                weather:weatherStr
            })
        })

    }
    componentWillMount(){
        this.getTime()
        this.getWeather()
    }

  render() {
    return (
      <div className='header-wrap'>
            <div className='user-info  clearfix'>
                <div className='flr'>
                    <Link to='/login'>退出</Link>
                </div>
                <div className='user-detail flr'>
                    欢迎,<span className='username'>黄乾坤</span>
                </div> 
            </div>
            <div className='weather-wrap clearfix'>
                <div className='breadcrumb fll'>
                    首页
                </div>
                <div className='weather flr'>
                  
                    <div className='data fll'>
                        {this.state.time}
                    </div>
                    <div className='weather-detail fll'>
                        {this.state.weather}
                    </div> 
                   
                </div>
            </div>
      </div>
    )
  }
}
