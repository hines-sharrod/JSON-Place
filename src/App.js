import React, { Component } from 'react';
import './css/App.scss';
import axios from 'axios';
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList';
import UserDetails from './components/UserDetails/UserDetails';

class App extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
    userValue: 'Leanne Graham'
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data
        this.setState({users})
      });
  }

  handleChange = (e) => {
    // const updatedUserValue = e.target.value;
    this.setState({userValue: e.target.value})
  }

  render() {
    const {users, userValue} = this.state;

    const userOptions = users.map(user => {
      return <option key={user.id} value={user.name}>{user.name}</option>
    });

    const userSelected = users.find(user => user.name === userValue);

    let userSelectedDetails = null;

    if (userSelected) {
      userSelectedDetails = (
        <UserDetails 
          name={userSelected.name}
          username={userSelected.username}
          email={userSelected.email}
          // address={userSelected.address}
          phone={userSelected.phone}
          website={userSelected.website}
          company={userSelected.company.name + ' (' + userSelected.company.catchPhrase + ')'}
        />
      )
    }
  

    return (
      <div className="App">
        <Header />
        <form className="user-select">
          <label>
            Select a User: &nbsp;
            <select value={userValue} onChange={this.handleChange}> 
                {userOptions}
            </select>
          </label>
        </form>
        <main className="main">
          <PostList 
            // posts={}
          />
        </main>
        <aside className="sidebar">
          {userSelectedDetails}
        </aside>
      </div>
    );
  }
}

export default App;
