/**
 * Created by Administrator on 2018/4/15.
 */
import React, { Component, PropTypes } from 'react';
import "./Portrait.css"

class Portrait extends Component {
    constructor (props, context) {
        super(props);
        this.router = context.router;
        this.state = {

        };
    }

    hide=(e)=>{
        // console.log(e.target.className);
        if(e.target.className==="Dialog_P"){
            this.props.setDialog("Dialog_P", 0);
        }
    }

    confirm=()=>{
        this.props.setDialog("Dialog_P", 0);
    }


    render(){
        // const display = this.props.display;
        var sWidth=document.documentElement.clientWidth;
        var sHeight=document.documentElement.clientHeight;
        return (
            <div className="Dialog_P"  style={{display:this.props.display_P,width:sWidth,height:sHeight}} onClick={(e)=>{this.hide(e)}}>
                <div className="contain_P">
                    <p className="title_P">预览</p>
                    <div className="left">
                        <div className="pre_photo">
                            <img className="img" src="https://avatars3.githubusercontent.com/u/20676205?v=4"/>
                        </div>
                        <input type="button" name="finish" value="完成" className="finish_P" onClick={this.confirm}/>
                    </div>

                    <div className="adjust">

                    </div>

                </div>
            </div>
        );
    }
}

Portrait.propTypes = {
    setDialog:PropTypes.func.isRequired
};

export default Portrait;//导出组件