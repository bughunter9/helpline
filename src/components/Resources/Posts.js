import React, { forwardRef } from 'react';
import './Posts.css';

const Post = forwardRef(({name, resource, city, state, country, resourceLink}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Posted By : <strong>{name}</strong></h2>
            <h3>Resource : <strong>{resource}</strong></h3>
            <h4>Place : <strong>{city}</strong> / <strong>{state}</strong> / <strong>{country}</strong></h4>
            
            <h4>Resource : {" "}
                <a target="_blank" rel="noreferrer" href={resourceLink}>
                    Link
                </a>
            </h4>
        </div>
    </div>
    );
})

export default Post;
