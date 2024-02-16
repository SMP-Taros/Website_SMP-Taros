import React, { useState, useEffect } from 'react';
import Pagination from './komponen-berita/Pagination';
import Posts from './komponen-berita/Posts'
import WebTerbaru from './WebTerbaru';
import { listBerita } from '../data/data-berita'

function WebListBerita() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [postsPerSide] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(listBerita);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Get current side posts
  const indexOfLastSide = 1 * postsPerSide;
  const indexOfFirstSide = indexOfLastSide - postsPerSide;
  const currentSide = posts.slice(indexOfFirstSide, indexOfLastSide);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='beritaa'>
      <div className='berita-container'>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          postsPerSide={postsPerSide}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <WebTerbaru posts={currentSide} />
    </div>
  )
}

export default WebListBerita
