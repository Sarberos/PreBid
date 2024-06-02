import s from './FilterElem.module.css'
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'



const FilterElem = ({fieldValue ,children}) => {
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
 
  // const printChoosingFilter=(obj)=>{
  //   return Object.keys(obj).map(objKeys=>{typeof obj[objKeys]==='object' ? Object.keys(obj[objKeys]).map(objObjKeys=>{
  //     const paramName='';
  //     objObjKeys==="name"?paramName='name':objObjKeys==='value'?paramName='name':''
  //     console.log((obj[objKeys]?.paramName))}) : console.log((obj[objKeys]));})
  // }
 


    return (
      <div tabindex="0" onBlur={()=>{setPropertyStat(false)}} className={s.filter_element}>

        <div  onClick={()=>{setPropertyStat(!propertyOn)}} className={propertyOn ?`${s.property_trigger} ${s.active}`:s.property_trigger}>
          <div className={s.property_trigger_title}>{children}</div>
          <div className={filterOn.status? `${s.pop_up_filter_wrap} ${s.active}`:s.pop_up_filter_wrap}>

            <div onClick={()=>setFilterStat({status: false,})} className={s.pop_up_filter}>
              <p className={s.pop_up_filter_label}>{filterOn.value}</p>
              <button className={s.pop_up_filter_btn}></button>
            </div>

          </div>
          <span  className={s.property_accordion_arrow}>
            <button  className={s.property_on_btn}></button>
          </span>
        </div>
        <div className={propertyOn ?`${s.property_trigger_accordion} ${s.active}`: s.property_trigger_accordion}>
          <div className={s.properties_wrap}>
            {Object.keys(fieldValue).map((fieldValueName,index)=>{
              return (<div onClick={onsetFilterStat} key={index} className={s.property_value}>
              {typeof fieldValue[fieldValueName]==='object' ? fieldValue[fieldValueName]?.name:fieldValue[fieldValueName]}</div>)})}
            {/* <div onClick={()=>setFilterStat(!filterOn)}  className={s.property_value}>Не на ходу </div>
            <div  className={s.property_value}>Заводится</div>*/}
          </div>
        </div>
      </div>
    );
}
export default FilterElem