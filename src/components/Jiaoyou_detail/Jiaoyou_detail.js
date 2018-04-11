import React, { Component, PropTypes } from 'react';
import "./Jiaoyou_detail.css"

class Jiaoyou_detail extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
      this.state={
      activity:{
      "id":"1",
      "name":"针对于WebStorm工具开发React工程详细配置",
      "time":"2018-01-03",
      "location":"五一广场 星巴克",
      "type":"技术交流会",
      "price":"59-89",
      "organizer":"中南大学软件学院",
      "hot_number":"关注量",
      "QR_code":"二维码url",
      "followers":"",
      "photo":"https://avatars3.githubusercontent.com/u/1157266?v=4",
      "content":"WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率，目前比较火爆的React也越来越被众多开发人员所采纳，但是WebStorm下的React工程经常会出现很多警告以及转换提示，下面我就对此做一些整理，方便更多同志使用。"
    }
    };
  }

render () {
    return (
  <div className="myContent">
    <table className="mytable" >
      <tbody>
      <tr>
        <td>
          <div className="basicImformation">
             <div className="mydisplayPhoto" >
                <img src={this.state.activity.photo}/>
             </div>
             <div className="imformation" >
                  <h3 className="title">{this.state.activity.name}</h3>
                  <p>时间：{this.state.activity.time} </p>
                  <p>地点：{this.state.activity.location}</p>
                  <p>类型：{this.state.activity.type}</p>
                  <p>主办方：{this.state.activity.organizer}</p>
                  <p>费用：￥{this.state.activity.price}</p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="community">
            <span >活动详情：</span>
            <div>
              <p>{this.state.activity.content}</p>
            </div>
          
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

export default Jiaoyou_detail;