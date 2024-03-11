import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebBannerKurikulum from '../components/komponen-informasi/WebBannerKurikulum'
import WebKurikulum from '../components/komponen-informasi/WebKurikulum'
import WebPrestasi from '../components/komponen-informasi/WebPrestasi'
import WebEkskul from '../components/komponen-informasi/WebEkskul'
import WebAkreditasi from '../components/komponen-informasi/WebAkreditasi'
import WebSarPras from '../components/komponen-informasi/WebSarPras'
import WebFooter from '../components/WebFooter'

import Header from '../components/komponen-utama/Header'
import Footer from '../components/komponen-utama/Footer'

function InformasiSekolahPage() {
    return (
        <div className='info-kurkum'>
            <Header />
            <WebNavbar />
            <WebBannerKurikulum />
            <WebKurikulum />
            <WebPrestasi />
            <WebEkskul />
            <WebAkreditasi />
            <WebSarPras />
            <Footer />
        </div>
    )
}

export default InformasiSekolahPage
