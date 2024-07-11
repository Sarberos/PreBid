import { useTranslation } from 'react-i18next'
import s from './Navigation.module.css'
import {Link} from 'react-router-dom'
import { Trans } from 'react-i18next';


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
export const Navigation=(selectedItem,setToolsStatus)=>{
    const {t} =useTranslation()

    const navigationElements=[{
        name:t("catalog"),
        link:'/',
    },
    {
        name:'Аукционы',
        link:'/auctions',
    },
    {
        name:<Trans i18nKey={"mySales"}>Мои продажи</Trans>,
        link:'/my-sales',
    },
    {
        name:t("myOrders"),
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

    return(
        <ul className={s.header__list}>
            {navigationElements.map((navElem,index)=>(
                <li key={index}  className={false?`${s.header__item}${s.active}`:s.header__item}>
                    <Link to={navElem.link}  className={s.header__link}>{navElem.name}</Link>
                </li>
            ))}
        </ul>
    )
}

