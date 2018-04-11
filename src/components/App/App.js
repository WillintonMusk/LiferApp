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
import React, { Component, PropTypes }from 'react';
import {Link} from 'react-router';
import './App.css';
import Denglu from '../Denglu_Zhuce/Denglu'

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state={
            userInfo:{"account":"","status":0,"avatar":""},
            display: "none"
        };
    }

    setTopBar=()=>{
        if(this.state.userInfo.status===0){
            return(<Link onClick={this.setDialog}>登录/注册</Link>);
        }else if(this.state.userInfo.status===1){
            return(<Link to="/Personal_page" activeClassName="active"><img className="avatar" src={this.state.userInfo.avatar}/></Link>);
        }
    }

    setAccount=(userInfo)=>{
        this.setState({
            userInfo:userInfo
        });
    }

    setDialog=()=>{
        if(this.state.display==="none"){
            this.setState({
                display: "block"
            });
        }else{
            this.setState({
                display: "none"
            });
        }
    }

    // displayChildren=()=>{
    //     if(this.props.children.type.name==="Denglu"){
    //         return(React.cloneElement(this.props.children,{setAccount:this.setAccount}));
    //     }else{
    //         return(this.props.children);
    //     }
    // }

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

            {/*{this.displayChildren()}*/}

            <Denglu setAccount={this.setAccount} setDialog={this.setDialog} display={this.state.display}/>
            {/*<Zhuce*/}
            {this.props.children}

        </div>
        );
    }
}
