import s from './RightColumn.module.css'
import FirstRow from './FirstRow/FirstRow'
import SecRow from './SecRow/SecRow'
import ThirdRow from './ThirdRow/ThirdRow'

function RightColumn() {
    return (
      <div className={s.right_column_wrap}>
        <FirstRow />
        <SecRow />
        <ThirdRow />
      </div>
    );
  }
  
  export default RightColumn;