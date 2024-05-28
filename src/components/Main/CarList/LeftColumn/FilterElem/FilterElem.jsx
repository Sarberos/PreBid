import s from './FilterElem.module.css'
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'



const FilterElem = ({filterName ,children}) => {

  const[filterOn,setFilterStat]=useState(false)
  const filters = useSelector((state) => {
    return state.user.filters;
  });



    const[propertyOn, setPropertyStat]=useState(false);
    return (
      <div tabindex="0" onBlur={()=>{setPropertyStat(false)}} className={s.filter_element}>
        <div  onClick={()=>{setPropertyStat(!propertyOn)}} className={propertyOn ?`${s.property_trigger} ${s.active}`:s.property_trigger}>
          <div className={s.property_trigger_title}>{children}</div>
          <div className={filterOn? `${s.pop_up_filter_wrap} ${s.active}`:s.pop_up_filter_wrap}>
            <div className={s.pop_up_filter}>
              <p className={s.pop_up_filter_label}></p>
              <button className={s.pop_up_filter_btn}></button>
            </div>
          </div>
          <span  className={s.property_accordion_arrow}>
            <button  className={s.property_on_btn}></button>
          </span>
           
         
        </div>
        <div className={propertyOn ?`${s.property_trigger_accordion} ${s.active}`: s.property_trigger_accordion}>
          <div className={s.properties_wrap}>
            <div onClick={()=>setFilterStat(!filterOn)}  className={s.property_value}>Не на ходу </div>
            <div  className={s.property_value}>Заводится</div>
  
          </div>
        </div>
      </div>
    );
}
export default FilterElem