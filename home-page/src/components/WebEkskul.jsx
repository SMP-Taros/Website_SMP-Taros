import React from "react";
import { Row, Col } from "react-bootstrap";



import Ekskul1 from "../assets/img/ekskul/seni.png"
import Ekskul2 from "../assets/img/ekskul/mtq.png"
import Ekskul3 from "../assets/img/ekskul/futsal.png"
import Ekskul4 from "../assets/img/ekskul/kir.png"
import Ekskul5 from "../assets/img/ekskul/komunikasi.png"
import Ekskul6 from "../assets/img/ekskul/pramuka.png"

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
            <Row className="ekskul">
                <Col>
                    <div className="seni">
                        <div className="image-container">
                            <img src={Ekskul1} alt="" />
                        </div>
                        <div className="text-container">
                            <h5>Seni dan Keterampilan</h5>
                            Pencaksilat, Handycraft, Seni <br/>
                            Musik/Perkusi, Ventriloquist (Sulap <br/>
                            Suara), Khat (Kaligrafi)
                        </div>
                    </div>
                </Col>
                <Col>
                    <Row>
                        <div className="mtq">
                            <div className="image-container">
                                <img src={Ekskul2} alt="" />
                            </div>
                            <div className="text-container">
                                <h5>MTQ</h5>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="futsal">
                            <div className="image-container">
                                <img src={Ekskul3} alt="" />
                            </div>
                            <div className="text-container">
                                <h5>FUTSAL</h5>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="kir">
                            <div className="image-container">
                                <img src={Ekskul4} alt="" />
                            </div>
                            <div className="text-container">
                                <h5>Karya Ilmiah <br/>
                                    Remaja</h5>
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div className="komunikasi">
                            <div className="image-container">
                                <img src={Ekskul5} alt="" />
                            </div>
                            <div className="text-container">
                                <h5>Komunikasi</h5>
                                Multimedia dan Public Speaking
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="pramuka">
                            <div className="image-container">
                                <img src={Ekskul6} alt="" />
                            </div>
                            <div className="text-container">
                                <h5>Pramuka SIT</h5>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
            {/* <div className="nb">
                * Gambar hanya pemanis
            </div> */}
        </div>
    )
}

export default WebEkskul;