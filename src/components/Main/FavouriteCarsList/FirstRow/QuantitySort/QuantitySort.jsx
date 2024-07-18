import s from './QuantitySort.module.css'
import accordionArrow_svg from './../../../../../assets/img/accordio_arrow.svg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function QuantitySort({activeLimitValue,onChangeSortTitle}) {
  const dispatch=useDispatch()
  const [secondSort, changeSortStatus]=useState(false);


  const localChahgeTitle=(e)=>{
    onChangeSortTitle(e);
    changeSortStatus(!secondSort);
  }
    return (
      <div tabindex="0" onBlur={() => {changeSortStatus(false)}} className={s.second_sort_param}>
        <p className={s.sec_sort_param_title}>Отображать по</p>
        <div className={s.change_active_disp_param_wrap}>
          <div onClick={()=>changeSortStatus(!secondSort)} className={secondSort?`${s.change_disp_param_wrap} ${s.active}`:s.change_disp_param_wrap}>
            <div className={s.basic_disp_param}> {activeLimitValue}</div>
            <div className={s.change_param_img_wrap}>
              <img src={accordionArrow_svg} className={s.change_param_img} />
            </div>
          </div>
          <div className={secondSort?`${s.change_disp_param_pop_up} ${s.active}`:s.change_disp_param_pop_up}>
            <div onClick={(e)=>localChahgeTitle(e)} className={ activeLimitValue == 10 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` } >
              1
            </div>
            <div onClick={(e)=>localChahgeTitle(e)} className={ activeLimitValue == 20 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` } >
              2
            </div>
            <div onClick={(e)=>localChahgeTitle(e)} className={ activeLimitValue == 30 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              3
            </div>
            <div onClick={(e)=>localChahgeTitle(e)} className={ activeLimitValue == 40 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              40
            </div>
            <div onClick={(e)=>localChahgeTitle(e)} className={ activeLimitValue == 50 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              50
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default QuantitySort;