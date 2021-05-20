import React, { forwardRef } from 'react';
import './Posts.css';

const Post = forwardRef(({name, amount }, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Donated By : <strong>{name}</strong></h2>
            <h3>Amount Donated: <strong>{amount}</strong> Eth</h3>
            <button type='submit' className="approval__Button" >
                    Approve</button>
        </div>
    </div>
    );
})

export default Post;
