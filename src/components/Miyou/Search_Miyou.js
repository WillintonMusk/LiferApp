import React, { Component, PropTypes } from 'react';
import Issue_Miyou from"./Issue_Miyou";
import Issue_Miju from "../Miju/Issue_Miju"
class Search_Miyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state={
      show:"none",
      showMiju:"none"
    };
  }

  search=()=>{
    var Name=this.refs.Name.value.trim();

    var City=this.refs.City.value;
    if((!this.refs.man.checked)&&(!this.refs.woman.checked)){
    alert("请选择性别！");
    return;
    }
    if(this.refs.man.checked){
      var Sex="0";
    }
    else{
      var Sex="1";
    }
    if(this.refs.RejectPets.checked){
      var RejectPets="1";
    }
    else{
      var RejectPets="0";
    }
    if(this.refs.RejectSmoking.checked){
      var RejectSmoking="1";
    }
    else{
      var RejectSmoking="0";
    }
    if(this.refs.RejectNoise.checked){
      var RejectNoise="1";
    }
    else{
      var RejectNoise="0";
    }

    this.props.setSearch(Name,City,Sex,RejectPets,
    RejectSmoking,RejectNoise);
  }

  issue_miyou=()=>{
      this.setState({
        show:"block"
      });
  }
  hide_issue=()=>{
      this.setState({
        show:"none"
      });
  }
  hide_Miju_issue=()=>{
      this.setState({
        showMiju:"none"
      });
  }
 display_Miju_issue=()=>{
      this.setState({
        showMiju:"block"
      });
  }
  render () {
    return (
        <div className="contain">
        <Issue_Miyou show={this.state.show} hide={this.hide_issue} display_Miju={this.display_Miju_issue} flag={"0"}/>
        <Issue_Miju show={this.state.showMiju} hide={this.hide_Miju_issue} flag={"1"}/>
        <div className="search_1">
          <p className="search_title">寻找您的理想室友></p>
          <table className="Table"> 
           <tbody>
            <tr>
              <td>
                <select className="selectCity" ref="City">
                  <option>城市</option>
                  <option>北京</option>
                  <option>上海</option>
                  <option>长沙</option>
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
        <div className="release_miyou" onClick={this.issue_miyou}>发布觅友信息</div>
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