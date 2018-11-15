import React, { Component } from 'react';
import Post from '../Presentation/Post';
import API from '../../API';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            comments: []
        }
    }

    getPosts = (userID) => {
        API.get(`posts?userId=${userID}`)
            .then(response => {
                this.setState({posts: response.data})    
            })
    }
    
    // getComments = (userID) => {
    //     API.get(`comments?postId=${userID}`)
    //         .then(response => {
    //             this.setState({comments: response.data})
    //         })
    // }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userSelected.id !== prevProps.userSelected.id) {
            this.getPosts(this.props.userSelected.id)
            // this.getComments(this.props.userSelected.id)
        }
    }

    render() {
        const {posts} = this.state
        console.log(this.state.comments)

        const displayPosts = posts.map(post => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    {/* <p>Comments: {this.state.comments.length}</p> */}
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