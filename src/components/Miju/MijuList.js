import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import NavLink from'./NavLink.js';
import "./MijuList.css"
class MijuList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      houses:null,
      error: null
    };
  }

  componentWillMount()  {
    //let searchName = nextProps.searchName;

    //console.log('发送ajax请求', searchName);
    const url = 'http://test.712studio.cn:8000/miju/list';
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response.data.data)
        this.setState({ loading: false, houses: response.data.data })

      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
    
  }

componentWillReceiveProps(nextProps)  {
    let searchCity = nextProps.searchCity;
    let searchName = nextProps.searchName;
    let searchZhengzu = nextProps.searchZhengzu;
    let searchDanjian = nextProps.searchDanjian;
    let is_community=nextProps.is_community;
    let elevator=nextProps.elevator;
    let fine_decoration=nextProps.fine_decoration;
    let subway=nextProps.subway;
    var url="";
     if(searchCity==="城市"){
        if(searchName!==""){
          if(searchZhengzu!==""){
             if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+"&rent_type="+searchZhengzu+'&room_style='+searchDanjian;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+"&rent_type="+searchZhengzu;
             }
          }
          else{
            if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+'&room_style='+searchDanjian;
             }
             else{
               
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName;              
             }

          }
        }
         else{
            if(searchZhengzu!==""){
             if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?rent_type='+searchZhengzu+'&room_style='+searchDanjian;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list?rent_type='+searchZhengzu;
             }
          }
          else{
            if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?room_style='+searchDanjian;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list';             
             }

          }
        }
     }
     else{
        if(searchName!==""){
          if(searchZhengzu!==""){
             if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+"&rent_type="+searchZhengzu+'&room_style='+searchDanjian+'&region='+searchCity;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+"&rent_type="+searchZhengzu+'&region='+searchCity;
             }
          }
          else{
            if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+'&room_style='+searchDanjian+'&region='+searchCity;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list?community='+searchName+'&region='+searchCity;             
             }

          }
        }
         else{
            if(searchZhengzu!==""){
             if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?rent_type='+searchZhengzu+'&room_style='+searchDanjian+'&region='+searchCity;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list?rent_type='+searchZhengzu+'&region='+searchCity;
             }
          }
          else{
            if(searchDanjian!==""){
                url = 'http://test.712studio.cn:8000/miju/list?room_style='+searchDanjian+'&region='+searchCity;
             }
             else{
                url = 'http://test.712studio.cn:8000/miju/list?region='+searchCity;            
             }

          }
        }
     }
    if(is_community==="1"){
        if(url==="http://test.712studio.cn:8000/miju/list"){
         url=url+"?is_community="+is_community;
        }
        else
         url=url+"&is_community="+is_community;
     }
     if(elevator==="1"){
      if(url==="http://test.712studio.cn:8000/miju/list"){
         url=url+"?elevator="+elevator;
        }
      else
        url=url+"&elevator="+elevator;
     }
     if(fine_decoration==="1"){
        if(url==="http://test.712studio.cn:8000/miju/list"){
         url=url+"?fine_decoration="+fine_decoration;
        }
      else
        url=url+"&fine_decoration="+fine_decoration;
     }
     if(subway==="1"){
        if(url==="http://test.712studio.cn:8000/miju/list"){
         url=url+"?subway="+subway;
        }
        else
         url=url+"&subway="+subway;
     }
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        this.setState({ loading: false, houses: response.data.data })
      })
      .catch((error)=>{
        console.log(error)
        
        this.setState({ loading: false, error: error.toString() })
      })

  }

/**
展示标签（房东直租或寻室友）
*/
  displayFlag=(rent_type)=>{
    if(rent_type==="房东直租"){
      return(<div className="Miju_flag2">房东直租</div>);
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
            this.state.houses.map((house) => {
              const to = "/miju/"+house.id;
              return(    
                          <NavLink to={to} key={house.id}>
                           <div className="Miju_CardId">
                                  <div className="Miju_ProfilePhoto">
                                    <img className="Miju_displayPhoto"src={house.thumb} />
                                    <div className="Miju_MorePhoto"></div>                  
                                  </div>
                                  <div className="Miju_imformation">
                                    <h3 className="Miju_name">{house.title}</h3>
                                    {this.displayFlag(house.rent_type)}
                                        <p  >房租：{house.price}元/月</p>
                                        <p  >房型：{house.room_style}</p>
                                        <p  >面积：{house.room_area}</p>
                                        <p  >家电：{house.room_facility}</p>
                                        <p  >位置：{house.location}</p>
                                        <p  >联系房东：{house.host}</p>

                                    </div>
                            </div>
                            </NavLink>
                            )})
                         }
                     </div>
                    
      );
    }
  }
}
MijuList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default MijuList;