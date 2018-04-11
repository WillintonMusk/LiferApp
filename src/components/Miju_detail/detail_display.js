import React, { Component, PropTypes } from 'react';
import ajax from '../../utils/ajax';
import axios from 'axios'

class Detail_display extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: true,
      loading: false,
      users: null,
      error: null
    };
  }

  componentWillMount()  {
    var searchName=this.props.searchName;
    console.log('发送ajax请求',searchName);
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
            this.state.users.map((user) => (
              <div className="card" key={user.html_url}>
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            ))
          }
        </div>
      );
    }
  }
}
Detail_display.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default Detail_display;