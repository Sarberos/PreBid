import s from './TilesActive.module.css'
import listDisable_svg from './../../../../../../../assets/listDisable.svg'
import tilesActive_svg from './../../../../../../../assets/tilesActive.svg'

function TilesActive() {
    return (
        <div className={`${s.customization_wrap} ${s.tiles_active}`}>
          <div className={s.visualize_img_block}>
            <img src={listDisable_svg} alt="" className={s.list_visualize} />
          </div>
          <div className={s.visualize_img_block}>
            <img src={tilesActive_svg} alt="" className={s.list_visualize} />
          </div>
        </div>
    );
  }
  
  export default TilesActive;