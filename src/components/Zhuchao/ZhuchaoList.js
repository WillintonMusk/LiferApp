import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import NavLink from'../Miju/NavLink.js';
import "./ZhuchaoList.css"


class ZhuchaoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      articles: null,
      error: null
    };
  }
 componentWillMount()  {

    const url = 'http://test.712studio.cn:8000/zhuchao/list?offset=0&limit=5';
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response.data.data)
        this.setState({ loading: false, articles: response.data.data })

      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
    
  }
  render () {

    if (this.state.firstView) {
      return <h2>Enter name to search</h2>;
    } else if (this.state.loading) {
      return <h2>Loading result...</h2>;
    } else if (this.state.error) {
      return <h2>{this.state.error}</h2>;
    } else {
      return (
        <div className="row">
          {
            this.state.articles.map((article) => {
              const to = "/zhuchao/"+article.post_id;
              return(
              <NavLink to={to} key={article.post_id}>
              <div className="Zhuchao_content">
                    <img className="Zhuchao_photo_act" src="http://imgvar-1252845090.cosgz.myqcloud.com/timg.jpg" />
                    <div className="Zhuchao_detail_act">
                        <h3>{article.post_name}</h3>
                        <p className="p1">作者：{article.author}</p>
                        <p className="p2">{article.excerpt}</p>
                        <p>被浏览：{article.page_views}</p>
                        <p>最近更新{article.update_time}</p>
                    </div>
              </div>   
              </NavLink>  
            );})
          }
         
        </div>
      );
    }
  }
}

export default ZhuchaoList;
