import s from './TilesList.module.css'
import TilesCarProfileRow from './TileCarProfileRow/TileCarProfileRow'

function TilesList() {
    return (
      <div className={s.right_columns_sec_row_tiles}>
        <TilesCarProfileRow />
        <TilesCarProfileRow />
        <TilesCarProfileRow />
        <TilesCarProfileRow />
      </div>
    );
  }
  
  export default TilesList;