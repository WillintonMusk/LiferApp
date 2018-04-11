import React, { Component, PropTypes } from 'react';

class Issue_Miju extends React.Component{
    constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  issue=()=>{
    this.props.hide();
    var needShare=this.refs.needShare.checked;
    if(needShare){
     this.props.display_miyou();
    }
  }
  
  displayneedShare=()=>{
    if(this.props.flag==="0"){
    return(
      <tr>
          <td><input type="checkbox" ref="needShare"/>需要找人合租？</td>
          
        </tr>
      );
    }
  }
  render(){
          const show=this.props.show;
  	return(
  		<div id="issue_content" style={{marginLeft:"40%",display:show,width:400,height:500,border:"1px solid #000",position:"absolute",left:"1%",top:"40%",backgroundColor:"#9ff"}} >
  		<table  border="2" bordeColor="#000">
  		 <tbody>
  		   <tr>
  		      <td>状态：</td>
            <td>寻室友</td>
         </tr>
         <tr>
          <td>租赁方式：</td>
          <td><div style={{marginTop:5}}><span>合租</span></div></td>
         </tr>
  		   <tr>
  		    <td>标题：</td>
  		    <td><div style={{marginTop:5}}><input type="text"/></div></td>
  		   </tr>
         <tr> 
          <td>房间类型：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr>
         <tr> 
          <td>剩余房间：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr>
  		   <tr> 
  	     	<td>租金：</td>
  	     	<td><div style={{marginTop:5}}><input type="text"/></div></td>
  	       </tr>
         <tr>
          <td>面积：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr> 
  		   <tr>
		    	<td>省-市-区：</td>
  		    <td><div style={{marginTop:5}}><input type="text"/></div></td>
  		   </tr> 
         <tr>
          <td>具体位置：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr>            
         <tr>
          <td>联系人：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr>  
         <tr>
          <td>联系电话：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr> 
         <tr>
          <td>房源详情：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr>        
         <tr>
          <td>小区名：</td>
          <td><div style={{marginTop:5}}><input type="text"/></div></td>
         </tr>
         <tr>
          <td>房源图片：</td>
          <td><div style={{width:50,height:50,border:"1px solid #000",marginTop:5}}></div></td>
         </tr>
         <tr>
          {this.displayneedShare()}
          <td><div style={{marginLeft:"40%"}}><input type="button" value="发布" onClick={this.issue}/></div></td>
        </tr>
        
  		    
  		 </tbody>
  		</table>
  		</div>
  		);
  }


}
Issue_Miju.propTypes = {
  hide: PropTypes.func.isRequired
};
Issue_Miju.propTypes = {
  display_miyou: PropTypes.func.isRequired
};
export default Issue_Miju;