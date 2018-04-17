/**
 * Created by Administrator on 2018/4/15.
 */
import React, { Component, PropTypes } from 'react';
import "./Tag.css"

class Tag extends Component {
    constructor (props, context) {
        super(props);
        this.router = context.router;
        this.state = {

        };
    }

    hide=(e)=>{
        // console.log(e.target.className);
        if(e.target.className==="Dialog_T"){
            this.props.setDialog("Dialog_T", 0);
        }
    }

    confirm=()=>{
        this.props.setDialog("Dialog_T", 0);
    }


    render(){
        // const display = this.props.display;
        var sWidth=document.documentElement.clientWidth;
        var sHeight=document.documentElement.clientHeight;
        return (
            <div className="Dialog_T"  style={{display:this.props.display_T,width:sWidth,height:sHeight}} onClick={(e)=>{this.hide(e)}}>
                <div className="contain_T">
                    <p className="title_T">已选</p>
                    <div className="left">
                        <div className="tag_ch">
                            <p> #IT #不吸烟 #早睡</p>
                            <p> #1500元/月 </p>
                        </div>
                        <input type="button" name="finish" value="完成" className="finish_T" onClick={this.confirm}/>
                    </div>

                    <div className="tag_un">
                        <p> #猫奴 #二次元 #不喝酒</p>
                        <p> #猫奴 #二次元 #不喝酒 </p>

                    </div>
                    <input type="text" name="addTag" ref="addTag" placeholder="   自定义" className="addTag"/>
                    <input type="button" name="add" value="添加" className="add"/>
                </div>
            </div>
        );
    }
}



export default Tag;//导出组件