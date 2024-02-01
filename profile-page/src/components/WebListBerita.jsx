import React from 'react'
import Posts from './komponen-berita/Posts'
import { listBerita } from '../data/data-berita'

function WebListBerita() {
const posts = listBerita();

  return (
    <div className='berita-container'>
        <Posts posts={posts} />
    </div>
  )
}

export default WebListBerita
