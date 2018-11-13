import React, { Component } from 'react';
import '../assets/skeleton.scss';
import API from '../api';
import Posts from './Containers/Posts';
import UserDetails from './Presentation/UserDetails';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: 'defaultUser',
            users: []
        };
    }

    selectChangeHandler = e => {
        this.setState({userValue: e.target.value})
    }

    getUsers = () => {
        API.get('users')
            .then(response => {
                this.setState({users: response.data})        
                })
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const {userValue, users} = this.state;

        const userOptions = users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
        ))

        const userSelected = users.find(user => user.id === userValue);
        console.log(userSelected);

        return (
            <div className='App'>
                <div className="row">
                    <select value={userValue} onChange={this.selectChangeHandler}>
                        <option disabled value="defaultUser">Select a User</option>
                        {userOptions}
                    </select>
                </div>
                <div className="row">
                    <div class="one-half column">
                        <Posts />
                    </div> 
                    <div class="one-half column">
                        <UserDetails 
                            details={UserDetails}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;