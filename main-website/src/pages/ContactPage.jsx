import React from 'react'
import WebBannerKontak from '../components/WebBannerKontak'
import WebKontak from '../components/WebKontak'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'
import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';

function ContactPage() {
    return (
        <div className='contact-page'>
            <Header />
            <WebNavbar />
            <WebBannerKontak />
            <WebKontak />
            <Footer />
        </div>
    )
}

export default ContactPage;
