import { useDispatch, useSelector } from 'react-redux'
import { getFavouriteList, setFiltersInf, setTransportsInf, userFiltersThunk } from '../../../redux/mainSlice'
import Header from '../../Header/Header'
import s from './MyFavourite.module.css'
import {useEffect} from 'react'
import Intro from '../../Main/Intro/Intro'
import CarList from '../../Main/CarList/CarList'
import { useQuery } from '@tanstack/react-query'
import Fetching from '../../../http/api_request'


export const MyFavourite=()=>{

    return (
            <main className={s.main}>
                <div className={s.wrapper}>
                    <CarList listType={"favouritesCars"}/>
                </div>
            </main>
    )
}