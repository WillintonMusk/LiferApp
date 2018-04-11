import React, { Component, PropTypes } from 'react';
import '../Search.css';
import ZhuchaoList from './ZhuchaoList'
class Zhuchao extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  render () {
    return (
      <div>
        <hr calssName="topline" style={{marginTop:180, 
          height:1, border:"none", borderTop:"1px solid lightgrey"}}/>
          <ZhuchaoList />
      </div>
    );
  }
}

export default Zhuchao;