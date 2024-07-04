import s from './FilterElemProperty.module.css'
import {useState} from 'react'



const FilterElemProperty = ({filterName}) => {
  const[propertyOn, setPropertyStat]=useState(false);

    return (
      <div
        tabindex="0"
        onBlur={() => {
          setPropertyStat(false);
        }}
        className={s.filter_element}
      >
        <div onClick={()=>{setPropertyStat(!propertyOn)}} className={s.property_trigger}>
          <div className={s.property_trigger_title}>{filterName}</div>
          <div className={s.reset_wrap}>
            <button className={s.reset_txt}>Сбросить</button>
            <button className={s.reset_btn}></button>
          </div>
        </div>
        <div
          className={propertyOn
              ? `${s.property_trigger_extendion} ${s.active}`
              : s.property_trigger_extendion
          }
        >
        </div>
      </div>
    );
};

export default FilterElemProperty;