import React from 'react'
import Jam from "./clock.svg"

function Posts({ posts }) {
  return (
    <ul className='berita-isi'>
        {posts.map(post => (
            <li key={post.id} className='berita-list'>
                <img src={post.image} className='gambar' />
                <div className='title'>{post.title}</div>
                <div className='date'>
                    <img src={Jam} className='date-clock' />
                    <div className='date-text'>{post.date}</div>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default Posts

