import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'
import WebBannerButton from '../components/WebBannerButton'
import WebPPDBButton from '../components/WebPPDBButton'
  
function PPDBPage() {
    return (
        <div>
            <WebHeader /> 
            <WebNavbar />
            <WebBannerButton />
            <WebPPDBButton />
            <div className='ppdbpage-informasi'>Informasi Pendaftaran</div>
            <WebFooter />
        </div>
    )
}

export default PPDBPage;
