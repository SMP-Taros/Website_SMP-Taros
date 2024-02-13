import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'

function InformasiKaldikPage() {
  return (
    <div>
      <WebHeader />
      <WebNavbar />
      <div className='banner-container'>
        <div className='banner-warna'>
          <h1>KALENDER AKADEMIK</h1>
        </div>
      </div>
      <WebFooter />
    </div>
  )
}

export default InformasiKaldikPage
