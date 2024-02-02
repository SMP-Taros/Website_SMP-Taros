import { Container, Row, Col} from "react-bootstrap"
import smpitTaros from "../assets/img/smpit_taros.jpg";
import {useNavigate} from 'react-router-dom';

const WebProfilHome = ()=>{
    let navigate = useNavigate();
    return (
    <div className="profil w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>PROFIL SMPIT TAROS</h1>
            </Col>
          </Row>
          <Row>
            <Col className='smpit'>
              <img src={smpitTaros} alt="smpit-img" />
            </Col>
            <Col>
              <h2 className='visi fw-bold'>Visi</h2>
              <p>Mewujudkan Sekolah Menengah Pertama Unggulan yang Berahlak Mulia, Berwawasan Global, Qur'ani dan Berprestasi Tinggi</p>
              <p>SMP IT Taqiyya Rasyida merupakan sekolah di bawah Yayasan Taqiyya Rosyida Kartasura untuk melahirkan generasi yang cerdas, berakhlak mulia, mandiri, berwawasan luas dan mencintai al-qur'an serta mampu mengaktualisasikan nilai-nilai Islam dalam kehidupan sehari - hari.</p>
              <p>Dengan memadukan kurikulum Nasional dan Jaringan Sekolah Islam Terpadu (JSIT), diharapkan mampu menjawab berbagai persoalan pendidikan di era sekarang dan masa depan.</p>
              <button className='btn btn-success btn-lg rounded-2 mt-3' onClick={() => navigate("/profil")}>Lihat Selengkapnya</button>
            </Col>
          </Row>
        </Container>
    </div>
    )
}

export default WebProfilHome;