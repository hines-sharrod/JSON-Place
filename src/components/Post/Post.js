import React from 'react';

const Post = ({title, body, numComments}) => {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{body}</p> 
            {/* <p>{numComments.length} Comments</p> */}
        </div>
    )
}

export default Post;  