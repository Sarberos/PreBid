import s from './TimeSort.module.css'
import accordionArrow_svg from './../../../../../../assets/img/accordio_arrow.svg'
import { useState } from 'react';
function TimeSort() {
  const [firstSort, changeStatus]=useState(false)

  // let activeSort=()=>{
  //   changeStatus(true);
  // }
    return (
      <div className={s.first_sort_param}>
        <p className={s.first_sort_param_title}>Сортировать</p>
        <div className={s.change_active_sort_param_wrap} onClick={()=>changeStatus(true)}>
          <div className={s.change_sort_param_wrap}>
            <div className={s.basic_sort_param}> Сначала бижайшие</div>
            <span className={s.change_param_img_wrap}>
              <img src={accordionArrow_svg} className={s.change_param_img} />
            </span>
          </div>
          <div className={s.change_param_pop_up}>
            <div className={`${s.basic_sort_param} ${s.choose_sort_param}`}>
              Сначала старые
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TimeSort;