import Seo from './Seo/Seo'
import Intro from './Intro/Intro'
import s from './Main.module.css'
import CarList from './CarList/CarList';
import {useSelector} from 'react-redux'


function Main({openRegistration, openLogin}) {
const state =useSelector(state=>{ return state})


    return (
        <main className={s.main}>
        { !state.user.isAuth ? <Intro openRegistration={openRegistration} openLogin={openLogin} /> : ''}
        <div className={s.wrapper}>
            <CarList />
            <Seo />
        </div>
    </main>
    )
  }
  
  export default Main;