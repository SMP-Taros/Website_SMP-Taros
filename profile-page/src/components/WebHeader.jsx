import React from "react";
import IYayasan from "../image/taros.jpeg";
import IJSIT from "../image/jsit.png";
 
function WebHeader() {
    return (
        <div className="header-container">
            <div className="header-isi">
                <div className="header-foto">
                    <div className="foto-aset">
                        <img className="gambar" src={IYayasan} />
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
                        <img className="gambar" src={IJSIT} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebHeader;