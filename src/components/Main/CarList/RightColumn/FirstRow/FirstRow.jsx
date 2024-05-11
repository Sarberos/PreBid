import s from './FirstRow.module.css'


function FirstRow() {
    return (
       <div className={s.right_columns_first_row}>
            <div className={s.find_amount_block}>
                <p className={s.find_amount_title}>Найдено</p>
                <p className={s.find_amount_value}>120 результатов</p>
            </div>
            <div className={s.sort_main_list_param}>
                <div className={s.first_sort_param}>
                    <p className={s.first_sort_param_title}>Сортировать</p>
                    <div className={s.change_active_sort_param_wrap}>
                        <div className={s.change_sort_param_wrap}>
                            <div className={s.basic_sort_param}> Сначала бижайшие</div>
                            <span className={s.change_param_img_wrap}>
                                <img src="./img/accordio_arrow.svg" className={s.change_param_img}/>
                            </span>
                        </div>
                        <div className={s.change_param_pop_up}>
                            <div className={`${s.basic_sort_param} ${s.choose_sort_param}`}> Сначала старые</div>
                        </div>
                    </div>
                </div>
                <div className={s.second_sort_param}>
                    <p className={s.sec_sort_param_title}>Отображать по</p>
                    <div className={s.change_active_disp_param_wrap}>
                        <div className={s.change_disp_param_wrap}>
                            <div className={s.basic_disp_param}> 10</div>
                            <span className={s.change_param_img_wrap}>
                                <img src="./img/accordio_arrow.svg" className={s.change_param_img}/>
                            </span>
                        </div>
                        <div className={s.change_disp_param_pop_up}>
                            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}> 20</div>
                            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}> 30</div>
                            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}> 40</div>
                            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}> 50</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${s.customization_wrap} ${s.list_active}`}>
                <div className={s.visualize_img_block}>
                    <img src="./img/listActive.svg" alt="" className={s.list_visualize}/>
                </div>
                <div className={s.visualize_img_block}>
                    <img src="./img/tilsDisable.svg" alt="" className={s.list_visualize}/>
                </div>
            </div>

            <div className={`${s.customization_wrap} ${s.tiles_active}`}>
                <div className={s.visualize_img_block}>
                    <img src="./img/listDisable.svg" alt="" className={s.list_visualize}/>
                </div>
                <div className={s.visualize_img_block}>
                    <img src="./img/tilesActive.svg" alt="" className={s.list_visualize}/>
                </div>
            </div>
        </div>
    )
  }
  
  export default FirstRow;