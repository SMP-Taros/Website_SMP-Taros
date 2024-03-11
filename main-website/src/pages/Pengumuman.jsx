import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebListBerita from '../components/WebListBerita'
import WebFooter from '../components/WebFooter'
import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';

function Pengumuman() {
    return (
        <div>
            <Header />
            <WebNavbar />
            <div className='berita-atap'>
                <div className='text-atap'>PENGUMUMAN</div>
            </div>
            <WebListBerita />
            <Footer />
        </div>
    )
}

export default Pengumuman
