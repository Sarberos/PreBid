import Paginator from './Paginator/Paginator';
import s from './ThirdRow.module.css'

function ThirdRow() {
    return (
      <div className={s.right_columns_third_row}>
        <Paginator />
      </div>
    );
  }
  
  export default ThirdRow;