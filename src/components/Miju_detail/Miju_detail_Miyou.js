import React, { Component } from 'react';
import "./Miju_detail_Miyou.css"
class Miju_detail_Miyou extends Component {
  constructor (props) {
    super(props);
    this.state = {
      host:""
    };
  }
componentWillMount(){
  var myhost=this.props.host;
  this.setState({
  host:myhost

  });
}
  render () {
    const show=this.props.show;
    const x=this.props.x+5;
    const y=this.props.y+5;
    var host=this.state.host;
    return (
      <div style={{display:show,width:400,height:200,position:"absolute",top:y,left:x,backgroundColor:"#89f",opacity:0.8}}>
        <div className="Muju_detail_CardId">
                    <img className="Muju_detail_ProfilePhoto" src={host.avatar}/>
                    <div className="Muju_detail_imformation">
                      <h3 className="Muju_detail_username">{host.nickname}</h3>
                      <div className="Muju_detail_flag1">有房源</div>
                        <p >{host.location} </p>
                        <p >{host.want_rent_price}</p>
                    </div>
                    <div className="Muju_detail_introduce">
                      <p>{host.introduction}</p>
                    </div>
        </div>
      </div>
    );
  }
}

export default Miju_detail_Miyou;