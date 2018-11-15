import React, { Component } from 'react';
import '../assets/skeleton.scss';
import API from '../API';
import Posts from './Containers/Posts';
import UserDetails from './Presentation/UserDetails';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
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
        
        /* userSelected finds the selected user from the dropdown by matching the id of the user from the users array with the id value coming from the dropdown value */
        const userSelected = userValue > 0 && userValue !== '' ? 
        users.find(user => user.id === parseInt(userValue)) : {};
        
        return (
            <div className='App'>
                <div className="row">
                    <select value={userValue} onChange={this.selectChangeHandler}>
                        <option disabled value=''>Select a User</option>
                        {userOptions}
                    </select>
                </div>
                <div className="row">
                    <div class="one-half column">
                        <Posts 
                            userSelected={userSelected}
                        />
                    </div> 
                    <div class="one-half column">
                        <UserDetails 
                            userSelected={userSelected}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;