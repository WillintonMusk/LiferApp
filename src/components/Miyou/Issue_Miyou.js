import React, { Component, PropTypes } from 'react';
class Issue_Miyou extends React.Component{
    constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  issue=()=>{
    this.props.hide();
    var isRent=this.refs.isRent.checked;
    if(isRent){
     this.props.display_Miju();
    }
  }

  displayisRent=()=>{
    if(this.props.flag==="0"){
      return(<td><input type="checkbox" ref="isRent" />已租房？</td>);
    }
  }

  render(){
          const show=this.props.show;
  	return(
  		<div id="issue_content" style={{marginLeft:"40%",display:show,width:400,height:300,border:"1px solid #000",position:"absolute",left:"1%",top:"40%",backgroundColor:"#9ff"}} >
  		<table  border="2" bordeColor="#000">
  		 <tbody>
  		   <tr>
  		    <td>状态：</td>
          <td>未租住</td>
  		   </tr>
  		   <tr>
  		    <td>tag:</td>
  		    <td><div style={{marginTop:10}}><input type="text"/></div></td>
  		   </tr>
  		   <tr> 
  	     	<td>理想租金：</td>
  	     	<td><div style={{marginTop:10}}><input type="text"/></div></td>
  	       </tr>
  	       <tr>	
  		    <td>所在区域：</td>
  		    <td><div style={{marginTop:10}}><input type="text"/></div></td>
  		   </tr>
  		   <tr> 
  		    <td>所在沿线：</td>
  		    <td><div style={{marginTop:10}}><input type="text"/></div></td>
  		   </tr> 
  		   <tr>
		    	<td>简介：</td>
  		    <td><div style={{marginTop:10}}><textarea rows="3" cols="30"/></div></td>
  		   </tr>   
  		   <tr>
  		    {this.displayisRent()}
  		    <td><div style={{marginTop:10,marginLeft:"40%"}}><input type="button" value="发布" onClick={this.issue}/></div></td>
  		   </tr> 
  		 </tbody>
  		</table>
  		</div>
  		);
  }


}
Issue_Miyou.propTypes = {
  hide: PropTypes.func.isRequired
};
Issue_Miyou.propTypes = {
  display_Miju: PropTypes.func.isRequired
};
export default Issue_Miyou;