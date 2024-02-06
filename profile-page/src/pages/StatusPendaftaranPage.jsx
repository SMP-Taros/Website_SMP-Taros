import React from 'react'
import { Link } from 'react-router-dom'

import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebBannerButton from '../components/WebBannerButton'
import WebFooter from '../components/WebFooter'
import WebPPDBButton from '../components/WebPPDBButton'

function StatusPendaftaranPage() {
  return (
    <div>
      <WebHeader />
      <WebNavbar />
      <WebBannerButton />
      <WebPPDBButton />
      <div className='check-box-container'>
        <div className='content'>
            <div className='title'>Status Pendaftaran</div>
            <div className='orange-line' />
            <div className='box'>
                <div className='input-box'>
                    <div className='span-text'>Kode Pendaftaran</div>
                    <input type='text' className='text-box' />
                    <div className='span-text'>Tanggal Lahir</div>
                    <input type='date' className='date-box' />
                    <Link to=''>
                        <button className='check-status'>Cek Status</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
      <WebFooter />
    </div>
  )
}

export default StatusPendaftaranPage
