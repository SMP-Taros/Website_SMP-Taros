import React from 'react'

function WebDaftarBerita({ posts }) {
  return (
    <ul className='daftar-berita'> 
        {posts.map(post => (
            <li className='daftar-berita-isi' key={post.id}>
                <img src={post.image} className='image' />
                <div className='title'>{post.title}</div>
            </li>
        ))}
    </ul>
  )
}

export default WebDaftarBerita;
