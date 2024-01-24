import React from "react";
import jsitImage from "../assets/img/jsit.png";
import yayasanImage from "../assets/img/yayasan_taros.png";

function WebHeader() {
    return (
        <div className="header-container">
            <div className="header-isi">
                <div className="header-foto">
                    <div className="foto-aset">
                        <img className="gambar" src={yayasanImage} />
                    </div>
                </div>
                <div className="header-tengah">
                    <div className="text">
                        <div className="atas">SMP IT TAQIYYA ROSYIDA</div>
                        <div className="bawah">Smart Excellent Become a Winner</div>
                    </div>
                </div>
                <div className="header-foto">
                    <div className="foto-aset">
                        <img className="gambar" src={jsitImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader;