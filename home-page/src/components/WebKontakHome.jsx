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
                  <p className="">SMP TAROS</p>
                </div>
                <div className="text-wrapper">
                  <p className="">SMP TAROS</p>
                </div>
                <div className="text-wrapper">
                  <p className="">Syafi'i : 0857 2538 0565 <br />
                     Kak TaroS : 0896 76000 390</p>
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