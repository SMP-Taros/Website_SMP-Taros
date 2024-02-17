import React from 'react'

function WebTerbaru({ posts }) {
    return (
        <div className='berita-sidebar'>
            
            <div className='text'>TERBARU</div>
            <ul className='terbaru'>
                {posts.map(post => (
                    <li key={post.id}>
                        <div className='text'>
                            <span className='specs'>{post.kategori} </span>
                            - {post.title}
                        </div>
                        <div className='text-line' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WebTerbaru; 
