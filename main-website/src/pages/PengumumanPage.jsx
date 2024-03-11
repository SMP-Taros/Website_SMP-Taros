import React from 'react'
import { Link } from 'react-router-dom'

import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebBannerButton from '../components/WebBannerButton'
import WebPPDBButton from '../components/WebPPDBButton'
import WebFooter from '../components/WebFooter'

import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';

function PengumumanPage() {
    return (
        <div>
            <Header />
            <WebNavbar />
            <WebBannerButton />
            <WebPPDBButton />
            <div className='check-box-container'>
                <div className='content'>
                    <div className='title'>Pengumuman</div>
                    <div className='orange-line' />
                    <div className='box'>
                        <div className='input-box'>
                            <div className='span-text'>Kode Pendaftaran</div>
                            <input type='text' className='text-box' />
                            <div className='span-text'>Tanggal Lahir</div>
                            <input type='date' className='date-box' />
                            <Link to=''>
                                <button className='check-pengumuman'>Cek Pengumuman</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PengumumanPage
