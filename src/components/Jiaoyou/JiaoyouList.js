import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import NavLink from'../Miju/NavLink.js';
import "./JiaoyouList.css"

class JiaoyouList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      activities:null,
      error: null
    };
  }

    componentWillMount()  {
     const url = 'http://test.712studio.cn:8000/jiaoyou/list';
      this.setState({ firstView: false, loading: true });
      axios.post(url)
          .then((response)=>{
              console.log(response.data.data)
              this.setState({ loading: false, activities: response.data.data })
          })
         .catch((error)=>{
             console.log(error)
             this.setState({ loading: false, error: error.toString() })
          })
  }
 
 componentWillReceiveProps(nextProps)  {
  let searchName = nextProps.searchName;
  let searchCity = nextProps.searchCity;
  let party=nextProps.party;
  let perform=nextProps.perform;
  let exhibition=nextProps.exhibition;
  let experience=nextProps.experience;
  var mytype=[];
  if(party==="1"){
    mytype.push("聚会");
  }
  if(perform==="1"){
    mytype.push("演出");
  }
  if(exhibition==="1"){
    mytype.push("展览");
  } 
  if(experience==="1"){
    mytype.push("体验课");
  }  

  var url="http://test.712studio.cn:8000/jiaoyou/list";
  var params="";
  if(searchCity!=="城市"){ 
   params={region:searchCity};
   if(mytype.length!==0){
   params={region:searchCity,type:mytype};
   }
   if(searchName!=""){
    params={region:searchCity,name:searchName};
    if(mytype.length!==0){
     params={region:searchCity,type:mytype,name:searchName};
     }
   }
  }
  else{
   if(mytype.length!==0){
   params={type:mytype};
   }
   if(searchName!=""){
    params={name:searchName};
    if(mytype.length!==0){
     params={type:mytype,name:searchName};
     }
   }
  }
   this.setState({ firstView: false, loading: true });
    axios.post(url,params)
      .then((response) => {
        this.setState({ loading: false, activities: response.data.data })
      })
      .catch((error)=>{
        console.log(error)
        
        this.setState({ loading: false, error: error.toString() })
      })
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
            this.state.activities.map((activity) => {
              const to="/Jiaoyou/:"+activity.id
              return(
              <NavLink to={to} key={activity.id}>
              <div className="content">
                    <img className="photo_act" src={activity.QR_code}/>
                    <div className="detail_act">
                        <h5 >{activity.name}</h5>
                        <span>
                            <p>时间：{activity.time}</p>
                            <p>地点：{activity.location}</p>
                            <p>类型：{activity.type}</p>
                            <p>主办方：{activity.organizer}</p>
                        </span>
                        <p className="act_intro">WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率。</p>
                    </div>
              </div>
              </NavLink>
            );})
          }

        </div>
      );
    }
  }
}
JiaoyouList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default JiaoyouList;
