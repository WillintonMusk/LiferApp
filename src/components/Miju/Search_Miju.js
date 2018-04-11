import React, { Component, PropTypes } from 'react';
import Issue_Miju from"./Issue_Miju";
import Issue_Miyou from "../Miyou/Issue_Miyou"
class Search_Miju extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state={
      user:null,
      show:"none",
      showMiyou:"none"
    };
  }
  componentWillMount(){
    this.setState({user:this.props.user});
  }


  search=()=>{
    var Name=this.refs.Name.value.trim();
    var City=this.refs.City.value;
    if(this.refs.zhengzu.checked){
      var zhengzu="整租";
    }
    else{
      var zhengzu="";
    }
    if(this.refs.danjian.checked){
      var danjian="单间";
    }
    else{
      var danjian="";
    }
    if(this.refs.xiaoqu.checked){
      var xiaoqu="1";
    }
    else{
      var xiaoqu="0";
    }
    if(this.refs.dianti.checked){
      var dianti="1";
    }
    else{
      var dianti="0";
    }
     if(this.refs.jingzhuangxiu.checked){
      var jingzhuangxiu="1";
    }
    else{
      var jingzhuangxiu="0";
    }
     if(this.refs.jingditie.checked){
      var jingditie="1";
    }
    else{
      var jingditie="0";
    }

    this.props.setSearch(Name,City,zhengzu,danjian,
    xiaoqu,dianti,jingzhuangxiu,jingditie);
  }


 issue_miju=()=>{
  var status=this.state.user.status;
  if(status==2){
      this.setState({
        show:"block"
      });
    }
    else if(status==1){
      alert("请实名认证");
    }
     else {
      alert("请登录");
    }
  }
  hide_issue=()=>{
      this.setState({
        show:"none"
      });
  }

 hide_Miyou_issue=()=>{
      this.setState({
        showMiyou:"none"
      });
  }
 display_issue_miyou=()=>{
      this.setState({
        showMiyou:"block"
      });
  }
  render () {
    return (
        <div className="contain">
        <Issue_Miju show={this.state.show} hide={this.hide_issue} display_miyou={this.display_issue_miyou} flag={"0"}/>
        <Issue_Miyou show={this.state.showMiyou} hide={this.hide_Miyou_issue} flag={"1"}/>
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
        <div className="release_miju" onClick={this.issue_miju}>发布房源信息</div>
        <br/>
        <div className="search_2">
          <span>更多选择筛选条件：</span>
          <input type="checkbox" name="" ref="zhengzu" value="zhengzu"/>整租
          <input type="checkbox" name="" ref="danjian" value="danjian"/>单间
          <input type="checkbox" name="" ref="xiaoqu" value="xiaoqu"/>小区
          <input type="checkbox" name="" ref="dianti" value="dianti"/>电梯
          <input type="checkbox" name="" ref="jingzhuangxiu" value="jingzhuangxiu"/>精装修
          <input type="checkbox" name="" ref="jingditie" value="jingditie"/>近地铁
        </div>
      </div>
    );
  }
}
Search_Miju.propTypes = {
  setSearch: PropTypes.func.isRequired
};

export default Search_Miju;