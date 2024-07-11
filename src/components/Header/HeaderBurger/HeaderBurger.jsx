import s from './HeaderBurger.module.css'
import burger_menu from './../../../assets/img/main_burger_menu.svg'
import { useState,useEffect,useLayoutEffect } from 'react'
import { navigationElemsArr } from '../../Navigation/Navigation'
import {Link} from 'react-router-dom'

export const HeaderBurger=()=>{
    const [burgerMenu,setBurgerMenu]=useState(false)
    return (
      <div className={s.header__burger_wrapper}>
        <div className={s.header_burger_inner_wrap}>
          <button
            onClick={() => setBurgerMenu(!burgerMenu)}
            className={s.header_burger_btn}
          >
            <img src={burger_menu} alt="burger_menu" />
          </button>
          <div tabIndex='0' onBlur={() => setBurgerMenu(false)} className={ burgerMenu ? `${s.burger_list_wrap} ${s.active}` : `${s.burger_list_wrap}`}>
            <ul className={s.burger_list}
            >
                {navigationElemsArr.map((item,index)=>(
                    <li className={s.burger_item}>
                        <Link to={item.link}  className={s.burger_list_link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
}