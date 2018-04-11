import React, { Component, PropTypes } from 'react';

class Search_Miju extends Component {
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
    if(this.refs.zhengzu.checked){
      var zhengzu="yes";
    }
    if(this.refs.danjian.checked){
      var danjian="yes";
    }
    if(this.refs.xiaoqu.checked){
      var xiaoqu="yes";
    }
    if(this.refs.dianti.checked){
      var dianti="yes";
    }
     if(this.refs.jingzhuangxiu.checked){
      var jingzhuangxiu="yes";
    }
     if(this.refs.jingdianti.checked){
      var jingdianti="yes";
    }

    this.props.setSearch(Name,City,zhengzu,danjian,
    xiaoqu,dianti,jingzhuangxiu,jingdianti);
  }

  render () {
    return (
        <div className="contain">
        <div className="search_1">
          <p className="search_title">寻找您的理想房源></p>
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
          <input type="checkbox" name="" ref="zhengzu" value="zhengzu"/>整租
          <input type="checkbox" name="" ref="danjian" value="danjian"/>单间
          <input type="checkbox" name="" ref="xiaoqu" value="xiaoqu"/>小区
          <input type="checkbox" name="" ref="dianti" value="dianti"/>电梯
          <input type="checkbox" name="" ref="jingzhuangxiu" value="jingzhuangxiu"/>精装修
          <input type="checkbox" name="" ref="jingdianti" value="jingdianti"/>近电梯
        </div>
      </div>
    );
  }
}
Search_Miju.propTypes = {
  setSearch: PropTypes.func.isRequired
};

export default Search_Miju;