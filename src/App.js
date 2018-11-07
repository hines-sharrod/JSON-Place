import React, { Component } from 'react';
import './css/App.scss';
import axios from 'axios';
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList';

class App extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
    userValue: ''
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data
        this.setState({users})
      });
  }

  handleChange = (e) => {
    this.setState({userValue: e.target.value})
  }

  render() {
    const {users, userValue} = this.state;

    let userOptions = users.map(user => {
      return <option key={user.id} value={user.name}>{user.name}</option>
    });

    return (
      <div className="App">
        <Header />
        <div className="headerImage"></div>
        <main className="main">
          <form className="user-select" onSubmit={this.handleSubmit}>
            <label>
              Select a User: &nbsp;
              <select value={userValue} onChange={this.handleChange}> 
                  {userOptions}
              </select>
            </label>
          </form>
          <PostList 
            // posts={}
          />
        </main>
        <aside className="sidebar">

        </aside>
      </div>
    );
  }
}

export default App;
