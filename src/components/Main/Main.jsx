import Seo from './Seo/Seo'
import Intro from './Intro/Intro'
import s from './Main.module.css'
import CarList from './CarList/CarList';
import {useDispatch, useSelector} from 'react-redux'
import { carInfThunk, setFiltersInf, setTransportsInf, setUserInf, userFiltersThunk } from '../../redux/mainSlice';
import { useEffect } from 'react';
import { useUserInf } from '../hooks/user-Inf/useUserInf';


function Main({openRegistration,openLogin}) {
    const isAuth = useSelector(state=>state.user.isAuth)
    return (
        <main className={s.main}>
        { !isAuth? <Intro openRegistration={openRegistration} openLogin={openLogin} /> : ''}
        <div className={s.wrapper}>
            <CarList />
            <Seo />
        </div>
    </main>
    )
  }
  
  export default Main;