import React, { Component } from 'react';
import '../Search.css';
import ZhuchaoList from './ZhuchaoList'
class Zhuchao extends Component {

  render () {
    return (
      <div>
        <hr calssName="topline" style={{marginTop:100, 
          height:1, border:"none", borderTop:"1px solid lightgrey"}}/>
          <ZhuchaoList />
      </div>
    );
  }
}

export default Zhuchao;