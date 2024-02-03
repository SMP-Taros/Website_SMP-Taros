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
                            <div>Prayan RT 02/ RW 01 Gumpang Kartasura Sukoharjo</div>
                        </div>
                        <div className="footer-telp">
                            <img className="icon" src={ITelepon} />
                            <div>Syafi'i : 0857 2538 0565<br />Kak Taros : 0896 7600 0390</div>
                        </div>
                    </div>
                    <div className="footer-kanan">
                        <p className="contact">HUBUNGI KAMI</p>
                        <div className="footer-email">
                            <img className="icon" src={IEmail} />
                            <div>smpit.taqiyyarosyida@gmail.com</div>
                        </div>
                        <div className="footer-kanan-sosmed">
                            <div className="footer-instagram">
                                <img className="icon" src={IInstagram} />
                                <div>SMP TAROS</div>
                            </div>
                            <div className="footer-twitter">
                                <img className="icon" src={ITwitter} />
                                <div>SMP TAROS</div>
                            </div>
                            <div className="footer-facebook">
                                <img className="icon" src={IFacebook} />
                                <div>SMPIT Taqiyya Rosyida</div>
                            </div>
                            <div className="footer-youtube">
                                <img className="icon" src={IYoutube} />
                                <div>SMP TAROS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebFooter;