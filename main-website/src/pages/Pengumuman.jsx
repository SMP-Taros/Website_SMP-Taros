import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebListBerita from '../components/WebListBerita'
import WebFooter from '../components/WebFooter'

function Pengumuman() {
    return (
        <div>
            <WebHeader />
            <WebNavbar />
            <div className='berita-atap'>
                <div className='text-atap'>PENGUMUMAN</div>
            </div>
            <WebListBerita />
            <WebFooter />
        </div>
    )
}

export default Pengumuman
