import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import NavLink from'../Miju/NavLink.js'
class Home_zhuchao extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      firstView: false,
      loading: false,
      articles:null,
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

     

     display=()=>{
                        
                   if (this.state.firstView) {
                         return <h2>Enter name to search</h2>;
                    } else if (this.state.loading) {
                         return <h2>Loading result...</h2>;
                    } else if (this.state.error) {
                         return <h2>{this.state.error}</h2>;
                   } else {
                    
                    return (
                          <div className="Table_zhuchao_card">
                              {this.displayCard(1)}
                              {this.displayCard(2)}
                              {this.displayCard(3)}
                              {this.displayCard(4)}
                              {this.displayCard(5)}
                              {this.displayCard(6)}  
                          </div>
                        )}
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
      <div className="module_zhuchao">
        <table className="Table_zhuchao">
        <tbody>
          <tr>
            <td className="zhuchao_title">
             <NavLink to="/zhuchao">
                <h4>筑巢</h4>
                <p>打造温馨的小窝</p>
              </NavLink>
            </td>
            <td>
                <div className="Home_zhuchao_card">
                    {
                     this.state.articles.map((article) => (
                     <div className="Home_Zhuchao_content" key={article.post_id}>
                      <img className="Home_Zhuchao_photo_act" src="http://imgvar-1252845090.cosgz.myqcloud.com/timg.jpg" />
                      <div className="Home_Zhuchao_detail_act">
                        <h4>{article.post_name}</h4>
                        <p className="Home_p1">作者：{article.author}</p>
                      </div>
                    </div>    
            ))
                    }

                  </div>   
            </td>
            <td className="zhuchao_more">
               <NavLink to="/zhuchao"><h5>更多文章></h5></NavLink>
            </td>
          </tr>
         </tbody> 
        </table>
      </div>
    );
   }
  }
}

export default Home_zhuchao;