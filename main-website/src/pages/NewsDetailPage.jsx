import React from 'react'
import WebDetailBerita from '../components/WebDetailBerita'
import WebFooter from '../components/WebFooter'
import WebNavbar from '../components/WebNavbar'
import WebHeader from '../components/WebHeader'

function NewsDetailPage() { 
  return (
    <div>
      <WebHeader />
      < WebNavbar />
      <div className='detail-berita-container-batas' />
      <WebDetailBerita />
      <WebFooter />
    </div>
  )
}

export default NewsDetailPage
