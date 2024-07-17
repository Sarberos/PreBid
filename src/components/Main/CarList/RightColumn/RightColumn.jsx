import { FindAmount } from './FindAmount/FindAmount';
import s from './RightColumn.module.css'
import SecRow from './SecRow/SecRow'
import ThirdRow from './ThirdRow/ThirdRow'
import {useCarsList} from './../../../hooks/car_list/car_list'
import Preloader from '../../../Tools/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function RightColumn({visStyle}) {
    const {data: carsList, isLoading:carsLoading }=useCarsList()
    if (carsLoading) {
     return (
     <div className={s.preloader_position}>
     <Preloader/></div>)
    }
    return (
      <div className={s.right_column_wrap}>
        <FindAmount />
        <SecRow carsList={carsList} visStyle={visStyle}/>
        <ThirdRow />
      </div>
    );
  }
  
  export default RightColumn;