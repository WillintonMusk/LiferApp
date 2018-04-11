import React, { Component, PropTypes } from 'react';
import Search_Miyou from './Search_Miyou';
import '../Search.css';
import MiyouList from './MiyouList'
class Miyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      search_Name:'',
      search_City:'',
      search_Sex:'',
      search_RejectPets:'',
      search_RejectSmoking:'',
      search_RejectNoise:''
    };
  }

  setSearch=(Name,City,Sex,RejectPets,
    RejectSmoking,RejectNoise)=>{

        this.setState({
          search_Name:Name,
          search_City:City,
          search_Sex:Sex,
          search_RejectPets:RejectPets,
          search_RejectSmoking:RejectSmoking,
          search_RejectNoise:RejectNoise
});
  }

  render () {
    return (
      <div>
        <Search_Miyou setSearch={this.setSearch}/>
        <MiyouList searchName={this.state.search_Name}/>
      </div>
    );
  }
}

export default Miyou;