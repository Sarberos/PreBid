import RowList from './RowList/RowList';
import TilesList from './TilesList/TilesList';
import s from './SecRow.module.css'

function SecRow(props) {
    return (
      <div className={s.right_columns_sec_row}>
        {props.visStyle ? <RowList /> : <TilesList />}
      </div>
    );
  }
  
  export default SecRow;