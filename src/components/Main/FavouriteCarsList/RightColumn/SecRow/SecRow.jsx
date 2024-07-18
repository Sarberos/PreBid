import RowList from './RowList/RowList';
import TilesList from './TilesList/TilesList';
import s from './SecRow.module.css'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'

function SecRow({visStyle,carsList,getCarsError}) {

  if (!carsList) {
    return <strong> Автомобилей не было найдено  </strong>
  }

    return (
      <div className={s.right_columns_sec_row}>
        {visStyle ? <RowList carsList={carsList} /> : <TilesList carsList={carsList} />}
      </div>
    );
  }
  
  export default SecRow;