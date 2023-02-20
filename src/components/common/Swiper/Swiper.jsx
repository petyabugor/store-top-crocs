import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AirJordan2 from '../../../assets/img/AIR_JORDAN_XXXI_2.jpg';
import AirJordan3 from '../../../assets/img/AIR_JORDAN_XXXI_3.jpg';
import AirJordan4 from '../../../assets/img/AIR_JORDAN_XXXI_4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

function SwiperItem() {
   return (
      <div className="swip-wrapper">
         <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <img
                  src={AirJordan2}
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src={AirJordan3}
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src={AirJordan4}
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src={AirJordan2}
                  alt=""
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src={AirJordan4}
                  alt=""
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}

export default SwiperItem;
