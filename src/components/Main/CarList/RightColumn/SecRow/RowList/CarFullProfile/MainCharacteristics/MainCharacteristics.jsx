import s from './MainCharacteristics.module.css'
import copy_img from './../../../../../../../../assets/img/copy_img.svg'
import { getCarMainFields, getCarAditionalFields } from '../../../../../../../../consts/carFullProfileTabs/carCharacteristics'

export const MainCharacteristics=({carCharacteristic})=>{


    return (
        <div className={s.car_charact_с}>
        <div className={s.main_charact}>
          <div className={s.charact_title}>Основные характеристики</div>
          <div className={s.property_list}>
            {getCarMainFields(carCharacteristic).map(elem=>(
              <div className={s.property_row}>
              <span className={s.property_title}>{elem.title}</span>
              <span className={s.property_value}>{elem.value}</span>
            </div>
            ))}
          </div>
        </div> 
        <div className={s.additional_charact}>
          <div className={s.charact_title}>Дополнительные сведения</div>
          <div className={s.property_list}>
            {getCarAditionalFields(carCharacteristic).map(elem=>(
              <div className={s.property_row}>
              <span className={s.property_title}>{elem.title}</span>
              <span className={s.property_value}>{elem.value}</span>
            </div>
            ))}
          </div>
        </div>
      </div>

    )
}