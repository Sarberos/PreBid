import s from './FirstRow.module.css'
import TimeSort from './TimeSort/TimeSort';
import QuantitySort from './QuantitySort/QuantitySort';
import VisualeVariation from './VisualeVariation/VisualeVariation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carInfThunk, setCarsLimit, setCarsListPage, setFavCarsLimit, setTransportsInf } from '../../../../redux/mainSlice';
import { useQueryClient } from '@tanstack/react-query';
import { AddFilterbtn } from './AddFilterbtn/AddFilterbtn';

function FirstRow({carsList=null,visStyle,changeVisStyle,listType}) {
  const dispatch=useDispatch()
  const state=useSelector(state=>state.user)
  const transports=useSelector(state=>state.user.transports)

  const changeSortTitle=(e) => {
    dispatch(setCarsListPage(1))
    let currentValue=e.target.innerText
    listType==="catalog"? dispatch(setCarsLimit(currentValue)):listType==="favouritesCars"?dispatch(setFavCarsLimit(currentValue)):"";

  }

    return (
      <div className={s.right_column_wrapper}>
        
        <div style={!state.isAuth ? {justifyContent: 'end'} :{}} className={s.right_columns_first_row}>
          {state.isAuth ? <AddFilterbtn /> :''}
          <div  className={s.sort_main_list_param}>
            <QuantitySort 
            activeLimitValue={state.transports.carsLimit}
            onChangeSortTitle={(e)=>changeSortTitle(e)}
            totalResults={carsList?.pagination?.total_results}
            />
            <VisualeVariation  visStyle={visStyle} changeVisStyle={changeVisStyle} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default FirstRow;