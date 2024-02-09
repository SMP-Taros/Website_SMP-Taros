import React from 'react'

import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'
import HeaderHome from '../components/komponen-home/HeaderHome'
import WebProfilHome from '../components/komponen-home/WebProfilHome'
import WebBeritaHome from '../components/komponen-home/WebBeritaHome'
import WebPpdbHome from '../components/komponen-home/WebPpdbHome'
import WebInformasiHome from '../components/komponen-home/WebInformasiHome'
import WebPengumumanHome from '../components/komponen-home/WebPengumumanHome'
import WebTestiHome from '../components/komponen-home/WebTestiHome'

function HomePage() {
    return (
        <div className='homepage'>
            <WebHeader />
            <WebNavbar />
            <HeaderHome />
            <WebProfilHome />
            <WebBeritaHome />
            <WebPpdbHome />
            <WebInformasiHome />
            <WebPengumumanHome />
            <WebTestiHome />
            <WebFooter />
        </div>
    )
}

export default HomePage
