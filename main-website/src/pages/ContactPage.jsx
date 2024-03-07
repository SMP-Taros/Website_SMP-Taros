import React from 'react'
import WebBannerKontak from '../components/WebBannerKontak'
import WebKontak from '../components/WebKontak'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'

function ContactPage() {
    return (
        <div className='contact-page'>
            <WebHeader />
            <WebNavbar />
            <WebBannerKontak />
            <WebKontak />
            <WebFooter />
        </div>
    )
}

export default ContactPage;
