import bugatti_img from './../../../../../../../../assets/img/main_bugatti.jpg'
import bugatti_side_img from './../../../../../../../../assets/img/side_bugatti.jpg'
import bugatti_back_img from './../../../../../../../../assets/img/back_bugatti.jpg'
import { CarFullProfileSwiper } from './CarFullProfileSwiper/CarFullProfileSwiper'
import s from './CarImgs.module.css'

export const CarImgs=()=>{
    return (
        <div className={s.car_img_wrappeer}>

                <CarFullProfileSwiper />
                <div  className={s.suggestes_img}>
                <div onClick={()=>setImg(1)}  className={s.small_img_wrap}>
                  <img src={bugatti_img} alt="" className={s.small_img} />
                </div>
                <div onClick={()=>setImg(2)}  className={s.small_img_wrap}>
                  <img src={bugatti_side_img} alt="" className={s.small_img} />
                </div>
                <div  onClick={()=>setImg(3)}className={s.small_img_wrap}>
                  <img src={bugatti_back_img} alt="" className={s.small_img} />
                </div>
                <div  onClick={()=>setImg(4)}className={s.small_img_wrap}>
                  <img src={bugatti_side_img} alt="" className={s.small_img} />
                </div>
                </div>
                <div className={s.tools_btns}>
                  <button className={`${s.tool_btn} ${s.all_img}`}>
                    Все фото в одном окне
                  </button>
                  <button className={s.tool_btn}>Скачать фото</button>
                </div>
              </div>

    )
}