import RowList from './RowList/RowList';
import TilesList from './TilesList/TilesList';
import s from './SecRow.module.css'
import {useSelector} from 'react-redux'

function SecRow(props) {
  const transports=useSelector(state=>state.user.transports);

  
    return (
      <div className={s.right_columns_sec_row}>
        {props.visStyle ? <RowList /> : <TilesList />}
      </div>
    );
  }
  
  export default SecRow;