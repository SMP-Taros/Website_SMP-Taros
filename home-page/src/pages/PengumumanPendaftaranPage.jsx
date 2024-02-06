import React from 'react'
import { Link } from 'react-router-dom'

import WebBannerButton from '../components/WebBannerButton' 
import WebPpdbButton from '../components/WebPpdbButton'

function PengumumanPage() {
    return (
        <div>

            <WebBannerButton />
            <WebPpdbButton />
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
        </div>
    )
}

export default PengumumanPage;