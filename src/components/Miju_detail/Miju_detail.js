import React, { Component, PropTypes } from 'react';
import Detail_display from './detail_display';
class Miju_detail extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  render () {
    return (
      <div>
        <h1>{this.props.params.id}详情</h1>
         <Detail_display searchName={this.props.params.id}/>
      </div>
    );
  }
}

export default Miju_detail;