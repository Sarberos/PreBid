import RowList from './RowList/RowList';
import TilesList from './TilesList/TilesList';
import s from './SecRow.module.css'

function SecRow() {
    return (
      <div className={s.right_columns_sec_row}>
        <RowList />
        <TilesList />
      </div>
    );
  }
  
  export default SecRow;