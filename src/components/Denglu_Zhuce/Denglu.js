import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import "./Denglu.css"

class Denglu extends Component {
    constructor (props, context) {
        super(props);
        this.router = context.router;
        this.state = {
            userInfo:{"account":"willinton","password":"willinton","status":2,
                "avatar":"https://avatars3.githubusercontent.com/u/20676205?v=4"
            },
            firstView: false,
            loading: false,
            activities:null,
            error: null
        };
    }

    hide=(e)=>{
        // console.log(e.target.className);
        if(e.target.className==="Dialog_D"){
            this.props.setDialog("Dialog_D", 0);
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

        var url = "shenghuojia.studio712.cn/server/users/login";
        var params = {tel:account,password:password};
        this.setState({ firstView: false, loading: true });
        axios.get(url,params)
            .then((response)=>{
                console.log(response.data.data)
                this.setState({ loading: false, activities: response.data.data })
            })
            .catch((error)=>{
                console.log(error)
                this.setState({ loading: false, error: error.toString() })
            })



        if(account==this.state.userInfo.account&&password==this.state.userInfo.password){
            let userInfo={"account":this.state.userInfo.account,
                "status":this.state.userInfo.status,
                "avatar":this.state.userInfo.avatar};
            this.props.setAccount(userInfo);
            // this.router.push('/');
        }else{
            alert("用户名或密码错误！");
            this.refs.account.focus();
            return
        }






        this.props.setDialog("Dialog_D", 0);
        console.log("发送ajax登录请求",account,password);

    }


  render(){
      // const display = this.props.display;
      var sWidth=document.documentElement.clientWidth;
      var sHeight=document.documentElement.clientHeight;
      return (
          <div className="Dialog_D"  style={{display:this.props.display_D,width:sWidth,height:sHeight}} onClick={(e)=>{this.hide(e)}}>
              <div className="contain_D">
                  <p className="title_D">生·活·家</p>
                  <input type="text" name="account" ref="account" placeholder="   手机号" className="input_D"/><br/>
                  <input type="password" name="password" ref="password" placeholder="   密码" className="input_D"/><br/>
                  <input type="button" name="login" value="登录" className="button_D" onClick={this.login}/>
                  <p className="register"><Link onClick={()=>{this.props.setDialog("Dialog_Z",1)}}>用户注册></Link></p>
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