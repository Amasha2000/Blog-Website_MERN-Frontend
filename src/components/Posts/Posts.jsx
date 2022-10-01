import React from 'react';
import './posts.css';
import Post from '../Post/Post';

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </div>
  )
}
