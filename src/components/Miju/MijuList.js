import React, { Component, PropTypes } from 'react';
import ajax from '../../utils/ajax';
import axios from 'axios'
import NavLink from'./NavLink.js'
class MijuList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: true,
      loading: false,
      users: null,
      error: null
    };
  }

  componentWillReceiveProps(nextProps)  {
    let searchName = nextProps.searchName;
    if(searchName!=''){
    console.log('发送ajax请求', searchName);
    const url = `https://api.github.com/search/users?q=${searchName}`;
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ loading: false, users: response.data.items })
      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
    }
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
            this.state.users.map((user) => {
              const to = '/miju/'+user.login
              return(
              <div className="card" key={user.html_url}>
                 <NavLink to={to}>
                  <img src={user.avatar_url} style={{width: '100px'}}/>
                 </NavLink>
                <p className="card-text">{user.login}</p>
              </div>
            )})
          }
        </div>
      );
    }
  }
}
MijuList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default MijuList;