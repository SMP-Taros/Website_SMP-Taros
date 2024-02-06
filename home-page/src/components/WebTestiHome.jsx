import { Container, Row, Col,} from "react-bootstrap";

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
 
const WebTestiHome = ()=>{
    return (
        <div className="testimoni w-100 min-vh-100">
          <Container>
            <Row className="testi-judul">
              <Col>
              <h1 className='text-center fw-bold my-4'>TESTIMONI</h1>
              </Col>
            </Row>
          </Container>
          <div className="carousel-container">
            <Swiper 
                slidesPerView={1}
                spaceBetween={50}
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
      </div>
      
    )
}

export default WebTestiHome;