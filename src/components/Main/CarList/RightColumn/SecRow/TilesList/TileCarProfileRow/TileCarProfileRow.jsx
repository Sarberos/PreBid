import s from './TileCarProfileRow.module.css'
import TileCarProfile from './TileCarProfile/TileCarProfile';

function TileCarProfileRow() {
    return (
        <div className={s.right_column_tiles_row}>
          <TileCarProfile />
          <TileCarProfile />
          <TileCarProfile />
          <TileCarProfile />
        </div>
    );
  }
  export default TileCarProfileRow;