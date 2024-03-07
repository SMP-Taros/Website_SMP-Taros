import React, { useState, useEffect } from 'react';
import Pagination from './komponen-berita/Pagination';
import Posts from './komponen-berita/Posts'
import WebTerbaru from './WebTerbaru';
import { listBerita } from '../data/data-berita'
import Search from '/image/search.svg'
 
function WebListBerita() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [postsPerSide] = useState(5);

  const [searchVal, setSearchVal] = useState("");
  const [artikel, setArtikel] = useState("");
 
  function handleSearchClick(e) {
    if (searchVal === "") {
      setArtikel(listBerita);
      return;
    }
    const filterBySearch = posts.filter((item) => {
      return item["title"].toLowerCase().includes(searchVal.toLowerCase());
    })
    setArtikel(filterBySearch);
  }

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

  console.log(searchVal);
  return (
    <div className='beritaa'>
      <div className='berita-container'>
        <Posts artikel={artikel} posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          postsPerSide={postsPerSide}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>

      <div>
        <div className='search-box'>
          <input onChange={(e) => setSearchVal(e.target.value)} className='search' type='text' placeholder='search' />
          <button className='btn-image' onClick={handleSearchClick} >
            <img className='image' src={Search} />
          </button>
        </div>
        <WebTerbaru posts={currentSide} />
      </div>
 
    </div>
  )
}

export default WebListBerita
