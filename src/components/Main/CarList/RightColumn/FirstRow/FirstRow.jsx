import s from './FirstRow.module.css'
import TimeSort from './TimeSort/TimeSort';
import QuantitySort from './QuantitySort/QuantitySort';
import VisualeVariation from './VisualeVariation/VisualeVariation';
import { useState } from 'react';



function FirstRow(props) {
  const [isSort, changeSort]=useState(false);


    return (
       <div className={s.right_columns_first_row}>
            <div className={s.find_amount_block}>
                <p className={s.find_amount_title}>Найдено</p>
                <p className={s.find_amount_value}>120 результатов</p>
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