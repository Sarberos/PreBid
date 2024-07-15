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
const dispatch=useDispatch();
const isLoading =useSelector((state) => {return state.user.isLoading;});
const handlingPromise=(actionCreator)=>{
    return new Promise( (resolve,reject)=>{
        resolve(dispatch(actionCreator))
    })
}
// const {data,isLoading}=useQuery({
//     queryKey:['favorite cars'],
//     queryFn: Fetching.favoriteCarList(2,1),
// })

useEffect(()=>{
    const filtersPromise=handlingPromise(userFiltersThunk())
    filtersPromise.then(response=>{dispatch(setFiltersInf((response.payload.data.content)))});
    const favouriteCarListPromise=handlingPromise((getFavouriteList()))
    favouriteCarListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
},[dispatch])


    return (
        <>
            {/* <Header /> */}
            <main className={s.main}>
                <div className={s.wrapper}>
                    <CarList />
                </div>
            </main>
            {/* <section className={s.main_info}>
                <div className={s.car_list_first_row}>
                    <VisualeVariation />
                </div>
                <div className={s.two_columns_wrapper}>
                    <LeftColumn />
                    <RightColumn />
                    <div className={s.right_column}>
                        <div className={s.rigth_column_title}>
                            <p className={s.column_title_txt}><span className={s.column_title_pice}>{'Найдено'}</span>{` 2 результата`}</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}