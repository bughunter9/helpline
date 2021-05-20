import React, { forwardRef } from 'react';
import './Posts.css';

const Post = forwardRef(({name, amount }, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Posted By : <strong>{name}</strong></h2>
            <h3>Amount Donated: <strong>{amount}</strong></h3>
        </div>
    </div>
    );
})

export default Post;
