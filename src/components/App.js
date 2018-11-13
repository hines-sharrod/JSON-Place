import React, { Component } from 'react';
import '../assets/skeleton.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'defaultUser'
        };
    }

    selectChangeHandler = e => {
        this.setState({value: e.target.value})
    }
    
    render() {
        return (
            <div className="App">
                <div className="row">
                    <select value={this.state.value} onChange={this.selectChangeHandler}>
                        <option disabled value="defaultUser">Select a User</option>
                        <option value="user1">User1</option>
                    </select>
                </div>
                <div className="row">
                    <div class="one-half column">1/2</div> 
                    <div class="one-half column">1/2</div>
                </div>
            </div>
        )
    }
}

export default App;