import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { listBerita } from '../data/data-berita';
import WebDaftarBerita from './WebDaftarBerita';
import WebTerbaru from './WebTerbaru';
 
function WebDetailBerita() {
    const { id } = useParams();
    const postList = listBerita();
    const post = postList.find((post) => post.id == id)

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerSide] = useState(5);
    const [postsPerLine] = useState(3);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setPosts(listBerita);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current side posts
    const indexOfLastSide = currentPage * postsPerSide;
    const indexOfFirstSide = indexOfLastSide - postsPerSide;
    const currentSide = posts.slice(indexOfFirstSide, indexOfLastSide);
   
    // Get current line posts
    const indexOfLastLine = currentPage * postsPerLine;
    const indexOfFirstLine = indexOfLastLine - postsPerLine;
    const currentLine = posts.slice(indexOfFirstLine, indexOfLastLine);

    if (!post) {
        return <p>Berita tidak ditemukan</p>;
    }

    return (
        <div className='detail-berita-container'>
            <div className='detail-berita-isi'>
                <div className='row-kiri'>
                    <div className='judul'>{post.title}</div>
                    <div className='tanggal'>
                        <div className='text-tanggal'>{post.date} |&nbsp;<div className='text-kategori'>{post.kategori}</div></div>
                    </div>
                    <img src={post.image} className='detail-gambar' />
                    <div className='text-berita'>{post.text}</div>
                    <WebDaftarBerita posts={currentLine} />
                </div>
                <div className='row-kanan'>
                    <WebTerbaru posts={currentSide} />
                </div>
            </div>
        </div>
    )
}

export default WebDetailBerita;
