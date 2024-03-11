import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'
import WebListBerita from '../components/WebListBerita'
import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';

function NewsPage() {
    return (  
        <div className='news-page'>
            <Header />
            <WebNavbar />
            <div className='berita-atap'>
                <div className='text-atap'>BERITA</div>
            </div>
            <WebListBerita /> 
            <Footer /> 
        </div>
    )
}

export default NewsPage
