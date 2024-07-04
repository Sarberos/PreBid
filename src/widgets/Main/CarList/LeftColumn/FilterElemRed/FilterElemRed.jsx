import s from './FilterElemRed.module.css'
import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'



const FilterElemRed = ({fieldValue ,children}) => {
  const[propertyOn, setPropertyStat]=useState(false);
  const[filterOn,setFilterStat]=useState(false)   
  const[filtersArr,setFiltersArr]=useState([])                                                 
  const onsetFilterStat=(e)=>{
    if(filtersArr.find(filter=>filter===e.target.innerText)){
      console.log('Элемент существует')
    }else{
      setFiltersArr([...filtersArr, e.target.innerText])
    }
    setFilterStat(true)
    setPropertyStat(false)
  }
  const removeFilter=(filterName)=>{
    setFiltersArr(filtersArr.filter(filter=> filter !==filterName))
  }
  const transFilterName=(name)=>{
    let  transName=''
    switch (name) {
      case 'odometer':
        transName='Одометр'
        break;
    
      case 'year':
        transName='Год'
        break;
    
      case 'keys':
        transName='Ключи'
        break;
    
      case 'transportHighlight':
        transName='Состояние'
        break;
    
      case 'transportTransmission':
        transName='Тип трансмисии'
        break;
    
      case 'transportName':
        transName='Название'
        break;
    
      case 'transportDrive':
        transName='Привод'
        break;
    
      case 'transportFuel':
        transName='Тип топлива'
        break;
    
      case 'transportBrand':
        transName='Марка'
        break;
      case 'transportModel':
        transName='Модель'
        break;
      case 'transportType':
        transName='Тип транспорта'
        break;
      case 'transportColor':
        transName='Цвет'
        break;
      default:
        return name;
    }
    return transName;
  }

    return (
        <div tabIndex='0' onBlur={()=>setPropertyStat(false)} className={s.list_box_item}>
          <div className={s.list_item}>
            <div className={s.select_list_item}>
              <div onClick={()=>setPropertyStat(!propertyOn)} className={s.select_box}>
              <div className={s.item_value}>
                <div  className={s.multi_filter}>
                  <p className={s.filter_text}>{transFilterName(children)}</p>
                  {filtersArr.map(filter=>(
                  <div className={filterOn? `${s.choose_box} ${s.active}`:`${s.choose_box}`}>
                      <p className={s.pop_up_filter_label} >{filter}</p>
                      <button onClick={(e) => { e.stopPropagation(); removeFilter(filter) }} className={s.pop_up_filter_btn}></button>
                  </div> 
                  ))}
                </div>
              </div>
              <button  className={s.item_btn}></button>
              </div>
              <div  className={propertyOn ? `${s.select_list} ${s.active}`:`${s.select_list}`}>
                <div  className={s.select_box_item}>
                {Object.keys(fieldValue).map((fieldValueName,index)=>{
              return (<div onClick={onsetFilterStat} key={index} className={s.select_point}>
              {typeof fieldValue[fieldValueName]==='object' ? [fieldValue[fieldValueName]?.name?fieldValue[fieldValueName]?.name:fieldValue[fieldValueName]?.value]:fieldValue[fieldValueName]}</div>)})}
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