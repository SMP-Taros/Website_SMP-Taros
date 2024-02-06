import { Row, Col,} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

import Kontak1 from "../assets/img/kontak/email.png";
import Kontak2 from "../assets/img/kontak/ig.png";
import Kontak3 from "../assets/img/kontak/fb.png";
import Kontak4 from "../assets/img/kontak/telp.png";

const WebKontakHome = ()=>{
    let navigate = useNavigate();
    return(
        <div className='kontak w-100 min-vh-100'>
        <Row>
          <Col>
            <h1 className='text-center fw-bold'>CONTACT</h1>
            <p className='text-center'>Hubungi kami lebih lanjut :</p>
          </Col>
        </Row>
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
            <Row className="kontak-btn">
                <div className="kontak-bt">
                  <button
                    className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/contact")}>
                    Lihat Selengkapnya
                  </button>
                </div>
            </Row>
      
      </div>
    )
}

export default WebKontakHome;