import { useTranslation } from 'react-i18next'
import s from './Navigation.module.css'
import {Link} from 'react-router-dom'
import { Trans } from 'react-i18next';
import {useSelector} from 'react-redux'
import { notAuthNavigation } from '../../consts/navigation/notAuthUser';
import { authNavigation } from '../../consts/navigation/AuthNavigation.jsx';


export const navigationElemsArr=[{
        name:'Каталог',
        link:'/',
    },
    {
        name:'Аукционы',
        link:'/auctions',
    },
    {
        name:'Мои продажи',
        link:'/my-sales',
    },
    {
        name:'Мои заказы',
        link:'/my-orders',
    },
    {
        name:'Мои ставки',
        link:'/my-rates',
    },
    {
        name:'Избранное',
        link:'/my-favourite',
    },
]
export const Navigation=({openLogin})=>{
    const {t} =useTranslation()
    const state =useSelector(state=> state.user)
    

 
const navList=state.isAuth ? authNavigation : notAuthNavigation;
    return(
        <ul className={s.header__list}>
            {navList.map((navElem,index)=>(
                <li key={index}  className={false?`${s.header__item}${s.active}`:s.header__item}>
                    <Link to={navElem.link}  className={s.header__link}>{navElem.name}</Link>
                </li>
            ))} 
        </ul>
    )
}

