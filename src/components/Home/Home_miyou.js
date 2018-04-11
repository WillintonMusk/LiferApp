import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import NavLink from'../Miju/NavLink.js'
class Home_miyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      firstView: false,
      loading: false,
      roommates:null,
      error: null
    };
  }
  componentWillMount()  {
    //let searchName = nextProps.searchName;

    //console.log('发送ajax请求', searchName);
    const url = 'http://test.712studio.cn:8000/miyou/list';
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response.data.data)
        this.setState({ loading: false, roommates: response.data.data })

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
      <div className="module_miyou" >
        <table className="Table_miyou">
         <tbody>
          <tr>
            <td className="miyou_title" >
              <NavLink to="/miyou">
                <h4>觅友</h4>
                <p>寻找合适的室友</p>
              </NavLink>
            </td>
            <td>
                  <div className="Home_miyou_card">
                    {
                     this.state.roommates.map((roommate) => (
                        <div className="Home_CardId" key={roommate._idcard}>
                            <img className="Home_ProfilePhoto" src={roommate.avatar}/>
                             <div className="Home_imformation">
                               <h4 className="Home_username">{roommate.name}</h4>
                                 <p >#{roommate.location}#宅男 IT 篮球 </p>
                                 <p >{roommate.want_rent_price}/月</p>
                     
                             </div>
                             
                        </div>
                      ))
                    }

                  </div> 
            </td>
            <td className="miyou_more" >
               <NavLink to="/miyou"><h5>更多室友></h5></NavLink>

            </td>
          </tr>
         </tbody> 
        </table>
      </div>
    );
    }
  }
}

export default Home_miyou;