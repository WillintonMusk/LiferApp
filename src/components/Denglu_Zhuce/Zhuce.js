/**
 * Created by Administrator on 2018/3/6.
 */
import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import "./Zhuce.css"
import Tag from './Tag'
import Portrait from './Portrait'

class Zhuce extends Component {
    constructor (props, context) {
        super(props);
        this.router = context.router;
        this.state = {
            display_P: "none",
            display_T: "none"
        };
    }

    hide=(e)=>{
        if(e.target.className==="Dialog_Z"){
            this.props.setDialog("Dialog_Z", 0);
        }
    }

    setDialog=(name,display)=>{
        if(name=="Dialog_P"){
            if(display==0){
                this.setState({
                    display_P: "none"
                });
            }else if(display==1){
                this.setState({
                    display_P: "block",
                    display_T:"none"
                });
            }
        }else if(name=="Dialog_T"){
            if(display==0){
                this.setState({
                    display_T: "none"
                });
            }else if(display==1){
                this.setState({
                    display_T: "block",
                    display_P:"none"
                });
            }
        }
    }


    showList=()=>{

    }

    next=()=>{
        var account=this.refs.account.value.trim();

    }

    render(){
        var sWidth=document.documentElement.clientWidth;
        var sHeight=document.documentElement.clientHeight;
        return (
            <div className="Dialog_Z"  style={{display:this.props.display_Z,width:sWidth,height:sHeight}} onClick={(e)=>{this.hide(e)}}>
                <div className="contain_Z">
                    <p className="title_Z">注册</p>
                    <div className="left">
                        <div className="portrait" onClick={()=>this.setDialog("Dialog_P",1)}>
                            <p>单击此处上传头像</p>
                        </div>
                        <input type="text" name="account" ref="account" placeholder="   昵称" className="account"/><br/>
                        <input type="text" name="gender" ref="gender" placeholder="   性别" className="gender"/><br/>
                        <div className="tag" onClick={()=>this.setDialog("Dialog_T",1)}>
                            <p>单击此处添加个性标签</p>
                        </div>
                    </div>

                    <input type="text" name="tel" ref="tel" placeholder="   手机号" className="tel"/>
                    <input type="text" name="verification" ref="verification" placeholder="   验证码" className="verification"/>
                    <input type="button" name="get_ver" value="获取验证码" className="get_ver"/>
                    <p  className="agree"><input type="checkbox" name="agree" value="我同意服务条款"/>
                        <Link onClick={this.showList}>我同意服务条款</Link></p>
                    <input type="button" name="next" value="下一步" className="next" onClick={this.next}/>
                    <br/><Link className="login" onClick={()=>{this.props.setDialog("Dialog_D",1)}}>返回登录></Link>

                </div>

                <Portrait setDialog={this.setDialog} display_P={this.state.display_P}></Portrait>
                <Tag setDialog={this.setDialog} display_T={this.state.display_T}></Tag>

            </div>
        );
    }
}

Zhuce.contextTypes = {
    router:PropTypes.object.isRequired
};

Zhuce.propTypes = {
    setAccount:PropTypes.func.isRequired
};

Zhuce.propTypes = {
    setDialog:PropTypes.func.isRequired
};

export default Zhuce;//导出组件