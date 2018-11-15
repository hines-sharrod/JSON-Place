import React, { Component } from 'react';
import Post from '../Presentation/Post';
import API from '../../API';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    getPosts = (userID) => {
        API.get(`user/${userID}/posts`)
            .then(response => {
                this.setState({posts: response.data})    
            })
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userSelected.id !== prevProps.userSelected.id) {
            this.getPosts(this.props.userSelected.id)
        }
        console.log(this.state.posts);
    }

    render() {
        const {posts} = this.state

        const displayPosts = posts.map(post => {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        })

        return (
            <div className="Posts">
                {displayPosts}
            </div>
        )
    }
}

export default Posts;