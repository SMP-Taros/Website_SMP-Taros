import React, { useState } from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'

import Footer from '../components/komponen-utama/Footer'
import Header from '../components/komponen-utama/Header'

function InformasiKaldikPage() {

  return (
    <div className='kalender'>
      {/* <WebHeader /> */}
      <Header />
      <WebNavbar />
      <div className='banner-container'>
        <div className='banner-warna'>
          <h1>KALENDER AKADEMIK</h1>
        </div>
      </div>
      <div className='kalender-text'>KALENDER AKADEMIK TAHUN AJARAN 2023/2024</div>
      <div className='kalender-container'>
        <div className='kalender-viewer'>
          <embed src='/files/contoh.pdf' type='application/pdf'></embed>

        </div>

      </div>
      {/* <WebFooter /> */}
      <Footer />
    </div>
  )
}

export default InformasiKaldikPage
