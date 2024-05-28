import s from './LeftColumn.module.css'
import FilterElem from './FilterElem/FilterElem'
import FilterElemProperty from './FilterElemProperty/FilterElemProperty'
import { useSelector,useDispatch } from 'react-redux'






function LeftColumn() {
    const filters = useSelector((state) => {
      return state.user.filters;
    });
    const dispatch = useDispatch();

    let numberArr = [];
    for (let i = 1; i <= Object.keys(filters).length; i++) {
      numberArr.push(i);
    }

    return (
    <div className={s.left_column_wrap}>
        <div className={s.filter_title_block}>
            <p className={s.filters_subtitle}>Фильтры</p>
            <button className={s.reset_all_btn}>Сбросить все</button>
        </div>
        <div className={s.car_choose_property_list}>
            {/* {Object.keys(filters).map((item)=>{return <FilterElem  filterName={item}>{filters}</FilterElem> })} */}
            <FilterElem  filterName={'transportType'}>Все </FilterElem>
            <FilterElem filterName={'Марка'} >Марка</FilterElem>
            <FilterElem filterName={'Cостояние'} >Cостояние</FilterElem>
            <FilterElem filterName={'Тип'} >Тип</FilterElem>
            <FilterElemProperty filterName={'Одометр'}>Одометр</FilterElemProperty>
            <FilterElemProperty filterName={'Название'}>Название</FilterElemProperty>
            <FilterElem filterName={'Модель'} >Модель</FilterElem>
            <FilterElem filterName={'Тип двигателя'} >Тип двигателя</FilterElem>
            <FilterElem filterName={'Передача'} >Передача</FilterElem>
            <FilterElem filterName={'Тип топлива'} >Тип топлива</FilterElem>
            <FilterElem filterName={'Приводной механизм'} >Приводной механизм</FilterElem>
            <FilterElem filterName={'Цилиндр'} >Цилиндр</FilterElem>
            <FilterElem filterName={'Тип кузова'} >Тип кузова</FilterElem>
            <FilterElem filterName={'Статус'} >Статус</FilterElem>
        </div>
        <button className={s.property_show_results_btn}>Показать результаты</button>
        {/* <div className={s.selested_extendios}>
            <div className={s.left_c_first_row}>
                <div className={s.selected_extend_block}>
                    <div className={s.select_properties_name}>
                        Автомобиль
                    </div>
                    <button className={s.properties_closed_btn}></button>
                </div>
                <div className={s.selected_extend_block}>
                    <div className={s.select_properties_name}>
                        2000 - 2020 гг.
                    </div>
                    <button className={s.properties_closed_btn}></button>
                </div>
            </div>
            <div className={s.selected_extend_block}>
                <div className={s.select_properties_name}>
                    15 000 - 250 000 км
                </div>
                <button className={s.properties_closed_btn}></button>
            </div>
        </div> */}
    </div>           
     
    )
  }
  
  export default LeftColumn;