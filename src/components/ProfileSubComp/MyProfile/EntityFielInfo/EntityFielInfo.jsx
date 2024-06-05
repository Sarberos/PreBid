import s from './EntityFielInfo.module.css'



export function EntityFielInfo({name,value}){
    return(
      <li className={s.company_info_item}>
        <p className={s.company_info_item_name}>
          {name}
        </p>
        <input
          disabled={true}
          type="text"
          className={s.company_info_item_value}
          value={value}
        />
      </li>
    )
  }
  