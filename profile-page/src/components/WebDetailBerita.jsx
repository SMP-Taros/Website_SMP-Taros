import React from 'react'
import Jam from '/image/clock.svg';
import { useParams } from 'react-router-dom';
import { listBerita } from '../data/data-berita';

function WebDetailBerita() {
    const { id } = useParams();
    const postList = listBerita();
    const post = postList.find((post) => post.id == id)

    if (!post) {
        return <p>Berita tidak ditemukan</p>;
    }

    return (
        <div className='detail-berita-container'>
            <div className='detail-berita-isi'>
                <div className='row-kiri'>
                    <div className='judul'>{post.title}</div>
                    <div className='tanggal'>
                        <img src={Jam} className='icon-tanggal' />
                        <div className='text-tanggal'>{post.date}</div>
                    </div>
                    <img src={post.image} className='detail-gambar' />
                    <div className='text-berita'>{post.text}</div>
                </div>
                <div className='row-kanan'>

                </div>
            </div>
        </div>
    )
}

export default WebDetailBerita
