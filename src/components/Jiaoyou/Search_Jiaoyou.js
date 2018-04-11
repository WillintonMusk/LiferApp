import React, { Component, PropTypes } from 'react';

class Search_Jiaoyou extends Component {
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
    if(this.refs.party.checked){
      var party="yes";
    }
    if(this.refs.perform.checked){
      var perform="yes";
    }
    if(this.refs.exhibition.checked){
      var exhibition="yes";
    }
    if(this.refs.experience.checked){
      var experience="yes";
    }

    this.props.setSearch(Name,City,party,perform,
    exhibition,experience);
  }

  render () {
    return (
        <div>
        <div className="search_1">
          <p className="search_title">寻找您的理想活动></p>
          <table className="Table">
              <tbody>
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
              </tbody>
          </table>
        </div>
        <br/>
        <div className="search_2">
          <span>更多选择筛选条件：</span>
            <input type="checkbox" name="party" ref="party" value="聚会"/>聚会
            <input type="checkbox" name="perform" ref="perform" value="演出"/>演出
            <input type="checkbox" name="exhibition" ref="exhibition" value="展览"/>展览
            <input type="checkbox" name="experience" ref="experience" value="体验课"/>体验课
        </div>
      </div>
    );
  }
}

Search_Jiaoyou.propTypes = {
  setSearch: PropTypes.func.isRequired
};

export default Search_Jiaoyou;