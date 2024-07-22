import s from './CarImgs.module.css'
import { CarFullProfileSwiper } from './CarFullProfileSwiper/CarFullProfileSwiper'
import { useState} from 'react'
import JSZip from 'jszip';  
import { createZip } from '../../../../../../../../helpers/createZip';

export const CarImgs=({carCharacteristic})=>{
  const [currentImg, setCurrentImg]= useState(0)

    const handleCreateZip= async ()=>{
      await createZip(carCharacteristic.images,carCharacteristic?.general?.name)
    }
  
    return (
        <div className={s.car_img_wrappeer}>
                <CarFullProfileSwiper key={currentImg}  currentImg={currentImg} carImgs={carCharacteristic.images}/>
                <div  className={s.suggestes_img}>
                  {carCharacteristic.images.map(elem=>(
                    <div  onClick={()=>setCurrentImg(elem.id-1)} className={s.small_img_wrap}>
                    <img src={elem.img} alt="" className={s.small_img} />
                  </div> ))}
                </div>

                <div className={s.tools_btns}>
                  <button className={`${s.tool_btn} ${s.all_img}`}>
                    Все фото в одном окне
                  </button>
                  <button  onClick={handleCreateZip}  className={s.tool_btn}>Скачать фото</button>
                </div>
              </div>

    )
}