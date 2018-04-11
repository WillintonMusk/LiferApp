import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import "./Denglu.css"

class Denglu extends Component {
    constructor (props, context) {
        super(props);
        this.router = context.router;
        this.state = {
            userInfo:{"account":"willinton","password":"willinton","status":2,
                "avatar":"https://avatars3.githubusercontent.com/u/20676205?v=4"
            },
            bgColor:"rgba(102,102,102,0.5)"
        };
    }

    hide=(e)=>{
        console.log(e.target);
        console.log(e.target.style);

        console.log("eeeeeeee");
        if(e.target.style.backgroundColor==="rgba(102,102,102,0.5)"){

        }
    }

    login=()=>{
        let account=this.refs.account.value.trim();
        let password=this.refs.password.value;

        if(account==""){
            alert("请输入账号！");
            this.refs.account.focus();
            return;
        }else if(password==""){
            alert("请输入密码！");
            this.refs.password.focus();
            return
        }
        if(account==this.state.userInfo.account&&password==this.state.userInfo.password){
            let userInfo={"account":this.state.userInfo.account,
                "status":this.state.userInfo.status,
                "avatar":this.state.userInfo.avatar};
            this.props.setAccount(userInfo);
            this.router.push('/');
        }else{
            alert("用户名或密码错误！");
            this.refs.account.focus();
            return
        }

        this.props.setDialog();
        console.log("发送ajax登录请求",account,password);

    }


  render () {
      // const display = this.props.display;
      var sWidth=document.documentElement.clientWidth;
      var sHeight=document.documentElement.clientHeight;
      return (
          <div className="Dialog_D"  style={{display:this.props.display,width:sWidth,height:sHeight}} onClick={(e)=>{this.hide(e)}}>
              <div className="contain_D">
                  <p className="title_D">生·活·家</p>
                  <input type="text" name="account" ref="account" placeholder="   账号" className="input_D"/><br/>
                  <input type="password" name="password" ref="password" placeholder="   密码" className="input_D"/><br/>
                  <input type="button" name="login" value="登录" className="button_D" onClick={this.login}/>
                  <p className="register"><Link to="/Zhuce" activeClassName="active">用户注册></Link></p>

              </div>
          </div>
      );
  }
}

Denglu.contextTypes = {
    router:PropTypes.object.isRequired
};

Denglu.propTypes = {
    setAccount:PropTypes.func.isRequired
};

Denglu.propTypes = {
    setDialog:PropTypes.func.isRequired
};

export default Denglu;//导出组件