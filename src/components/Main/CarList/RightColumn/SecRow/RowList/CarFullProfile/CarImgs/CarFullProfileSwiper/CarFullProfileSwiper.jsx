import { Navigation} from 'swiper/modules';
import s from './CarFullProfileSwiper.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import nextImg from './../../../../../../../../../assets/img/nextArrow.png'


export const CarFullProfileSwiper=({carImgs,currentImg})=>{
  

return (
  <div style={{position: 'relative'}}>  
    <Swiper
      className={s.mySwiper}
      initialSlide={currentImg}
      modules={[Navigation]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
    >
      {carImgs.map((elem, index) => (
        <SwiperSlide style={{zIndex: 1,}} className={s.swiper_slide} key={index}>
          <img src={elem.img} alt={`Car image ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '10px',
          zIndex: 10,
          transform: "rotate(180deg)",
        }}
        className="custom-prev"
      >
        <img src={nextImg} alt="" />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '10px',
          zIndex: 5,
        }}
        className="custom-next"
      >
        <img src={nextImg} alt="" />
      </div>
    </div>
);
}