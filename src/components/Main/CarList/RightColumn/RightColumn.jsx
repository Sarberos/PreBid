import { FindAmount } from './FindAmount/FindAmount';
import s from './RightColumn.module.css'
import SecRow from './SecRow/SecRow'
import ThirdRow from './ThirdRow/ThirdRow'
import {useCarsList} from './../../../hooks/car_list/car_list'
import Preloader from '../../../Tools/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect ,useState} from 'react';
import { useFavouriteCars } from '../../../hooks/car_list/useFavoriteCars';

function RightColumn({visStyle,listType,getCarsError,carsLoading,carsList, refetch }) {

    if (carsLoading ) {
     return (
     <div className={s.preloader_position}>
     <Preloader/></div>)
    }
    return (
      <div className={s.right_column_wrap}>
        <FindAmount carsList={carsList} />
        <SecRow  carsList={carsList} visStyle={visStyle} getCarsError={getCarsError} />
        <ThirdRow listType={listType} pagination={carsList?.pagination} />
      </div>
    );
  }
  
  export default RightColumn;