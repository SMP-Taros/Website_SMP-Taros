import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

function WebPpdbHome() {
    let navigate = useNavigate();
    return (
        <div className='ppdb-background'>
            <Container>
                <Row>
                    <Col>
                        <div className='ppdb-container'>
                            <h1 className='ppdb-header'>PPDB TAHUN AJARAN 2024/2025</h1>
                            <p>Smart Excellent Become a Winner</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='ppdb-btn'>
                            <button className='btn btn-success btn-lg rounded-2' onClick={() => navigate("/ppdb")}>Daftar PPDB</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WebPpdbHome
