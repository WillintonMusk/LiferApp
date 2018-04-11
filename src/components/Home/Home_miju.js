import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import NavLink from'../Miju/NavLink.js'
class Home_miju extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
     firstView: false,
      loading: false,
      houses:null,
      error: null
    };
  }
  componentWillMount()  {
    //let searchName = nextProps.searchName;

    //console.log('发送ajax请求', searchName);
    const url = 'http://test.712studio.cn:8000/miju/list';
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response.data.data)
        this.setState({ loading: false, houses: response.data.data })

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
      <div className="module_miju" >
        <table className="Table_miju">
         <tbody>
          <tr>
            <td className="miju_title" >
              <NavLink to="/miju/none/none">
                <h4>觅居</h4>
                <p>寻找优质的房源</p>
              </NavLink>
            </td>
            <td>
                  <div className="Home_miju_card">
                    {
                     this.state.houses.map((house) => {
                      const to = "/miju/"+house.id;
                      return(    
                          <NavLink to={to} key={house.id}>
                           <div className="Home_Miju_CardId">
                                  <div className="Home_Miju_ProfilePhoto">
                                    <img className="Home_Miju_displayPhoto"src={house.thumb} />                 
                                  </div>
                                  <div className="Home_Miju_imformation">
                                        <p  >#{house.price}元/月 #{house.room_style} #{house.rent_type}</p>
                                        <p  >#{house.room_facility}  #{house.location}</p>

                                    </div>
                            </div>
                            </NavLink>
                            )})
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

export default Home_miju;