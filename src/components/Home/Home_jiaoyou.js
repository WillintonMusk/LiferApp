import React, { Component, PropTypes } from 'react';
import axios from 'axios'
import NavLink from'../Miju/NavLink.js'
class Home_jiaoyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
     firstView: false,
      loading: false,
      activities:null,
      error: null
    };
  }
   componentWillMount()  {
    const url = 'http://test.712studio.cn:8000/jiaoyou/list';
      this.setState({ firstView: false, loading: true });
      axios.post(url)
          .then((response)=>{
              console.log(response.data.data)
              this.setState({ loading: false, activities: response.data.data })
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
      <div className="module_jiaoyou" >
        <table className="Table_jiaoyou">
         <tbody>
          <tr>
            <td className="jiaoyou_title" >
                <NavLink to="/jiaoyou">
                <h4>郊游</h4>
                <p>拓展我的社交圈</p>
                </NavLink>
            </td>
            <td>
                  <div className="Jiaoyou_card">
                    {
                      this.state.activities.map((activity) => {
                      const to="/Jiaoyou/:"+activity.id
                      return(
                        <NavLink to={to} key={activity.id}>
                        <div className="Home_jiaoyou_card">
                          <img className="Home_photo_act" src={activity.QR_code}/>
                          <div className="Home_detail_act">
                             <h5 >{activity.name}</h5>
                             <span>
                               <p>时间：{activity.time}</p>
                               <p>地点：{activity.location}</p>
                               <p>费用：{activity.price}</p>
                               <p>类型：{activity.type}</p>
                                <p>主办方：{activity.organizer}</p>
                              </span>
                          </div>
                        </div>
                        </NavLink>
            );})
                    }

                  </div> 
            </td>
            <td className="jiaoyou_more" >
               <NavLink to="/jiaoyou"><h5>更多活动></h5></NavLink>

            </td>
          </tr>
         </tbody> 
        </table>
      </div>
    );
    }
  }
  }


export default Home_jiaoyou;