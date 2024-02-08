import React from "react";
import { Row, Col } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
 
function WebAkreditasi(){
    let navigate = useNavigate();
    return(
        <div className="akreditasi-container">
            <Row>
            <Col>
                <div className="text">
                    <h2>TERAKREDITASI A</h2>
                    <p>
                    Dengan dedikasi luar biasa dari tenaga pendidik, semangat tinggi siswa, dan<br/>
                    dukungan  tanpa henti dari orang tua, kami berhasil meraih Akreditasi ini. Kami <br/>
                    tetap berkomitmen kami untuk terus meningkatkan mutu pendidikan, menjadi <br/>
                    pelopor dalam dunia pendidikan yang menekankan pada nilai-nilai integritas, <br/>keunggulan, dan keberlanjutan
                    </p>
                </div>
            </Col>
            <Col>
            <div className='ppdb-btn'>
              <button className='btn btn-success btn-lg rounded-2' onClick={() => navigate("/ppdb")}>Daftar PPDB</button>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default WebAkreditasi;