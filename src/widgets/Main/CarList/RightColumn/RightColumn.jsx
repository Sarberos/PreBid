import s from './RightColumn.module.css'
import FirstRow from './FirstRow/FirstRow'
import SecRow from './SecRow/SecRow'
import ThirdRow from './ThirdRow/ThirdRow'
import { useState } from 'react';

function RightColumn() {
  const [visStyle, changeVisStyle]=useState(false);
    return (
      <div className={s.right_column_wrap}>
        <FirstRow visStyle={visStyle} changeVisStyle={changeVisStyle} />
        <SecRow  visStyle={visStyle}/>
        <ThirdRow />
      </div>
    );
  }
  
  export default RightColumn;