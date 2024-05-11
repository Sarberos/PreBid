import s from './QuantitySort.module.css'
import accordionArrow_svg from './../../../../../../assets/img/accordio_arrow.svg'

function QuantitySort() {
    return (
      <div className={s.second_sort_param}>
        <p className={s.sec_sort_param_title}>Отображать по</p>
        <div className={s.change_active_disp_param_wrap}>
          <div className={s.change_disp_param_wrap}>
            <div className={s.basic_disp_param}> 10</div>
            <span className={s.change_param_img_wrap}>
              <img src={accordionArrow_svg} className={s.change_param_img} />
            </span>
          </div>
          <div className={s.change_disp_param_pop_up}>
            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}>
              20
            </div>
            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}>
              30
            </div>
            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}>
              40
            </div>
            <div className={`${s.basic_disp_param} ${s.choose_disp_param}`}>
              50
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default QuantitySort;