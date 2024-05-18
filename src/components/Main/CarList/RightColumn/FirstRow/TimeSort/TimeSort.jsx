import s from './TimeSort.module.css'
import accordionArrow_svg from './../../../../../../assets/img/accordio_arrow.svg'
import { useState } from 'react';

function TimeSort({isSort,changeSort}) {
  const [firstSort, changeSortStatus]=useState(false);
  const [statusTitle, changeStatusTitle]=useState(true);

  
  let changeTimeStatus=()=>{
    changeSortStatus(!firstSort)
  }
  let changeSortTitle=()=>{
    changeStatusTitle(!statusTitle)
    changeSortStatus(!firstSort)
  }


    return (
      <div  tabindex="0" onBlur={() => {changeSortStatus(false)}} className={s.first_sort_param}>
        <p className={s.first_sort_param_title}>Сортировать</p>
        <div className={s.change_active_sort_param_wrap} >
          <div  onClick={changeTimeStatus} className={firstSort ?`${s.change_sort_param_wrap} ${s.active}`: s.change_sort_param_wrap}>
            <div className={s.basic_sort_param}>{statusTitle?'Сначала новые':'Сначала старые'}</div>
            <span className={s.change_param_img_wrap}>
              <img src={accordionArrow_svg} className={s.change_param_img} />
            </span>
          </div>
          <div className={firstSort ?`${s.change_param_pop_up} ${s.active}`:s.change_param_pop_up}>
            <div onClick={changeSortTitle} className={`${s.basic_sort_param} ${s.choose_sort_param}`}>
            {!statusTitle?'Сначала новые':'Сначала старые'}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TimeSort;