import React, { Component, PropTypes } from 'react';
import Detail_display from './detail_display';
import axios from 'axios';
import Miju_detail_Miyou from "./Miju_detail_Miyou";
import "./Miju_detail.css";
class Miju_detail extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state={
      firstView: false,
      loading: false,
      error: null,
      house:"",
      displayMiyou:"none",
      x:"",
      y:""
    };

  }

componentWillMount(){
  var id=this.props.params.id;
   const url = 'http://test.712studio.cn:8000/miju/detail?id='+id;
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ loading: false, house: response.data.data})

      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
}

  mymap=()=>{
 var BMap = window.BMap;
  var map = new BMap.Map("map"); // 创建Map实例
  var point= new BMap.Point(this.state.house.longitude,this.state.house.latitude);
  map.centerAndZoom(point, 11); // 初始化地图,设 置中心点坐标和地图级别
  map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
  map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  var marker = new BMap.Marker(point);        // 创建标注    
  map.addOverlay(marker);// 将标注添加到地图中
  var opts = {    
    width : 50,     // 信息窗口宽度    
    height: 10,     // 信息窗口高度    
    title : this.state.house.title  // 信息窗口标题   
    }    
  var infoWindow = new BMap.InfoWindow(this.state.house.location, opts);  // 创建信息窗口对象    
  map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
                      

  }
  handleMouseOver=(e)=>{

    this.setState({
      displayMiyou:"block",
      x:e.pageX,
      y:e.pageY
    });
  }
  handleMouseOut=()=>{
    this.setState({
      displayMiyou:"none",
   
    });
  }

  render () {
     if (this.state.firstView) {
      return <h2>Enter name to search</h2>;
    } else if (this.state.loading) {
      return <h2>Loading result...</h2>;
    } else if (this.state.error) {
      return <h2>{this.state.error}</h2>;
    } else {
    return (
  <div className="myContent">
   <Miju_detail_Miyou show={this.state.displayMiyou} x={this.state.x} y={this.state.y} host={this.state.house.host}/>
    <table className="mytable" >
      <tbody>
      <tr>
        <td>
          <div className="basicImformation">
            <h2 className="mytitle1">{this.state.house.title}</h2>
            <div className="myProfilePhoto1">
                  <img src={this.state.house.pictures[0]}/>
                  <div ></div>                  
            </div>
             <div className="myimformation1" >
                  <p id="price">{this.state.house.price}元/月</p>
                  <p>房型：{this.state.house.room_style} {this.state.house.room_area}平米</p>
                  <p>租赁方式：{this.state.house.rent_type}</p>
                  <p>房间剩余：{this.state.house.room_left}</p>
                  <p>位置：{this.state.house.location}</p>
                  <p>小区：{this.state.house.community}</p>
                  <p>联系人：<div className="the_host" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.house.host.name}</div></p>
              </div>
             </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="room_facility">
            <span>房源设施：</span>
            <div><img src="picture/洗衣机.png" width="25"/>洗衣机</div>
            <div><img src="picture/空调.png" width="25"/>空调</div>
            <div><img src="picture/暖气.png" width="25"/>暖气</div>
          </div>
        </td>
      </tr>
      <tr>
          <td>
          <div className="house_discribtion">
            <span>房源描述：</span>
            <p>
              {this.state.house.detail}
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="community">
            <span >小区详情：</span>
            <div>
              <p>小区：{this.state.house.community}</p>
              <p>地址：{this.state.house.location}</p>
            </div>
            
            <div id='map' onClick={this.mymap}>点击查看地图</div>
           
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="similarHouse" >
            <span >相似房源：</span>
            <div className="display">
              <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
             <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
              <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
             <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
              <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>

            </div>
          </div>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
    );
   }
  }

}

export default Miju_detail;