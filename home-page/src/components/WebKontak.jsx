 import React from "react"; 
 import { Container, Row, Col, Button, Form, InputGroup} from "react-bootstrap";
 import { useState } from "react";

import Kontak1 from "../assets/img/kontak/email.png";
import Kontak2 from "../assets/img/kontak/ig.png";
import Kontak3 from "../assets/img/kontak/fb.png";
import Kontak4 from "../assets/img/kontak/telp.png";

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
                            <Button variant="success" type="submit">Submit form</Button>
                        </Form>
                    </Col>
                    <Col className="colkon2">
                        <div className="info-kontak1 ">
                            <p className="fw-bold">Informasi lebih lanjut tentang segala bentuk administrasi dan memberi masukan bagi kami. mohon kunjungi link dibawah ini : </p>

                            <a href="">https://</a>
                        </div>
                        <div className="info-kontak2">
                            <p className="fw-bold">dan tetap ikut informasi terbaru dari kami </p>
                            <Row className='kontak-row'>
                                <Col className='col5 mt-5'>
                                    <div className="img-wrapper">
                                        <img src={Kontak1} alt="email" width="50px" />
                                    </div>
                                    <div className="img-wrapper">
                                        <img src={Kontak2} alt="instagram" width="50px" />
                                    </div>
                                    <div className="img-wrapper">
                                        <img src={Kontak3} alt="facebook" width="50px" />
                                    </div>
                                    <div className="img-wrapper">
                                        <img src={Kontak4} alt="instagram" width="50px" />
                                    </div>
                                </Col>
                                <Col className="col6 text0center mt-5">
                                    <div className="text-wrapper">
                                        <p className="">smpit.taqiyyarosyida@gmail.com</p>
                                    </div>
                                    <div className="text-wrapper">
                                        <a href="https://www.instagram.com/smpittaqiyyarosyida/">smpittaqiyyarosyida</a>
                                    </div>
                                    <div className="text-wrapper">
                                        <a href="https://www.facebook.com/smpit.taqiyyarosyidaa">SMPIT Taqiyya Rosyida </a>
                                    </div>
                                    <div className="text-wrapper">
                                        <a className="">Syafi'i : 0857 2538 0565 </a> <br />
                                        <a href="https://api.whatsapp.com/send?phone=%2B6289676000390&data=ARDm88yjMcwJNnAmAEFwiPVb0oIzRYom_boKhqjaYPALCthCWV65TFN-ZsfqNK3tG_a-MaaRlnxJWUh0c4TFaVhGkAENmFQzwe1nFEHwsu2I_nloeYpNVBIrDdrn5YjyPACVo3N2vIk1p1TkNRsH1MM9fQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1269zki1WTP3n87UgF8pbUFOlTbc2dLnA3pwYdS5z0ADdCfLyEaOukww8" >Kak TaroS : 0896 76000 390</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col> 
                </Row>
                
            </Container>
        </div>
    )
 }

 export default WebKontak;