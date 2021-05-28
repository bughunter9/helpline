import React, { forwardRef } from 'react';
import { donateProduct } from '../../contracts/Marketplace.sol';
import './Posts.css';

const Post = forwardRef(({name, resLink, amount, walletAddress}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Requested By : <strong>{name}</strong></h2>
            <h3>Amount : <strong>{amount}</strong> Eth</h3>
            <h4>Wallet Address : {" "}
                <a target="_blank" rel="noreferrer" href={walletAddress}>
                    Address
                </a>
            </h4>
            <h4>Proof : {" "}
                <a target="_blank" rel="noreferrer" href={resLink}>
                    Link
                </a>
            </h4>
                <button type='submit' className="approval__Button" 
                onClick={() => { donateProduct({name}, {amount})}}>
                    Approve
                </button>
        </div>
    </div>
    );
})

export default Post;
