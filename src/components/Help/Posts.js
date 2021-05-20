import React, { forwardRef } from 'react';
import './Posts.css';

const Post = forwardRef(({name, resLink, amount, walletAddress}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Requested By : <strong>{name}</strong></h2>
            <h3>Amount : <strong>{amount}</strong> Eth</h3>
            <h4>Wallet Address : <strong>{walletAddress}</strong></h4>
            
            <h4>Proof : {" "}
                <a target="_blank" rel="noreferrer" href={resLink}>
                    Link
                </a>
            </h4>
        </div>
    </div>
    );
})

export default Post;
