import React from "react";
import IFacebook from "../image/facebook.png";
import IInstagram from "../image/instagram.png";
import IEmail from "../image/email.png";
import IMaps from "../image/maps.png";
import ITelepon from "../image/telepon.png";
import ITwitter from "../image/twitter.png";
import IYoutube from "../image/youtube.png";

function WebFooter() {
    return (
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-header">
                    <div className="footer-kiri">
                        <div className="footer-maps">
                            <img className="icon" src={IMaps} />
                            <p>Prayan RT 02/ RW 01 Gumpang Kartasura Sukoharjo</p>
                        </div>
                        <div className="footer-telp">
                            <img className="icon" src={ITelepon} />
                            <p>Syafi'i : 0857 2538 0565<br />Kak Taros : 0896 7600 0390</p>
                        </div>
                    </div>
                    <div className="footer-kanan">
                        <p className="contact">HUBUNGI KAMI</p>
                        <div className="footer-email">
                            <img className="icon" src={IEmail} />
                            <p>smpit.taqiyyarosyida@gmail.com</p>
                        </div>
                        <div className="footer-kanan-sosmed">
                            <div className="footer-instagram">
                                <img className="icon" src={IInstagram} />
                                <p>SMP TAROS</p>
                            </div>
                            <div className="footer-twitter">
                                <img className="icon" src={ITwitter} />
                                <p>SMP TAROS</p>
                            </div>
                            <div className="footer-facebook">
                                <img className="icon" src={IFacebook} />
                                <p>SMPIT Taqiyya Rosyida</p>
                            </div>
                            <div className="footer-youtube">
                                <img className="icon" src={IYoutube} />
                                <p>SMP TAROS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebFooter;