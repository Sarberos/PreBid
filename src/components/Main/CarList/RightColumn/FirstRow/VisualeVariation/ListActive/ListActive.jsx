import s from './ListActive.module.css'
import listActive_svg from './../../../../../../../assets/listActive.svg'
import tilsDisable_svg from './../../../../../../../assets/tilsDisable.svg'

function ListActive() {
    return (
        <div className={`${s.customization_wrap} ${s.list_active}`}>
          <div className={s.visualize_img_block}>
            <img src={listActive_svg} alt="" className={s.list_visualize} />
          </div>
          <div className={s.visualize_img_block}>
            <img src={tilsDisable_svg} alt="" className={s.list_visualize} />
          </div>
        </div>
    );
  }
  
  export default ListActive;