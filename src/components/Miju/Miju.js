import React, { Component, PropTypes } from 'react';
import Search_Miju from './Search_Miju';
import '../Search.css';
import MijuList from './MijuList'
class Miju extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      search_Name:'',
      search_City:'',
      search_zhengzu:'',
      search_danjian:'',
      search_xiaoqu:'',
      search_dianti:'',
      search_jingzhuangxiu:'',
      search_jingdianti:''
    };
  }
   
   componentWillMount(){
     var searchName=this.props.params.searchName;
     var searchCity=this.props.params.searchCity;
     if (searchName=="none"&&searchCity=="none"){
      return
     }
     this.setState({
      search_Name:searchName,
      search_City:searchCity
     });
   }

    setSearch=(Name,City,zhengzu,danjian,
    xiaoqu,dianti,jingzhuangxiu,jingdianti)=>{

        this.setState({
          search_Name:Name,
          search_City:City,
          search_zhengzu:zhengzu,
          search_danjian:danjian,
          search_xiaoqu:xiaoqu,
          search_dianti:dianti,
          search_jingzhuangxiu:jingzhuangxiu,
          search_jingdianti:jingdianti
});
  }

  render () {
    return (
      <div>
        <Search_Miju setSearch={this.setSearch}/>
        <MijuList searchName={this.state.search_Name}/>
      </div>
    );
  }
}

export default Miju;