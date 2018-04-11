/**
 * 上部的搜索模块
 *
import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  search = () => {
    var name = this.nameInput.value;
    this.props.refreshName(name);
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="enter the name you search"
               ref={(input=>this.nameInput = input)}/>
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}
Search.propTypes = {
  refreshName: PropTypes.func.isRequired
};

export default Search;
*/
import React, { Component, PropTypes } from 'react';

class Search extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  render () {
    return (
        <div className="contain">
        <div className="search_1">
          <p className="search_title">寻找您的理想室友></p>
          <table className="Table"> 
            <tr>
              <td>
                <select className="selectCity">
                    <option>城市</option>
                  <option>北京</option>
                  <option>上海</option>
                </select>
              </td>
              <td>
                <input type="text" className="searchText" name="" placeholder="输入您心仪的居住区域或小区名字"/>
              </td>
              <td className="searchButtonTd">
                <input className="searchButton" type="button" name="" value="搜索"/>
              </td>
            </tr>
          </table>
        </div>
        <br/>
        <div className="search_2">
          <span>更多选择筛选条件：</span>
          <input type="checkbox" name="" value="man"/>男生
          <input type="checkbox" name="" value="woman"/>女生
          <input type="checkbox" name="" value="NoPets"/>拒绝宠物
          <input type="checkbox" name="" value="NoSmoking"/>拒绝吸烟
          <input type="checkbox" name="" value="Noloud"/>拒绝吵闹
        </div>
      </div>
    );
  }
}

export default Search;