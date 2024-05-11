import RowList from './RowList/RowList';
import TilesList from './TilesList/TilesList';
import s from './SecRow.module.css'
import { useState } from 'react';

function SecRow() {
  const [listStyle, changeStyle]=useState(true)
    return (
      <div className={s.right_columns_sec_row}>
        {listStyle ? <RowList /> : <TilesList />}
      </div>
    );
  }
  
  export default SecRow;