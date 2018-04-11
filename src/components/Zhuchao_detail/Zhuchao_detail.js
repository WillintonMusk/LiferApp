import React, { Component, PropTypes } from 'react';
import axios from 'axios';
class Zhuchao_detail extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
      this.state={
       article: '',
       firstView: false,
       loading: false,
       error: null,
    };
  }

componentWillMount(){
  var id=this.props.params.id;
   const url = 'http://test.712studio.cn:8000/zhuchao/detail?postid='+id;
    this.setState({ firstView: false, loading: true });
    axios.post(url)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ loading: false, article: response.data.data})

      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
}


render () {
    return (
  <div className="myContent">
    <table className="mytable" >
      <tbody>
      <tr>
        <td>
          <div className="basicImformation">
             <div className="mydisplayPhoto" >
                <img src="http://imgvar-1252845090.cosgz.myqcloud.com/timg.jpg"/>
             </div>
             <div className="imformation" >
                  <h3 className="title">{this.state.article.post_name}</h3>
                  <p>作者：{this.state.article.author} </p>
                  <p>摘要：{this.state.article.excerpt}</p>
                  <p>被浏览：{this.state.article.page_views}</p>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="community">
            <div>
              <p>{this.state.article.content}</p>
            </div>
          
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
    );
  }
}

export default Zhuchao_detail;