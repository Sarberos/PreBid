import RowList from './RowList/RowList';
import TilesList from './TilesList/TilesList';
import s from './SecRow.module.css'
import {useSelector} from 'react-redux'

function SecRow(props) {
    return (
      <div className={s.right_columns_sec_row}>
        {props.visStyle ? <RowList carsList={props.carsList} /> : <TilesList carsList={props.carsList} />}
      </div>
    );
  }
  
  export default SecRow;