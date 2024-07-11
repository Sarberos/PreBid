import s from './FirstRow.module.css'
import TimeSort from './TimeSort/TimeSort';
import QuantitySort from './QuantitySort/QuantitySort';
import VisualeVariation from './VisualeVariation/VisualeVariation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carInfThunk, setCarsLimit, setCarsListPage, setTransportsInf } from '../../../../redux/mainSlice';

function FirstRow(props) {
  const dispatch=useDispatch()
  const [isSort, changeSort]=useState(false);
  const transports=useSelector(state=>state.user.transports)

  const handlingPromise=(actionCreator,limitValueAction,onChangeSortTitle)=>{
    return new Promise( (resolve,reject)=>{
      resolve(dispatch(actionCreator))
    })
  }
  const changeSortTitle=(e) => {
    dispatch(setCarsListPage(1))
    let currentValue=e.target.innerText
    dispatch(setCarsLimit(currentValue));
    dispatch(carInfThunk());
    const carListPromise=handlingPromise(carInfThunk())
    carListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
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
            <VisualeVariation  visStyle={props.visStyle} changeVisStyle={props.changeVisStyle} />
          </div>
        </div>
      </div>
      
    );
  }
  
  export default FirstRow;