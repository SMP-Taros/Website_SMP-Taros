 import React from "react"; 
 import { Container, Row, Col, Button, Form, InputGroup} from "react-bootstrap";
 import { useState } from "react";

 function WebKontak(){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <div className="kontak2">
            <Container>
                <Row className="kontak2-judul">
                <Col>
                    <h1 className='text-center fw-bold my-4'>HUBUNGI KAMI LEBIH LANJUT</h1>
                </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="colkon1">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group className="mb-5" as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>Nama*</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Silahkan Masukkan Nama anda"
                                        // defaultValue=".."
                                    />
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                </Form.Group>      
                                <Form.Group className="mb-5"  controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Masukkan Email Anda" />
                                </Form.Group>
                                <Form.Group className="mb-5" as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Keluhan*</Form.Label>
                                    <Form.Control as="textarea" rows={7} />
                                </Form.Group>
                            </Row>
                            {/* <Form.Group className="mb-3">
                                <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                                />
                            </Form.Group> */}
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                    <Col className="colkon2">
                        <div className="info-kontak1 ">
                            <p className="fw-bold">Informasi lebih lanjut tentang segala bentuk administrasi dan memberi masukan bagi kami. mohon kunjungi link dibawah ini : </p>
                            <a href="">https://</a>
                        </div>
                        <div className="info-kontak2">
                            <p className="fw-bold">dan tetap ikut informasi terbaru dari kami </p>
                            <a href="https://www.instagram.com/smpittaqiyyarosyida/">https://www.instagram.com/smpittaqiyyarosyida/</a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
 }

 export default WebKontak;