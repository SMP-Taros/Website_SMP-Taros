import React from 'react'
import WebHeader from '../components/WebHeader';
import WebNavbar from '../components/WebNavbar';
import WebBanner from '../components/WebBanner';
import WebCarousel from '../components/WebCarousel';
import WebSambutan from '../components/WebSambutan';
import WebVisi from '../components/WebVisi';
import WebKompetensi from '../components/WebKompetensi';
import WebFooter from '../components/WebFooter';

function ProfilePage() {
    return (
        <div className="profile-page">
            <WebHeader></WebHeader>
            <WebNavbar></WebNavbar>
            <WebBanner></WebBanner>
            <WebSambutan></WebSambutan>
            <WebVisi></WebVisi>
            <WebKompetensi></WebKompetensi>
            <WebCarousel></WebCarousel>
            <WebFooter></WebFooter>
        </div>
    )
}

export default ProfilePage;
