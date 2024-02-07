import React from "react";
import { Row, Col } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Contoh from '../assets/img/testi/contoh.jpg'; 

function WebPrestasi(){
    return (
        <div className="prestasi-container">
            <Row>
                <div className="judul">
                        <div className="text-wrapper">
                            <div className="text">
                                PRESTASI & KEGIATAN 
                            </div>
                        </div>
                </div>
            </Row>
            <Row>
            <div className="carousel-prestasi-container">
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
                    <div className='carousel-prestasi-isi'>
                        <div className="carousel-prestasi-box">
                           <div className="pres1">
                                <div className="img-container">
                                    
                                </div>
                                <div className="text">
                                    SISWA SMPIT TAQIYYA ROSYIDA <br />
                                    LOLOS SELEKSI PERSIS SOLO U-14
                                </div>
                                <button className="btn btn-warning">Selengkapnya</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-prestasi-isi'>
                        <div className="carousel-prestasi-box">
                            <div className="pres1">
                                <div className="img-container">
                                    
                                </div>
                                <div className="text">
                                    SISWA SMPIT TAQIYYA ROSYIDA <br />
                                    LOLOS SELEKSI PERSIS SOLO U-14
                                </div>
                                <button className="btn btn-warning">Selengkapnya</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-prestasi-isi'>
                        <div className="carousel-prestasi-box">
                            <div className="pres1">
                                <div className="img-container">
                                    
                                </div>
                                <div className="text">
                                    SISWA SMPIT TAQIYYA ROSYIDA <br />
                                    LOLOS SELEKSI PERSIS SOLO U-14
                                </div>
                                <button className="btn btn-warning">Selengkapnya</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-prestasi-isi'>
                        <div className="carousel-prestasi-box">
                            <div className="pres1">
                                <div className="img-container">
                                    
                                </div>
                                <div className="text">
                                    SISWA SMPIT TAQIYYA ROSYIDA <br />
                                    LOLOS SELEKSI PERSIS SOLO U-14
                                </div>
                                <button className="btn btn-warning">Selengkapnya</button>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
                </div> 
            </Row>
        </div>
    )
}

export default WebPrestasi;