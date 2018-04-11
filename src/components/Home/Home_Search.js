import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'; 
class Home_Search extends Component {
  constructor (props, context) {
    super(props, context);
    // this.search = this.search.bind(this);
    this.router = context.router;
    this.state={
      search_Name:'',
      search_City:''
    };
  }

  search=()=>{
    var searchName=this.refs.Name.value.trim();
    var searchCity=this.refs.City.value;
    if(searchName===''){
      alert("输入您心仪的居住区域或小区名字");
      return
    }
     this.setState({
      search_Name:searchName,
      search_City:searchCity
     })
     this.router.push('/miju/'+searchName+'/'+searchCity);  
     
  }

  render () {
    return (
        <div className="home_search">
          <table className="Table"> 
            <tr>
              <td>
                <select className="selectCity" ref="City">
                  <option>城市</option>
                  <option>北京</option>
                  <option>上海</option>
                </select>
              </td>
              <td>
                <input type="text" className="searchText" ref="Name" name="" placeholder="输入您心仪的居住区域或小区名字"/>
              </td>
              <td className="searchButtonTd">         
               <input className="searchButton" type="button" name="" value="搜索" onClick={this.search}/>
              </td>
            </tr>
          </table>
        </div>
    );
  }
}
Home_Search.propTypes = {
  setSearch: PropTypes.func.isRequired
};
Home_Search.contextTypes = {
router: PropTypes.object.isRequired
};
export default Home_Search;