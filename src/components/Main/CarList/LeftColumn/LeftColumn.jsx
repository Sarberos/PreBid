import s from './LeftColumn.module.css'
import accordionArrow from './../../../../assets/img/accordio_arrow.svg'

const FilterElem = ({filterName}) => {
    return(
  <div className={s.property_trigger}>
    <div className={s.property_trigger_title}>{filterName}</div>
    <span className={s.property_accordion_arrow}>
      <img src={accordionArrow} className={s.property_accordion_arrow_img} />
    </span>
  </div>
    )
};


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
            
            {/* <div className={s.property_trigger_accordion}>
                <ul className={s.sostoyanie_choice}>
                    <li className={s.sostoyanie_value}>Не на ходу</li>
                    <li className={s.sostoyanie_value}>Заводится</li>
                </ul>
            </div> */}
           <FilterElem filterName={'Тип'} />
            {/* <div className={s.property_trigger_accordion}>
                <ul className={s.type_choice}>
                    <li className={s.sostoyanie_value}>Автомобиль</li>
                </ul>
            </div> */}
            <div className={s.property_trigger}>
                <div className={s.property_trigger_title}>Одометр</div>
                <div className={s.property_trigger_from_to_block}>

                    <div className={s.property_from_to_block}>
                        <div className={s.property_year_block}>
                            <div className={s.from_to_label_block}>
                                <label className={s.from_to_label}> 2022</label>
                            </div>

                            <div className={s.from_to_img_block}>
                                <img src={accordionArrow} className={s.property_accordion_arrow_img_small}/>
                            </div>
                        </div>
                        <div className={s.property_year_midle_block}>—</div>
                        <div className={s.property_year_block}>
                            <div className={s.from_to_label_block}>
                                <label className={s.from_to_label}> 2022</label>
                            </div>
                            <div className={s.from_to_img_block}>
                                <img src={accordionArrow}className={s.property_accordion_arrow_img_small}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={s.property_trigger}>
                <div className={s.property_trigger_title}>Название</div>
                <div className={s.property_from_to_block}>
                    <div className={s.property_year_block}>
                        <div className={s.from_to_label_block}>
                            <label className={s.from_to_label}> 2022</label>
                        </div>

                        <div className={s.from_to_img_block}>
                            <img src={accordionArrow} className={s.property_accordion_arrow_img_small}/>
                        </div>
                    </div>
                    <div className={s.property_year_midle_block}>—</div>
                    <div className={s.property_year_block}>
                        <div className={s.from_to_label_block}>
                            <label className={s.from_to_label}> 2022</label>
                        </div>
                        <div className={s.from_to_img_block}>
                            <img src={accordionArrow}className={s.property_accordion_arrow_img_small}/>
                        </div>
                    </div>
                </div>
            </div>
            <FilterElem filterName={'Марка'} />
            <FilterElem filterName={'Модель'} />
            <FilterElem filterName={'Тип двигателя'} />
            {/* <div className={s.property_trigger}>
                <div className={`${s.property_trigger_title} ${s.active_text}`}>Тип двигателя</div>
                <span className={s.property_accordion_arrow} >
                    <img src={accordionArrow} className={s.property_accordion_arrow_img}/>
                </span>
            </div> */}
            <FilterElem filterName={'Передача'} />
            <FilterElem filterName={'Тип топлива'} />
            {/* <div className={s.property_trigger_accordion} >
                <ul className={s.type_choice}>
                    <li className={s.sostoyanie_value}>Бензин</li>
                    <li className={s.sostoyanie_value}>Гибрид</li>
                </ul>
            </div> */}
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