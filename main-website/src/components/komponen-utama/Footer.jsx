import React from 'react'
import Email from '/image/email.png'
import Facebook from '/image/facebook.png'
import Instagram from '/image/instagram.png'
import Maps from '/image/maps.png'
import Telepon from '/image/telepon.png'
import Twitter from '/image/twitter.png'
import Youtube from '/image/youtube.png'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='contact'>HUBUNGI KAMI</div>
            <div className='footer-box'>
                <div className='footer-kiri'>
                    <div className='icon-kiri'>
                        <img src={Maps} />
                        <div>Prayan RT 02/ RW 01 Gumpang Kartasura Sukoharjo</div>
                    </div>
                    <div className='icon-kiri'>
                        <img src={Telepon} />
                        <div>Syafi'i : 0857 2538 0565<br />Kak Taros : 0896 7600 0390</div>
                    </div>
                </div>
                <div className='footer-tengah'></div>
                <div className='footer-kanan'>
                    <div className='icon-utama-kanan'>
                        <div className='icon-kanan'>
                            <img src={Email} />
                            <div>smpit.taqiyyarosyida@gmail.com</div>
                        </div>
                    </div>
                    <div className='icon-sec-kanan'>
                        <div className='icon-kanan'>
                            <img src={Instagram} />
                            <div>SMP TAROS</div>
                        </div>
                        <div className='icon-kanan'>
                            <img src={Twitter} />
                            <div>SMP TAROS</div>
                        </div>
                    </div>
                    <div className='icon-sec-kanan'>
                        <div className='icon-kanan'>
                            <img src={Facebook} />
                            <div>SMPIT Taqiyya Rosyida</div>
                        </div>
                        <div className='icon-kanan'>
                            <img src={Youtube} />
                            <div>SMP TAROS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
