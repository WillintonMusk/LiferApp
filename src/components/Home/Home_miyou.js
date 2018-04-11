import React, { Component, PropTypes } from 'react';
import axios from 'axios'
class Home_miyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      loading: true,
      users: null,
      error: null
    };
  }
   componentWillMount(){

    const url = 'https://api.github.com/search/users?q=y';
    
    axios.get(url)
      .then((response) => {
        console.log("发送ajax成功")
        this.setState({ loading: false, users: response.data.items })
      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
   }

     displayCard=(index)=>{
                 
                    return(
                      <div className="miyou_card">
                      <img src={this.state.users[index].avatar_url} style={{width: '100px',height:'40px'}}/>
                      <p className="miyou_card_text">{this.state.users[index].login}</p>
                      </div>);
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
                          <div className="Table_miyou_card">
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
    return (
      <div className="module_miyou" >
        <table className="Table_miyou">
          <tr>
            <td className="miyou_title" >
    
                <h4>觅友</h4>
                <p>寻找合适的室友</p>
            </td>
            <td>
                {this.display()}  
            </td>
            <td className="miyou_more" >
               <h5>更多室友></h5>

            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Home_miyou;