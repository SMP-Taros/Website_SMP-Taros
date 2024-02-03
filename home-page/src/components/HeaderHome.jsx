// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import foto/gambar
import Contoh from '../assets/img/testi/contoh.jpg'; 
import Carousel1 from '../assets/img/carousel/carol1.jpg';
import Carousel2 from '../assets/img/carousel/carol2.jpeg';
import Carousel3 from '../assets/img/carousel/carol3.png';
import Carousel4 from '../assets/img/carousel/carol4.png';

const Hero = () => {
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
                            <img src={Carousel1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='header-home-isi'>
                        <div className="header-home-box">
                            <img src={Carousel2} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='header-home-isi'>
                        <div className="header-home-box">
                            <img src={Carousel3} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='header-home-isi'>
                        <div className="header-home-box">
                            <img src={Carousel4} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div> 
      </div>
    )
}

export default Hero;