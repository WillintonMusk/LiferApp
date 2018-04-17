/**
 * Created by xfzhang on 2016/11/27.
 * 应用主组件
  <div>
        <h2>Hello, React Router!</h2>
        <ul>
          <li><Link to="/about" activeClassName="active">About2</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos2</Link></li>
        </ul>
        {this.props.children}
      </div>
 */
import React, {Component, PropTypes }from 'react';
import {Link} from 'react-router';
import './App.css';
import Denglu from '../Denglu_Zhuce/Denglu'
import Zhuce from '../Denglu_Zhuce/Zhuce'

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            userInfo:{"account":"","status":0,"avatar":""},
            display_D: "none",
            display_Z: "none",
            error:"",
            socket:"",
            searchName:"",
            searchCity:""
        };
    }

    setTopBar=()=>{
        if(this.state.userInfo.status===0){
            return(<Link onClick={()=>{this.setDialog("Dialog_D",1)}}>登录/注册|</Link>);
        }
        else if(this.state.userInfo.status===1){
            return(<Link to="/Personal_page" ><img className="avatar" src={this.state.userInfo.avatar}/></Link>);
        }
        else{
            return(<Link to="/Personal_page" ><img className="avatar" src={this.state.userInfo.avatar}/></Link>);
        }
    }

    setDialog=(name,display)=>{
        if(name=="Dialog_D"){
            if(display==0){
                this.setState({
                    display_D: "none"
                });
            }else if(display==1){
                this.setState({
                    display_D: "block",
                    display_Z:"none"
                });
            }
        }else if(name=="Dialog_Z"){
            if(display==0){
                this.setState({
                    display_Z: "none"
                });
            }else if(display==1){
                this.setState({
                    display_Z: "block",
                    display_D:"none"
                });
            }
        }

    }

    setAccount=(userInfo)=>{
        this.setState({
            userInfo:userInfo
        });
    }

    displayChildren=()=>{
        if(this.props.children.type.name==="Miju"){
            return(React.cloneElement(this.props.children, {user: this.state.userInfo}));
        }
        else if(this.props.children.type.name==="Miyou"){
            return(React.cloneElement(this.props.children, {searchName:this.state.searchName,searchCity:this.state.searchCity}));
        }
        else if(this.props.children.type.name==="Home"){
            return(React.cloneElement(this.props.children, {updateSearch: this.updateSearch}));
        }
        else if(this.props.children.type.name==="Jiaoyou"){
            return(React.cloneElement(this.props.children, {searchName:this.state.searchName,searchCity:this.state.searchCity}));
        }
        else{
            return(this.props.children);
        }
    }

    updateSearch=(newsearchCity,newsearchName)=>{
        this.setState({
            searchCity:newsearchCity,
            searchName:newsearchName
        });
    }

    render(){
        return(
        <div>
            <div className="TopBar" >
                <Link to="/" activeClassName="logo" >生·活·家</Link>
                <div className="activeTable">

                    {this.setTopBar()}

                    &nbsp;|&nbsp;<Link to="/Miyou" activeClassName="active">觅友</Link> |&nbsp;
                    <Link to="/Miju/none/none" activeClassName="active">觅居</Link> |&nbsp;
                    <Link to="/Jiaoyou" activeClassName="active">郊游</Link> |&nbsp;
                    <Link to="/Zhuchao" activeClassName="active">筑巢</Link>
                </div>
            </div>

            <Denglu setDialog={this.setDialog} setAccount={this.setAccount} display_D={this.state.display_D}/>
            <Zhuce setDialog={this.setDialog} setAccount={this.setAccount} display_Z={this.state.display_Z}/>

            {this.displayChildren()}

        </div>
        );
    }
}
