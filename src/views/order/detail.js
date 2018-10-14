import React, { Component } from 'react'
import Mapheader from '../../component/mapheader'
import'./detail.less'
import axios from '../../axios'
export default class OrderDetail extends Component {
    state = {
        orderInfo: {},
     
    }

    componentDidMount() {
        this.getDetailInfo()
    }

    getDetailInfo = () => {
        const id = this.props.match.params.id
        axios.get(`/order/detail`, {id: 1}).then(res => {
            if(res.code == 0){
                console.log(res)
                this.initMap(res.result)
                this.setState({
                    orderInfo: res.result
                })
            }
        })
    }

    initMap = (result)=> {
        console.log(result)
        this.map = new window.BMap.Map("map-container");
        // 创建地图实例
        let point = new window.BMap.Point(result.position_list[1].lon, result.position_list[1].lat);
        // 创建点坐标
        this.map.centerAndZoom(point, 11);
        //可以滚动地图
        this.map.enableScrollWheelZoom(true);
        this.map.setMapStyle({style:'pink'}); 
        //添加控件
        this.addMapControl()
        //绘制折线图
        this.drawBikeRoute(result.position_list)
        //绘制服务区
        this.drawServiceArea(result.area)
    }

    addMapControl = () => {
        //添加缩放和导航控件
        var opts = {anchor: window.BMAP_ANCHOR_TOP_RIGHT}  
        this.map.addControl(new window.BMap.NavigationControl(opts));
        //添加比例尺控件
        this.map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
    }

    drawBikeRoute = (position_list) => {
        const map = this.map
        const BMap = window.BMap
        const startPoint = position_list[0]
        const endPoint = position_list[position_list.length-1]
        //生成起始坐标点
        const startMapPoint = new window.BMap.Point(startPoint.lon, startPoint.lat)
        const startIcon = new BMap.Icon("/imgs/start_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36,42)
        });
        // 生成结束坐标点
        const endMapPoint = new window.BMap.Point(endPoint.lon, endPoint.lat)
        const endIcon = new BMap.Icon("/imgs/end_point.png", new BMap.Size(36, 42), {
            imageSize: new BMap.Size(36,42)
        });
        //设置坐标点
        const startMarker = new window.BMap.Marker(startMapPoint, {icon: startIcon})
        const endMarker = new window.BMap.Marker(endMapPoint,{icon: endIcon})
        map.addOverlay(startMarker)
        map.addOverlay(endMarker)
        //生成折线图

        let polylineArr = position_list.map(point => {
            return new BMap.Point(point.lon, point.lat)
        })
        console.log(polylineArr)
        const polyline = new BMap.Polyline(polylineArr,
            {strokeColor:"#1869AD", strokeWeight:3, strokeOpacity:1}
        );
        map.addOverlay(polyline);
    }

    drawServiceArea = (area) => {
        const BMap = window.BMap
        const map = this.map
        console.log(area)
      
        let serviceArr = area.map(point => {
            console.log(point)    
            
            return new BMap.Point(point.lon, point.lat)
        })

        const polygon = new BMap.Polygon(serviceArr, {
            strokeColor: '#ff0000',
            fillColor: '#ff6700',
            fillOpacity: 0.5
        })

        map.addOverlay(polygon)


    }

  render() {
    return (
      <div className='wrap clearfix'>
          <Mapheader></Mapheader>
          <div className="map-wrap" id="map-container"></div>
      </div>




    )
  }
}
