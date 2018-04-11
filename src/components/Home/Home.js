import React, { Component, PropTypes } from 'react';
import Home_Search from './Home_Search';
import Home_miju from './Home_miju';
import Home_miyou from './Home_miyou';
import Home_jiaoyou from './Home_jiaoyou';
import Home_zhuchao from './Home_zhuchao';
import '../Search.css';

class Home extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  render () {
    return (
      <div>
        <Home_Search/>
        <div className="moduleTable" >   
            <Home_miyou/>
        </div>
      </div>
    );
  }
}

export default Home;