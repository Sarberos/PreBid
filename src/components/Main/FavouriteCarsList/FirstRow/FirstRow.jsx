import s from './FirstRow.module.css'
import TimeSort from './TimeSort/TimeSort';
import QuantitySort from './QuantitySort/QuantitySort';
import VisualeVariation from './VisualeVariation/VisualeVariation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carInfThunk, setCarsLimit, setCarsListPage, setFavCarsLimit, setTransportsInf } from '../../../../redux/mainSlice';
import { useQueryClient } from '@tanstack/react-query';

function FirstRow({visStyle,changeVisStyle,listType}) {
  const dispatch=useDispatch()
  const transports=useSelector(state=>state.user.transports)

  const handlingPromise=(actionCreator,limitValueAction,onChangeSortTitle)=>{
    return new Promise( (resolve,reject)=>{
      resolve(dispatch(actionCreator))
    })
  }
  const changeSortTitle=(e) => {
    dispatch(setCarsListPage(1))
    let currentValue=e.target.innerText
    listType==="catalog"? dispatch(setCarsLimit(currentValue)):listType==="favouritesCars"?dispatch(setFavCarsLimit(currentValue)):"";

  }

    return (
      <div className={s.right_column_wrapper}>
        
        <div className={s.right_columns_first_row}>
          <div className={s.add_filter_wrap}>
            <button className={s.add_filter_btn}>
              Добавить свой фильтр
            </button>
          </div>
          <div className={s.sort_main_list_param}>
            <QuantitySort 
            activeLimitValue={transports.carsLimit}
            onChangeSortTitle={(e)=>changeSortTitle(e)}
            />
            <VisualeVariation  visStyle={visStyle} changeVisStyle={changeVisStyle} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default FirstRow;