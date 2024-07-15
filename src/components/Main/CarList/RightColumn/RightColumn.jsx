import { FindAmount } from './FindAmount/FindAmount';
import s from './RightColumn.module.css'
import SecRow from './SecRow/SecRow'
import ThirdRow from './ThirdRow/ThirdRow'
import {useCarsList} from './../../../hooks/car_list/car_list'
import Preloader from '../../../Tools/Preloader/Preloader';

function RightColumn({visStyle}) {
    const {data: carsList, isLoading:carsLoading }=useCarsList()

    if (carsLoading) {
      <Preloader/>
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