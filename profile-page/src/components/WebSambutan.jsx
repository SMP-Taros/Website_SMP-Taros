import React from "react";
import Image from "../image/taros.jpeg";

function WebSambutan() {
    return (
        <div className="sambutan-container">
            <div className="sambutan-text">
                <h1>SAMBUTAN KEPALA SEKOLAH</h1>
                <p>Assalamualaikum Warahmatullahi Wabarakatuh</p>
            </div>
            <img src={Image} />
        </div>
    )
}

export default WebSambutan;