import s from './QuantitySort.module.css'
import accordionArrow_svg from './../../../../../../assets/img/accordio_arrow.svg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {carInfThunk, setCarsLimit, setCarsListPage, setTransportsInf} from './../../../../../../redux/mainSlice'

function QuantitySort() {
  const [secondSort, changeSortStatus]=useState(false);
  const transports =useSelector(state=>state.user.transports)
  const dispatch=useDispatch()

  const handlingPromise=(actionCreator)=>{
    return new Promise( (resolve,reject)=>{
      resolve(dispatch(actionCreator))
    })
}
  const changeTimeStatus=()=>{
    changeSortStatus(!secondSort);
  }
  const changeSortTitle=(e) => {
    dispatch(setCarsListPage(1))
    let currentValue=e.target.innerText
    changeSortStatus(!secondSort)
    dispatch(setCarsLimit(currentValue));
    dispatch(carInfThunk());
    const carListPromise=handlingPromise(carInfThunk())
    carListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
  }

    return (
      <div tabindex="0" onBlur={() => {changeSortStatus(false)}} className={s.second_sort_param}>
        <p className={s.sec_sort_param_title}>Отображать по</p>
        <div className={s.change_active_disp_param_wrap}>
          <div onClick={changeTimeStatus} className={secondSort?`${s.change_disp_param_wrap} ${s.active}`:s.change_disp_param_wrap}>
            <div className={s.basic_disp_param}> {transports.carsLimit}</div>
            <div className={s.change_param_img_wrap}>
              <img src={accordionArrow_svg} className={s.change_param_img} />
            </div>
          </div>
          <div className={secondSort?`${s.change_disp_param_pop_up} ${s.active}`:s.change_disp_param_pop_up}>
            <div onClick={changeSortTitle} className={ transports.carsLimit == 10 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` } >
              10
            </div>
            <div onClick={changeSortTitle} className={ transports.carsLimit == 20 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` } >
              20
            </div>
            <div onClick={changeSortTitle} className={ transports.carsLimit == 30 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              30
            </div>
            <div onClick={changeSortTitle} className={ transports.carsLimit == 40 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              40
            </div>
            <div onClick={changeSortTitle} className={ transports.carsLimit == 50 ?`${s.basic_disp_param} ${s.choose_disp_param} ${s.active}`:`${s.basic_disp_param} ${s.choose_disp_param}` }>
              50
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default QuantitySort;