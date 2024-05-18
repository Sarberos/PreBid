import s from './LeftColumn.module.css'
import FilterElem from './FilterElem/FilterElem'
import FilterElemProperty from './FilterElemProperty/FilterElemProperty'





function LeftColumn() {
    return (
    <div className={s.left_column_wrap}>
        <div className={s.filter_title_block}>
            <p className={s.filters_subtitle}>Фильтры</p>
            <button className={s.reset_all_btn}>Сбросить все</button>
        </div>
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
        <div className={s.car_choose_property_list}>
            <FilterElem filterName={'Все транспортные средства'} />
            <FilterElem filterName={'Cостояние'} />
            <FilterElem filterName={'Тип'} />
            <FilterElemProperty filterName={'Одометр'}/>
            <FilterElemProperty filterName={'Название'}/>
            <FilterElem filterName={'Марка'} />
            <FilterElem filterName={'Модель'} />
            <FilterElem filterName={'Тип двигателя'} />
            <FilterElem filterName={'Передача'} />
            <FilterElem filterName={'Тип топлива'} />
            <FilterElem filterName={'Приводной механизм'} />
            <FilterElem filterName={'Цилиндр'} />
            <FilterElem filterName={'Тип кузова'} />
            <FilterElem filterName={'Статус'} />
        </div>
        <button className={s.property_show_results_btn}>Показать результаты</button>
    </div>            
    )
  }
  
  export default LeftColumn;