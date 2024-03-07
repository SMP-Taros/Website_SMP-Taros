import React from 'react'
import { Container, Row, Col, } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import Fasilitas1 from "/image/home-fasilitas/kantin.png";
import Fasilitas2 from "/image/home-fasilitas/masjid.png";
import Fasilitas3 from "/image/home-fasilitas/aula.png";
import Fasilitas4 from "/image/home-fasilitas/perpus.png";

function WebInformasiHome() {
    let navigate = useNavigate();
    return (
        <div className="informasi w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold'>INFORMASI</h1>
                        <h2 className='text-center fw-bold'>FASILITAS</h2>
                    </Col>
                </Row>
            </Container>

            <div className='fasilitas'>
                <Row className='fasilitas-row'>
                    <Col className='col1'>
                        <div className="img-wrapper">
                            <img src={Fasilitas1} alt="kantin" />
                            <h5 className='kantin'>Kantin</h5>
                        </div>
                        <div className="img-wrapper">
                            <img src={Fasilitas3} alt="aula" style={{ marginTop: "20px" }} />
                            <h5 className='aula'>Aula</h5>
                        </div>
                    </Col>
                    <Col className='col2'>
                        <div className="img-wrapper">
                            <img src={Fasilitas2} alt="masjid" />
                            <h5 className='masjid'>Masjid</h5>
                        </div>
                        <div className="img-wrapper">
                            <img src={Fasilitas4} alt="perpus" style={{ marginTop: "20px" }} />
                            <h5 className='perpus'>Perpus</h5>
                        </div>
                    </Col>
                </Row>
            </div>

            <Container>
                <Row>
                    <Col>
                        <h2 className='text-center fw-bold'>EKSTRAKULIKULER</h2>
                    </Col>
                </Row>
            </Container>

            <div className='ekskul'>
                <Row className='ekskul-row'>
                    <Col className='col3'>
                        <ul className="ekskul-list1">
                            <li > Pramuka SIT</li>
                            <li > Pencak Silat</li>
                            <li > Futsal</li>
                            <li > Public Speaking</li>
                            <li > Multimedia</li>
                            <li > Handy Craft</li>
                        </ul>
                    </Col>
                    <Col className='col4'>
                        <ul className="ekskul-list2">
                            <li > Karya Ilmiah Remaja</li>
                            <li > Public Speaking</li>
                            <li > Ventriloquist (Sulap Suara)</li>
                            <li > Seni Musik/Perkusi</li>
                            <li > MTQ (Musabawah Tilawatil Qur'an)</li>
                            <li > Khat (Kaligrafi)</li>
                        </ul>
                    </Col>

                </Row>
                <Row className="ekskul-btn">
                    <div className="ekskul-bt">
                        <button
                            className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/informasi")}>
                            Lihat Selengkapnya
                        </button>
                    </div>
                </Row>
            </div>

        </div>
    )
}

export default WebInformasiHome
