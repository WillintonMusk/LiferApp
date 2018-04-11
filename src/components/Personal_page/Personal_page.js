import React, { Component, PropTypes } from 'react';
class Personal_page extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
 }
  render () {
    return (
    <div style={{textAlign:"center"}}>
      <div >
      昵称：
      <br/>
      生活家等级：
      <br/>
      手机号：（可修改绑定）
      <h4>我的收藏：</h4>
      <h4>我的室友信息：</h4>（可修改删除）
      <h4>我的房源信息：</h4>（可修改删除）
      <h4>我的文章：</h4>（可修改删除）
      </div>
    </div>
    );
  }
}

export default Personal_page;