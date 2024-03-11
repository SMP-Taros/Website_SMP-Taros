import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { beritaSekolah } from '../../data/data';
import { useNavigate } from 'react-router-dom';

function WebBeritaHome() {
    let navigate = useNavigate();
    return (
        <div className='berita w-100 min-vh-100'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center fw-bold'>BERITA TERBARU</h1>
                        <p className='text-center'>Dapatkan berita terbaru terkait agenda, kegiatan dan dokumentasi SMP IT Taqiyya Rosyida di sini</p>
                    </Col>
                </Row>
                <Row>
                    {beritaSekolah.map((berita) => {
                        return <Col key={berita.id}>
                            <img src={berita.image} alt="berita1" className='w-100 mb-5 rounded-2' />
                            <h5>{berita.title}</h5>
                            <div className='clock mb-4'>
                                <i className={berita.clock}></i> {berita.date}
                            </div>
                            <p>{berita.p}</p>
                        </Col>
                    })}
                </Row>
                <Row className="berita-btn">
                    <div className="berita-bt">
                        <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/berita")}>
                            Lihat Selengkapnya
                        </button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default WebBeritaHome
