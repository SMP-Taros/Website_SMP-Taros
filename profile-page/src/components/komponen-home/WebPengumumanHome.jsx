import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Posts from '../komponen-berita/Posts';
import { listBerita } from '../../data/data-berita';
import { useNavigate } from 'react-router-dom';

function WebListBerita() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

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

    // Change page
    //   const paginate = pageNumber => setCurrentPage(pageNumber);

    let navigate = useNavigate();
    return (
        <div className='pengumuman-container'>
            <div className="pengumuman-home w-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>PENGUMUMAN</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='tengahin'>
                <Posts posts={currentPosts} loading={loading} />
            </div>
            <Container>
                <Row className="announ-btn">
                    <div className="announ-bt">
                        <button
                            className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/pengumuman")}>
                            Lihat Selengkapnya
                        </button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default WebListBerita
