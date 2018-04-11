/**
 * Created by Administrator on 2018/3/6.
 */
import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import "./Zhuce.css"

class Zhuce extends Component {
    constructor (props) {
        super(props);
    }

    login=()=>{
        var account=this.refs.account.value.trim();
        var password=this.refs.password.value;
    }

    render () {
        return (
            <div className="contain_Z">
                <p className="title_Z">注册</p>
                <input type="text" name="account" ref="account" placeholder="   账号" className="input_Z"/><br/>
                <input type="password" name="password" ref="password" placeholder="   密码" className="input_Z"/><br/>
                <input type="text" name="verification" ref="verification" placeholder="   验证码" className="input_Z"/><br/>
                <input type="button" name="login" value="注册" className="button_Z" onClick={this.login}/>
                <p className="login"><Link to="/Denglu&Zhuce" activeClassName="active">返回登录></Link></p>
            </div>
        );
    }
}

export default Zhuce;//导出组件