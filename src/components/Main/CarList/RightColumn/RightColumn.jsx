import { FindAmount } from './FindAmount/FindAmount';
import s from './RightColumn.module.css'
import SecRow from './SecRow/SecRow'
import ThirdRow from './ThirdRow/ThirdRow'

function RightColumn({visStyle}) {
    return (
      <div className={s.right_column_wrap}>
        <FindAmount />
        <SecRow  visStyle={visStyle}/>
        <ThirdRow />
      </div>
    );
  }
  
  export default RightColumn;