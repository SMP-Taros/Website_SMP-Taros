import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dokumentasi from "../assets/img/dokumentasi/dokumentasi.svg";

function WebSarPras(){
    return ( 
        <div className="sarpras-container">
            <Container>
            <Row>
                <div className="judul">
                        <div className="text-wrapper">
                            <div className="text">
                                SARANA PRASARANA SEKOLAH 
                            </div> 
                        </div>
                </div>
            </Row>
            <Row> 
                <div className="text1">
                Kami berusaha menciptakan lingkungan yang kondusif untuk mendukung perkembangan holistik<br/>
                setiap siswa. Berikut adalah beberapa  fasilitas unggulan yang kami tawarkan untuk menciptakan<br/>
                suasana belajar yang optimal: 

                </div>
            </Row>
            <Row>
                <Col>
                    <div className="text2">
                        <ul className="list-ruang">
                            <li > 1. Ruang Kelas</li>
                            <li > 2. Ruang Perpustakaan</li>
                            <li > 3. Ruang Laboratorium	</li>
                            <li > 4. Ruang Pimpinan</li>
                            <li > 5. Ruang Guru</li>
                            <li > 6. Ruang Ibadah</li>
                            <li > 7. Ruang UKS</li>
                            <li > 8. Ruang Toilet</li>
                            <li > 9. Ruang TU</li>
                            <li >10. Ruang Konseling</li>
                            <li >11. Ruang OSIS</li>
                            <li >12. Ruang Bangunan</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className="image-container">
                        <img src={Dokumentasi} alt="dokum" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default WebSarPras;