import s from './Navigation.module.css'
import {Link} from 'react-router-dom'

export const Navigation=(selectedItem,setToolsStatus)=>{

    const navigationElemsArr=[{
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
        link:'/my-by',
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
            {navigationElemsArr.map((navElem,index)=>(
                <li key={index}  className={false?`${s.header__item}${s.active}`:s.header__item}>
                    <Link to={navElem.link}  className={s.header__link}>{navElem.name}</Link>
                </li>
            ))}
        </ul>
    )
}

