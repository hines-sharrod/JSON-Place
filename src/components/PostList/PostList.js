import React, {Component} from 'react';
import axios from 'axios';

import Post from '../Posts/Posts';

class PostList extends Component {
    state = {
        loadedPosts: null
    }

    componentDidUpdate () {
        if(this.props.userSelected) {
            if(!this.state.loadedPosts)  {
                axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.userSelected.id + '/posts')
                    .then(response => {
                        console.log(this.state.loadedPosts);
                        this.setState({loadedPosts: response.data})
                    })
            }
        }
    }
    render() {
        const {loadedPosts} = this.state;
        console.log(loadedPosts)

        let post = null;

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