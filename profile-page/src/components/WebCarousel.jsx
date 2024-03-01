import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Contoh from "/image/taros.jpeg";

function WebCarousel() {
    return (
        <div className="carousel-container">
            <div className="text-wrapper">
                <div className="text">SAMBUTAN LAINNYA</div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Anak adalah amanah bagi orang tua, sehingga kita punya tanggung jawab yang besar untuk mereka.
                                Jangan sampai salah pilih sekolah. InsyaAllah Yayasan Taqiyya Rosyida sudah membuktikan bahwa umur bukan pengukur kualitas sekolah, tapi kesungguhan dari seluruh civitas sekolah untuk selalu berbenah dan melangkah maju itulah penentunya.
                                "
                            </div>
                            <div className="text-author">
                                Sahabat Jannah
                            </div>
                            <div className="text-author">
                                Islami
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Anak adalah amanah bagi orang tua, sehingga kita punya tanggung jawab yang besar untuk mereka.
                                Jangan sampai salah pilih sekolah. InsyaAllah Yayasan Taqiyya Rosyida sudah membuktikan bahwa umur bukan pengukur kualitas sekolah, tapi kesungguhan dari seluruh civitas sekolah untuk selalu berbenah dan melangkah maju itulah penentunya.
                                "
                            </div>
                            <div className="text-author">
                                Sahabat Jannah
                            </div>
                            <div className="text-author">
                                Islami
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Anak adalah amanah bagi orang tua, sehingga kita punya tanggung jawab yang besar untuk mereka.
                                Jangan sampai salah pilih sekolah. InsyaAllah Yayasan Taqiyya Rosyida sudah membuktikan bahwa umur bukan pengukur kualitas sekolah, tapi kesungguhan dari seluruh civitas sekolah untuk selalu berbenah dan melangkah maju itulah penentunya.
                                "
                            </div>
                            <div className="text-author">
                                Sahabat Jannah
                            </div>
                            <div className="text-author">
                                Islami
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-isi'>
                        <div className="carousel-box">
                            <img src={Contoh} />
                            <div className="text-quotes">
                                "Anak adalah amanah bagi orang tua, sehingga kita punya tanggung jawab yang besar untuk mereka.
                                Jangan sampai salah pilih sekolah. InsyaAllah Yayasan Taqiyya Rosyida sudah membuktikan bahwa umur bukan pengukur kualitas sekolah, tapi kesungguhan dari seluruh civitas sekolah untuk selalu berbenah dan melangkah maju itulah penentunya.
                                "
                            </div>
                            <div className="text-author">
                                Mamet ganteng tzyy
                            </div>
                            <div className="text-author">
                                proplayer ep ep
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default WebCarousel;