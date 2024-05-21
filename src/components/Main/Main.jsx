import Seo from './Seo/Seo'
import Intro from './Intro/Intro'
import s from './Main.module.css'
import CarList from './CarList/CarList';

function Main({openRegistration, openLogin}) {
    return (
        <main className={s.main}>
        <Intro openRegistration={openRegistration} openLogin={openLogin} />
        <div className={s.wrapper}>
            <CarList />
            <Seo />
        </div>
    </main>
    )
  }
  
  export default Main;