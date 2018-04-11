import React, { Component ,PropTypes} from 'react';
import Home_Search from './Home_Search';
import Home_miju from './Home_miju';
import Home_miyou from './Home_miyou';
import Home_jiaoyou from './Home_jiaoyou';
import Home_zhuchao from './Home_zhuchao';
import '../Search.css';

class Home extends Component {

  render () {
    return (
      <div>
        <Home_Search updateSearch={this.props.updateSearch}/>
        <div className="moduleTable">   
            <Home_miyou/>
            <Home_miju/>
            <Home_jiaoyou/>
            <Home_zhuchao/>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  updateSearch: PropTypes.func.isRequired
};
export default Home;