import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'; 
class Home_Search extends Component {
  constructor (props, context) {
    super(props, context);
    // this.search = this.search.bind(this);
    this.router = context.router;
    this.state={
      search_Name:'',
      search_City:'',
      search_model:''
    };
  }

  search=()=>{
    var searchName=this.refs.Name.value.trim();
    var searchmodel=this.refs.model.value;
    var searchCity=this.refs.City.value;
    if(searchmodel==="模块"){
      alert("请选择模块");
      return
    }
    if(searchName===''){
      alert("输入搜索名字");
      return
    }
    if(searchCity==='选择您的城市'){
      alert("选择您的城市");
      return
    }
     this.setState({
      search_Name:searchName,
      search_model:searchmodel,
      search_City:searchCity
     });
     this.props.updateSearch(searchCity,searchName);
     if(searchmodel==="觅居"){
     this.router.push('/miju/'+searchName+'/'+searchCity);  
     }
     else if(searchmodel==="觅友"){
     this.router.push("/miyou");  
     }
     else if(searchmodel==="郊游"){
     this.router.push("/jiaoyou");  
     }
     else if(searchmodel==="筑巢"){
     this.router.push("/zhuchao");  
     }

  }

  render () {
    return (
        <div className="home_search">
          <table className="Table"> 
           <tbody>
            <tr>
              <td>
                <select className="selectCity" ref="City">
                  <option>选择您的城市</option>
                  <option>北京</option>
                  <option>上海</option>
                  <option>广州</option>
                  <option>长沙</option>
                </select>
              </td>
              <td>
                <select className="selectmodel" ref="model">
                  <option>模块</option>
                  <option>觅友</option>
                  <option>觅居</option>
                  <option>郊游</option>
                  <option>筑巢</option>
                </select>
              </td>
              <td>
                <input type="text" className="searchText" ref="Name" name="" placeholder="输入搜索名字"/>
              </td>
              <td className="searchButtonTd">         
               <input className="searchButton" type="button" name="" value="搜索" onClick={this.search}/>
              </td>
            </tr>
          </tbody>
          </table> 
        </div>
    );
  }
}
Home_Search.propTypes = {
  updateSearch: PropTypes.func.isRequired
};
Home_Search.contextTypes = {
router: PropTypes.object.isRequired
};
export default Home_Search;