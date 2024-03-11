import React from 'react'
import WebDetailBerita from '../components/WebDetailBerita'
import WebFooter from '../components/WebFooter'
import WebNavbar from '../components/WebNavbar'
import WebHeader from '../components/WebHeader'

import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';

function NewsDetailPage() { 
  return (
    <div>
      <Header />
      < WebNavbar />
      <div className='detail-berita-container-batas' />
      <WebDetailBerita />
      <Footer />
    </div>
  )
}

export default NewsDetailPage
