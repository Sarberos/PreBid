import s from './LeftColumn.module.css'
import FilterElemProperty from './FilterElemProperty/FilterElemProperty'
import { useSelector,useDispatch } from 'react-redux'
import FilterElemRed from './FilterElemRed/FilterElemRed';



function LeftColumn() {
    const filters =useSelector((state) => {return state.user.filters;}); /// array of filters name ...
    const dispatch = useDispatch();

    return(
    <div className={s.left_column_wrap}>
        <div className={s.filter_title_block}>
            <p className={s.filters_subtitle}>Фильтры</p>
            <button className={s.reset_all_btn}>Сбросить все</button>
        </div>
        <div className={s.car_choose_property_list}>
            {Object.keys(filters).map((fieldName) => (
            <FilterElemRed key={fieldName}  fieldValue={filters[fieldName]} >{fieldName}</FilterElemRed> ))}
        </div>
        <button className={s.property_show_results_btn}>Показать результаты</button>
    </div>      
    )
  }
  
  export default LeftColumn;