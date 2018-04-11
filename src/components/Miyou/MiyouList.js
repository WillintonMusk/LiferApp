import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import "./MiyouList.css"

class MiyouList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      roommates:null,
      error: null
    };
  }

  componentWillMount()  {
    //let searchName = nextProps.searchName;

    //console.log('发送ajax请求', searchName);
    const url = 'http://test.712studio.cn:8000/miyou/list';
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response.data.data)
        this.setState({ loading: false, roommates: response.data.data })

      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
    
  }

componentWillReceiveProps(nextProps)  {
    let searchCity = nextProps.searchCity;
    let searchName = nextProps.searchName;
    let searchSex = nextProps.searchSex;
    let noPets=nextProps.noPets;
    let noSmoking=nextProps.noSmoking;
    let noNoise=nextProps.noNoise;
    var url="";
     if(searchCity==="城市"){
        if(searchName!==""){
          url = 'http://test.712studio.cn:8000/miyou/list?location='+searchName+'&gender='+searchSex+'&nopets='+noPets+'&nosmoking='+noSmoking+'&nonoise='+noNoise;
        }
         else{
          url = 'http://test.712studio.cn:8000/miyou/list?gender='+searchSex+'&nopets='+noPets+'&nosmoking='+noSmoking+'&nonoise='+noNoise;
        }
     }
     else{

        if(searchName!==""){
          url = 'http://test.712studio.cn:8000/miyou/list?location='+searchName+'&region='+searchCity+'&gender='+searchSex+'&nopets='+noPets+'&nosmoking='+noSmoking+'&nonoise='+noNoise;
        }
         else{
          url = 'http://test.712studio.cn:8000/miyou/list?region='+searchCity+'&gender='+searchSex+'&nopets='+noPets+'&nosmoking='+noSmoking+'&nonoise='+noNoise;
         }
     }
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        this.setState({ loading: false, roommates: response.data.data })
      })
      .catch((error)=>{
        console.log(error)
        
        this.setState({ loading: false, error: error.toString() })
      })

  }

  displayflag=(flag)=>{
    if(flag!==null){
      return(<div className="flag1"><Link to={"/miju/"+flag}>有房源</Link></div>);
    }
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
        <div className="row">
          {
            this.state.roommates.map((roommate) => (
              <div className="CardId" key={roommate._idcard}>
                    <img className="ProfilePhoto" src={roommate.avatar}/>
                    <div className="imformation">
                      <h4 className="username">{roommate.name}</h4>
                      {this.displayflag(roommate.roominfo)}
                        <p >#{roommate.location}#宅男 IT 篮球 </p>
                        <p >{roommate.want_rent_price}/月</p>
                    </div>
                    <div className="introduce">
                      <p>{roommate.introduction}</p>
                    </div>
                  </div>
            ))
          }

        </div>
      );
    }
  }
}
MiyouList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default MiyouList;
