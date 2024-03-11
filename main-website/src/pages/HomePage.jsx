import React from 'react'

import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar' 
import WebFooter from '../components/WebFooter'
import HeaderHome from '../components/komponen-home/HeaderHome'
import WebProfilHome from '../components/komponen-home/WebProfilHome'
import WebBeritaHome from '../components/komponen-home/WebBeritaHome'
import WebPpdbHome from '../components/komponen-home/WebPpdbHome'
import WebPengumumanHome from '../components/komponen-home/WebPengumumanHome'
import WebTestiHome from '../components/komponen-home/WebTestiHome'
import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';  

function HomePage() {
    return (
        <div className='homepage'>
            <Header />
            <WebNavbar />
            <HeaderHome />
            <WebProfilHome />
            <WebBeritaHome />
            <WebPpdbHome />
            <WebPengumumanHome />
            <WebTestiHome />
            <Footer />
        </div>
    )
}

export default HomePage
