import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Image1 from '/image/home-swiper/carol1.jpg'
import Image2 from '/image/home-swiper/carol2.jpeg'
import Image3 from '/image/home-swiper/carol3.png'
import Image4 from '/image/home-swiper/carol4.png'

function HeaderHome() {
    return (
        <div className="header-home w-100 min-vh-100">
            <div className="header-home-container">
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
                        <div className='header-home-isi'>
                            <div className="header-home-box">
                                <img src={Image1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-home-isi'>
                            <div className="header-home-box">
                                <img src={Image2} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-home-isi'>
                            <div className="header-home-box">
                                <img src={Image3} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-home-isi'>
                            <div className="header-home-box">
                                <img src={Image4} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HeaderHome
