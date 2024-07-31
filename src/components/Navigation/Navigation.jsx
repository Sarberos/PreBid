import { useTranslation } from 'react-i18next'
import s from './Navigation.module.css'
import {Link} from 'react-router-dom'
import { Trans } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux'
import { notAuthNavigation } from '../../consts/navigation/notAuthUser';
import { authNavigation } from '../../consts/navigation/AuthNavigation.jsx';
import {adminUserNavigation } from '../../consts/navigation/adminUser';
import {useState,useEffect} from 'react'
import { setLoginIsOpen } from '../../redux/mainSlice';


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
    const dispatch =useDispatch()
    const state =useSelector(state=> state.user)
    const [navList, setNavList]= useState()

    

useEffect(()=>{
    setNavList(state.userRole==='unAuth' ? notAuthNavigation : state.userRole==='lead_generation' ||state.userRole==='seller' ? authNavigation : state.userRole==="admin" ? adminUserNavigation: '' )
},[state.userRole]) 

    return(
        <ul className={s.header__list}>
            {navList?.map((navElem,index)=>{
                if(state.userRole==='unAuth' && navElem.name==="Аукционы"){
                    return (
                    <li key={index}  className={false?`${s.header__item}${s.active}`:s.header__item}>
                        <button onClick={()=>dispatch(setLoginIsOpen(true))} className={s.header__link}>{navElem.name}</button>
                    </li>)
                    
                }
                return (
                <li key={index}  className={false?`${s.header__item}${s.active}`:s.header__item}>
                    <Link to={navElem.link}  className={s.header__link}>{navElem.name}</Link>
                </li>)
            })} 
        </ul>
    )
}

