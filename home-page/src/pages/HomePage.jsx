import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap"
import smpitTaros from "../assets/img/smpit_taros.jpg";



import {beritaSekolah, dataSwiper} from "../data/index";
import { fasilitasSekolah } from '../data/index';

import Fasilitas1 from "../assets/img/fasilitas/kantin.png";
import Fasilitas2 from "../assets/img/fasilitas/masjid.png";
import Fasilitas3 from "../assets/img/fasilitas/aula.png";
import Fasilitas4 from "../assets/img/fasilitas/perpus.png";

import {useNavigate} from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate();

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
      {/* profil sekolah */}

      {/* Berita Terbaru */}
      <div className='berita w-100 min-vh-100'>
        <Row>
          <Col>
            <h1 className='text-center fw-bold'>BERITA TERBARU</h1>
            <p className='text-center'>Dapatkan berita terbaru terkait agenda, kegiatan dan dokumentasi SMP IT Taqiyya Rosyida di sini</p>
          </Col>
        </Row>
        <Row>
          {beritaSekolah.map((berita) => {
            return <Col key={berita.id}>
              <img src={berita.image} alt="berita1" className='w-100 mb-5 rounded-2'/>
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
      </div>
      {/* Berita Terbaru */}
      
      {/* Komponen ppdb */}
       <div className='ppdb-background'>
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
    
        </div>
      {/* Komponen ppdb */}

      {/* INFORMASI*/}
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
              <Row className="ekskul-btn">
                <div className="ekskul-bt">
                  <button
                    className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/informasi")}>
                    Lihat Selengkapnya
                  </button>
                </div>
              </Row>
            </Row>
          </div>

        </div>  
      
      {/* INFORMASI */}

      {/* PENGUMUMAN */}
        <div className="pengumuman w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
              <h1 className='text-center fw-bold'>PENGUMUMAN</h1>
              </Col>
            </Row>
          </Container>

          <div className='pengumuman-card'>
            <div className='pengumuman-container'>
              <Container>
                <Row className="event1">
                  <Col>
                    <Card
                      style={{
                        width: "24rem",
                        height: "20rem",
                        borderRadius: "5px",
                        background: "#D9D9D9",
                      }}
                    >
                      <CardBody>
                      </CardBody>
                    </Card>
                    <CardTitle className="text-center mt-4"><h4>NEXT EVENT</h4></CardTitle>
                        <CardText className="text-center">
                        </CardText>
                  </Col>
                </Row>

                <Row className="event2">
                  <Col>
                    <Card
                      style={{
                        width: "24rem",
                        height: "20rem",
                        borderRadius: "5px",
                        background: "#D9D9D9",
                      }}
                    >
                      <CardBody>
                      </CardBody>
                    </Card>
                    <CardTitle className="text-center mt-4"><h4>NEXT EVENT(2)</h4></CardTitle>
                        <CardText className="text-center">
                        </CardText>
                  </Col>
                </Row>

                <Row className="event3">
                  <Col>
                    <Card className="center"
                      style={{
                        width: "24rem",
                        height: "20rem",
                        borderRadius: "5px",
                        background: "#D9D9D9",
                      }}
                    >
                      <CardBody>
                      </CardBody>
                    </Card>
                    <CardTitle className="text-center mt-4"><h4>OPEN RECRUITMENT GURU & KARYAWAN</h4></CardTitle>
                        <CardText className="text-center">
                        </CardText>
                  </Col>
                </Row>
              </Container>
            </div> 
          </div>
          
          <Row className="event-btn">
                <div className="event-bt">
                  <button
                    className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/pengumuman")}>
                    Lihat Selengkapnya
                  </button>
                </div>
              </Row>
        </div>  
      {/* PENGUMUMAN */}
      
      {/* TESTIMONI */}
        <div className="testimoni w-100 min-vh-100">
          <Container>
            <Row className="testi-judul">
              <Col>
              <h1 className='text-center fw-bold my-4'>TESTIMONI</h1>
              </Col>
            </Row>
            <Row className="swiper2">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {dataSwiper.map((data) => {
                  return <SwiperSlide  key={data.id}>
                    <div className="people">
                      <img src={data.image} alt="" className="mb-5" />
                    </div>
                    <p className="desc">{data.desc}</p>
                    <div className="ket">
                        <h5 className="mt-3">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.position}</p>
                    </div>
                    </SwiperSlide>;
                })} 
              </Swiper> 
            </Row>
          </Container>

        </div>  
      {/* TESTIMONI */}

                
    </div>
  )
}

export default HomePage;
