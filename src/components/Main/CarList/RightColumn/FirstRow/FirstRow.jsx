import s from './FirstRow.module.css'
import TimeSort from './TimeSort/TimeSort';
import QuantitySort from './QuantitySort/QuantitySort';
import VisualeVariation from './VisualeVariation/VisualeVariation';



function FirstRow() {
    return (
       <div className={s.right_columns_first_row}>
            <div className={s.find_amount_block}>
                <p className={s.find_amount_title}>Найдено</p>
                <p className={s.find_amount_value}>120 результатов</p>
            </div>
            <div className={s.sort_main_list_param}>
                <TimeSort />
                <QuantitySort />
            </div>
            <VisualeVariation />
        </div>
    )
  }
  
  export default FirstRow;