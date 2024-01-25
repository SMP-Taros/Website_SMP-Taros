import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import smpitTaros from "../assets/img/smpit_taros.jpg";

import Berita1 from "../assets/img/berita/inden24.png";
import Berita2 from "../assets/img/berita/brosurPpdb24.png";
import Berita3 from "../assets/img/berita/persis24.png";
import Berita4 from "../assets/img/berita/akreditasi.png";

import {beritaSekolah} from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          
        </Container>
      </header>

      {/* profil sekolah */}
      <div className="profil w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Profil SMPIT TAROS</h1>
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
              <button className='btn btn-success btn-lg rounded-2 mt-3'>See More</button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* profil sekolah */}

      {/* Berita Terbaru */}
      <div className='berita w-100 min-vh-100'>
        <Row>
          <Col>
            <h1 className='text-center fw-bold'>Berita Terbaru</h1>
            <p className='text-center'>Dapatkan berita terbaru terkait agenda, kegiatan dan dokumentasi SMP IT Taqiyya Rosyida di sini</p>
          </Col>
        </Row>
        <Row>
          {beritaSekolah.map((berita) => {
            return <Col key={berita.id}>
              <img src={berita.image} alt="berita1" className='w-100 mb-5 rounded-2'/>
              <div className='clock mb-4'> 
                <i className={berita.clock}></i>
              </div>
            </Col>
          })}
        </Row>
      </div>
      {/* Berita Terbaru */}

    </div>
  )
}

export default HomePage;
