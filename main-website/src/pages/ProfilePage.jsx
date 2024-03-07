import React from 'react'
import WebHeader from '../components/WebHeader';
import WebNavbar from '../components/WebNavbar';
import WebBanner from '../components/WebBanner';
import WebCarousel from '../components/WebCarousel';
import WebSambutan from '../components/WebSambutan';
import WebVisi from '../components/WebVisi';
import WebProgram from '../components/WebProgram';
import WebFooter from '../components/WebFooter';
import Header from '../components/komponen-utama/Header';
import Footer from '../components/komponen-utama/Footer';
import Contoh from '/image/contoh.jpg'

function ProfilePage() {
    return (
        <div>
            <Header />
            <WebNavbar></WebNavbar>
            {/* <WebBanner></WebBanner> */}
            <div className='banner-container'>
                <div className='banner-warna'>
                    <h1>PROFIL SMP IT TAROS</h1>
                </div>
            </div>
            {/* <WebSambutan></WebSambutan> */}
            <div className="sambutan-container">
                <div className="sambutan-text">
                    <h1>SAMBUTAN KEPALA SEKOLAH</h1>
                    <p>Assalamualaikum Warahmatullahi Wabarakatuh</p>
                </div>
                <img src={Contoh} />
            </div>
            {/* <WebVisi></WebVisi> */}
            <div className='visi-container'>
                <div className='visi-box'>
                    <div className='title'>VISI</div>
                    <p>Mewujudkan Sekolah Menengah Pertama Unggulan yang Berakhlak Mulia, Berwawasan Global, Qur'ani dan berprestasi Tinggi</p>
                    <p>SMP IT Taqiyya Rasyida merupakan sekolah di bawah Yayasan Taqiyya Rosyida Kartasura untuk melahirkan generasi yang cerdas, berakhlak mulia, mandiri, berwawasan luas dan mencintai al-qur’an serta mampu mengaktualisasikan nilai-nilai Islam dalam kehidupan sehari - hari.</p>
                    <p>Dengan memadukan kurikulum Nasional dan Jaringan Sekolah Islam Terpadu (JSIT), diharapkan mampu menjawab berbagai persoalan pendidikan di era sekarang dan masa depan</p>
                </div>
            </div>
            {/* <WebProgram></WebProgram> */}
            <WebCarousel></WebCarousel>
            <Footer />
            {/* <WebFooter></WebFooter> */}
        </div>
    )
}

export default ProfilePage;
