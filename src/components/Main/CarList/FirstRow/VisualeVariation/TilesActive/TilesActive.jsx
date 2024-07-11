import s from './TilesActive.module.css'
import listDisable_svg from './../../../../../../assets/img/listDisable.svg'
import tilesActive_svg from './../../../../../../assets/img/tilesActive.svg'

function TilesActive(props) {
  const changeVis = () => {
    props.changeVisStyle(!props.visStyle);
  }
    return (
        <div className={`${s.customization_wrap} ${s.tiles_active}`}>
          <div onClick={changeVis} className={s.visualize_img_block}>
            <img src={listDisable_svg} alt="" className={s.list_visualize} />
          </div>
          <div className={s.visualize_img_block}>
            <img src={tilesActive_svg} alt="" className={s.list_visualize} />
          </div>
        </div>
    );
  }
  
  export default TilesActive;