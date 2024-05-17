import s from './QuantitySort.module.css'
import accordionArrow_svg from './../../../../../../assets/img/accordio_arrow.svg'
import { useState } from 'react';

function QuantitySort() {
  const [secondSort, changeSortStatus]=useState(false);
  const [statusTitle, changeStatusTitle]=useState(10);



  const changeTimeStatus=()=>{
    changeSortStatus(!secondSort)
  }
  const changeSortTitle=(e) => {
    let currentValue=e.target.innerText
    changeSortStatus(!secondSort)
    changeStatusTitle(currentValue)
  }

    return (
      <div className={s.second_sort_param}>
        <p className={s.sec_sort_param_title}>Отображать по</p>
        <div className={s.change_active_disp_param_wrap}>
          <div onClick={changeTimeStatus} className={secondSort?`${s.change_disp_param_wrap} ${s.active}`:s.change_disp_param_wrap}>
            <div className={s.basic_disp_param}> {statusTitle}</div>
            <div className={s.change_param_img_wrap}>
              <img src={accordionArrow_svg} className={s.change_param_img} />
            </div>
          </div>
          <div className={secondSort?`${s.change_disp_param_pop_up} ${s.active}`:s.change_disp_param_pop_up}>
            <div onClick={changeSortTitle} className={ statusTitle == 10 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` } >
              10
            </div>
            <div onClick={changeSortTitle} className={ statusTitle == 20 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` } >
              20
            </div>
            <div onClick={changeSortTitle} className={ statusTitle == 30 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              30
            </div>
            <div onClick={changeSortTitle} className={ statusTitle == 40 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              40
            </div>
            <div onClick={changeSortTitle} className={ statusTitle == 50 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              50
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default QuantitySort;