import React, { Component, PropTypes } from 'react';

class Search_Miyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  search=()=>{
    var Name=this.refs.Name.value.trim();
    if(Name===''){
      return
    }
    var City=this.refs.City.value;
    if(this.refs.man.checked){
      var Sex="man";
    }
    else{
      var Sex="woman";
    }
    if(this.refs.RejectPets.checked){
      var RejectPets="yes";
    }
    if(this.refs.RejectSmoking.checked){
      var RejectSmoking="yes";
    }
    if(this.refs.RejectNoise.checked){
      var RejectNoise="yes";
    }

    this.props.setSearch(Name,City,Sex,RejectPets,
    RejectSmoking,RejectNoise);
  }

  render () {
    return (
        <div className="contain">
        <div className="search_1">
          <p className="search_title">寻找您的理想室友></p>
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
        <br/>
        <div className="search_2">
          <span>更多选择筛选条件：</span>
          <input type="radio" name="sex" ref="man" value="man"/>男生
          <input type="radio" name="sex" ref="woman" value="woman"/>女生 
          <input type="checkbox" name="" ref="RejectPets" value="NoPets"/>拒绝宠物
          <input type="checkbox" name="" ref="RejectSmoking" value="NoSmoking"/>拒绝吸烟
          <input type="checkbox" name="" ref="RejectNoise" value="Noloud"/>拒绝吵闹
        </div>
      </div>
    );
  }
}
Search_Miyou.propTypes = {
  setSearch: PropTypes.func.isRequired
};

export default Search_Miyou;