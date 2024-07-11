import { useSelector } from 'react-redux'
import s from './FindAmount.module.css'


export const FindAmount =()=>{
    const total_results=useSelector(state=>state.user.transports.pagination.total_results)

    return(
        <div className={s.find_amount_wrap}>
          <div className={s.find_amount_block}>
            <button className={s.filters_btn}>
              <span>Фильтры</span>
              <img src="" alt="" />
            </button>
           <div className={s.find_amount_wrap}>
            <p className={s.find_amount_title}>
              {total_results || total_results===0 ? [total_results === 1 ? "Найден " : "Найдено "]:'Не найдено '}
            </p>
            <p className={s.find_amount_value}>
              {total_results === 1
                ? ` ${total_results} результат`
                : (total_results >= 2) & (total_results < 5)
                ? ` ${total_results} результатa`
                : total_results >= 5
                ? `  ${total_results} результатов`
                : ""}
            </p>
           </div>
            
          </div>
        </div>
    )
}