import React, { useState } from 'react'

function InformasiKaldikPage() {

  return ( 
    <div className='kalender'>

      <div className='banner-container'>
        <div className='banner-warna'>
          <h1>KALENDER AKADEMIK</h1>
        </div>
      </div>
      <div className='kalender-text'>KALENDER AKADEMIK TAHUN AJARAN 2023/2024</div>
      <div className='kalender-container'>
        <div className='kalender-viewer'>
          <embed src='/files/contoh.pdf' width="1062" height="550" type='application/pdf'></embed>
          
        </div>
        
      </div>
      <div className='line' />
    </div>
  )
}

export default InformasiKaldikPage;
