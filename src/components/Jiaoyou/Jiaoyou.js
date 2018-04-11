import React, { Component, PropTypes } from 'react';
import Search_Jiaoyou from './Search_Jiaoyou';
import '../Search.css';
import JiaoyouList from './JiaoyouList'

class Jiaoyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      search_Name:'',
      search_City:'',
      search_party:'',
      search_perform:'',
      search_exhibition:'',
      search_experience:''
    };
  }

   setSearch=(Name,City,party,perform,
    exhibition,experience)=>{

        this.setState({
          search_Name:Name,
          search_City:City,
          search_party:party,
          search_perform:perform,
          search_exhibition:exhibition,
          search_experience:experience
        });
  }

  render () {
    return (
      <div>
        <Search_Jiaoyou setSearch={this.setSearch}/>
        <JiaoyouList searchName={this.state.search_Name}/>
      </div>
    );
  }
}

export default Jiaoyou;