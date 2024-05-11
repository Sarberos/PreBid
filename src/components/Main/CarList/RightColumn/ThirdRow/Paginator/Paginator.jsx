import s from './Paginator.module.css'


function Paginator() {
    return (
    <div className={s.paginator}>
        <button className={s.smash_page_btn}></button>
        <button className={`${s.page_change_btn} ${s.page_change_btn_active}`}>1</button>
        <button className={s.page_change_btn}>2</button>
        <button className={s.page_change_btn}>3</button>
        <button className={s.page_change_btn}>......</button>
        <button className={s.page_change_btn}>100</button>
        <button className={s.smash_page_btn}></button>
    </div>
                        
    )
  }
  
  export default Paginator;