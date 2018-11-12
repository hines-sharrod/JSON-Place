import React, {Component} from 'react';
import axios from 'axios';

import Post from '../Post/Post';

class PostList extends Component {
    state = {
        loadedPosts: null
    }

    componentDidUpdate () {
        if(this.props.userSelected) {
            if(!this.state.loadedPosts || (this.state.loadedPosts && this.state.loadedPosts.userId !== this.props.userSelected.id) )  {
                axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.userSelected.id + '/posts') 
                    .then(response => {
                        this.setState({loadedPosts: response.data})
                    })
            }
        }
    }
    render() {
        const {loadedPosts} = this.state;
        console.log(loadedPosts)

        let post = null;

        if (this.props.userSelected) {
            post = (
                <p style={{textAlign: 'center'}}>Loading...!</p>
            )
        }

        if (loadedPosts) {
            post = loadedPosts.map(post => {
                return <Post key={post.title} title={post.title} body={post.body} />
            })
        }

        return (
            <div>
                {post}
            </div>
        )
    }
}

export default PostList;