import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Carousel} from "react-bootstrap"

import smpitTaros from "../assets/img/smpit_taros.jpg";
 
import {beritaSekolah, dataSwiper} from "../data/index";
import { fasilitasSekolah } from '../data/index';

import Fasilitas1 from "../assets/img/fasilitas/kantin.png";
import Fasilitas2 from "../assets/img/fasilitas/masjid.png";
import Fasilitas3 from "../assets/img/fasilitas/aula.png";
import Fasilitas4 from "../assets/img/fasilitas/perpus.png";

import Kontak1 from "../assets/img/kontak/email.png";
import Kontak2 from "../assets/img/kontak/ig.png";
import Kontak3 from "../assets/img/kontak/fb.png";
import Kontak4 from "../assets/img/kontak/telp.png";

import {useNavigate} from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Contoh from '../assets/img/testi/contoh.jpg';


const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      {/* HEADER */}
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </header>
      {/* HEADER  */}

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
          </Container>
      </div>
      <div className="carousel-container">
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
            // scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Alhamdulillah, Semoga kehadiran SMP IT Taqiyya Rosyida dapat mewujudkan generasi Rabbani, generasi para penghafal Al Qur'an yang insyaAllah menjadi para penerus kejayaan Umat. Jikalau diri kita belum mampu mencapainya, maka anak-anak dan cucu-cucu kita yang kita persiapkan untuk menggapainya, dengan kita masukkan ke Ponpes atau SMP IT Taqiyya Rosyida"
                            </div>
                            <div className="text-author">
                                Drs. H. Sriyadi
                            </div>
                            <div className="text-author">
                                Dewan Pembina Yayasan Taqiyya Rosyida
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "SMP IT Taqiyya Rosyida merupakan jawaban atas kegelisahan akan hadirnya    sekolah yang mampu memadukan antara pendidikan akademik dan pendidikan akhlak yang diperkuat dengan pendidikan Al-Qur'an serta didukung oleh guru dengan kompetensi pedagogis, sosial, profesional dan kompetensi keIslaman baik. Selamat berjuang. Semoga mampu melahirkan generasi yang berakhlak mulia, berwawasan luas qur'ani dan berprestasi"
                                "
                            </div>
                            <div className="text-author">
                                Dr. Retno Wahyuningsih, S.Si., M.Pd
                            </div>
                            <div className="text-author">
                                Tim Penjamin Mutu Yayasan Taqiyya Rosyida, Dosen IAIN Surakarta
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Saya yakin, dengan berdirinya SMP IT Taqiyya Rosyida akan mampu meneruskan prestasi dan keberhasilan SD IT Taqiyya Rosyida selama ini. Perpaduan kurikulum dunia dan ukhrowi menjadikan anak bisa sukses di dunia dan akhirat"
                            </div>
                            <div className="text-author">
                              Arif Priyanto, S.Pd.I
                            </div>
                            <div className="text-author">
                                Direktur Pendidikan Yayasan Taqiyya Rosyida, Kepala Sekolah Berprestasi Tahun 2016
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Anak adalah amanah bagi orang tua, sehingga kita punya tanggung jawab yang besar untuk mereka. Jangan sampai salah pilih sekolah. InsyaAllah Yayasan Taqiyya Rosyida sudah membuktikan bahwa umur bukan pengukur kualitas sekolah, tapi kesungguhan dari seluruh civitas sekolah untuk selalu berbenah dan melangkah maju itulah penentunya"
                            </div>
                            <div className="text-author">
                                Antin Suhermin, S.Si
                            </div>
                            <div className="text-author">
                                Guru SMK N 1 Sawit, Orang Tua Murid SD IT dan SMP IT Taqiyya Rosyida
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div> 
      {/* TESTIMONI */}

      {/* Kontak Page */}
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
      {/* Kontak Page */}

      
    </div>
  )
}

export default HomePage;
