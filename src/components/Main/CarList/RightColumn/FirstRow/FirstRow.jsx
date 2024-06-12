import s from './FirstRow.module.css'
import TimeSort from './TimeSort/TimeSort';
import QuantitySort from './QuantitySort/QuantitySort';
import VisualeVariation from './VisualeVariation/VisualeVariation';
import { useState } from 'react';
import { useSelector } from 'react-redux';



function FirstRow(props) {
  const [isSort, changeSort]=useState(false);
  const total_results=useSelector(state=>state.user.transports.pagination.total_results)


    return (
       <div className={s.right_columns_first_row}>
            <div className={s.find_amount_block}>
                <p className={s.find_amount_title}>{total_results===1 ?'Найден':'Найдено'}</p>
                <p className={s.find_amount_value}>{total_results===1 ? `${total_results} результат`:total_results>=2&total_results<5 ? `${total_results} результатa`:total_results>=5?`${total_results} результатов`:''}</p>
            </div>
            <div className={s.sort_main_list_param}>
                <TimeSort  isSort={isSort} changeSort={changeSort}/>
                <QuantitySort isSort={isSort} changeSort={changeSort} />
            </div>
            <VisualeVariation visStyle={props.visStyle} changeVisStyle={props.changeVisStyle} />
        </div>
    )
  }
  
  export default FirstRow;