import bugatti_img from './../../../../../../../../../assets/img/main_bugatti.jpg'
import bugatti_side_img from './../../../../../../../../../assets/img/side_bugatti.jpg'
import bugatti_back_img from './../../../../../../../../../assets/img/back_bugatti.jpg'
import { Navigation, Pagination} from 'swiper/modules';
import s from './CarFullProfileSwiper.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const CarFullProfileSwiper=()=>{
return (
  <>
  <Swiper
    navigation={{
      nextEl:'.next_btn',
      prevEl:'.prev_btn',
    }}
    className={s.mySwiper}
  >
    <SwiperSlide className={s.swiper_slide}>
      <img src={bugatti_img} />
    </SwiperSlide>
    <SwiperSlide className={s.swiper_slide}>
      <img src={bugatti_side_img} alt="" />
    </SwiperSlide>
    <SwiperSlide className={s.swiper_slide}>
      <img src={bugatti_back_img} alt="" />
    </SwiperSlide>
    <button style={{position:'absolute', color:'red'}} className={s.next_btn}>{'назад'}</button>
    <button style={{color:'blue'}} className={s.prev_btn}>{'вперед'}</button>
  </Swiper>
  
  </>
);
}