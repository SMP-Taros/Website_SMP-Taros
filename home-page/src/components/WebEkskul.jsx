import React from "react";
import { Row } from "react-bootstrap";

import Ekskul from "../assets/img/ekskul/ekskul.svg"
function WebEkskul(){  
    return(
        <div className="ekskul-container">
            <Row>
                <div className="judul">
                        <div className="text-wrapper">
                            <div className="text">
                                EKSTRAKURIKULER
                            </div> 
                        </div>
                </div>
            </Row>
            <Row>
                <div className="image-container">
                    <img src={Ekskul} alt="" />
                </div>
            </Row>
            <div className="nb">
                * Gambar hanya pemanis
            </div>
        </div>
    )
}

export default WebEkskul;