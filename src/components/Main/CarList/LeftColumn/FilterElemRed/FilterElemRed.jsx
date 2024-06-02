import s from './FilterElemRed.module.css'
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'



const FilterElemRed = ({fieldValue ,children}) => {
  const[propertyOn, setPropertyStat]=useState(false);
  const[filterOn,setFilterStat]=useState({
    status: false,
    value:'',
  })
  
  const onsetFilterStat=(e)=>{
    setFilterStat({
      status: true,
      value:e.target.innerText});
      setPropertyStat(false)
  }
 
    return (
        <div tabIndex='0' onBlur={()=>setPropertyStat(false)} className={s.list_box_item}>
          <div className={s.list_item}>
            <div className={s.select_list_item}>
              <div onClick={()=>setPropertyStat(!propertyOn)} className={s.select_box}>
              <div className={s.item_value}>
                <div className={s.multi_filter}>
                  <p className={s.filter_text}>{children}</p>
                  <div className={filterOn.status ? `${s.choose_box} ${s.active}`:`${s.choose_box}`}>
                    <p className={s.pop_up_filter_label}>{filterOn.value}</p>
                    <button onClick={()=>setFilterStat({status: false,})} className={s.pop_up_filter_btn}></button>
                  </div>
                </div>
              </div>
              <button  className={s.item_btn}></button>
              </div>
              <div  className={propertyOn ? `${s.select_list} ${s.active}`:`${s.select_list}`}>
                <div  className={s.select_box_item}>
                {Object.keys(fieldValue).map((fieldValueName,index)=>{
              return (<div onClick={onsetFilterStat} key={index} className={s.select_point}>
              {typeof fieldValue[fieldValueName]==='object' ? fieldValue[fieldValueName]?.name:fieldValue[fieldValueName]}</div>)})}
                  {/* <div onClick={onsetFilterStat} className={s.select_point}>Не находу </div>
                  <div className={s.select_point}>Заводится </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default FilterElemRed