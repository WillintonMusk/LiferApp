import React, { Component } from 'react';
import Search_Miju from './Search_Miju';
import '../Search.css';
import MijuList from './MijuList'
class Miju extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      user:null,
      search_Name:'',
      search_City:'',
      search_zhengzu:'',
      search_danjian:'',
      search_xiaoqu:'',
      search_dianti:'',
      search_jingzhuangxiu:'',
      search_jingditie:''
    };
  }
   
   componentWillMount(){
    this.setState({user:this.props.user});
     var searchName=this.props.params.searchName;
     var searchCity=this.props.params.searchCity;
     if (searchName==="none"&&searchCity==="none"){
      return
     }
     this.setState({
      search_Name:searchName,
      search_City:searchCity
     });
   }

    setSearch=(Name,City,zhengzu,danjian,
    xiaoqu,dianti,jingzhuangxiu,jingditie)=>{

        this.setState({
          search_Name:Name,
          search_City:City,
          search_zhengzu:zhengzu,
          search_danjian:danjian,
          search_xiaoqu:xiaoqu,
          search_dianti:dianti,
          search_jingzhuangxiu:jingzhuangxiu,
          search_jingditie:jingditie
});
  }

  render () {
    return (
      <div>
        <Search_Miju setSearch={this.setSearch} user={this.state.user}/>
        <MijuList searchName={this.state.search_Name} searchCity={this.state.search_City} searchZhengzu={this.state.search_zhengzu} searchDanjian={this.state.search_danjian}
        is_community={this.state.search_xiaoqu} elevator={this.state.search_dianti} fine_decoration={this.state.search_jingzhuangxiu}
        subway={this.state.search_jingditie}/>
      </div>
    );
  }
}

export default Miju;