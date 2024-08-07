import s from './Intro.module.css'
import mainCar from './../../../assets/img/main_car.png'


function Intro({openRegistration ,openLogin}) {
    return (
        <div className={s.full_screen_intro}>
            <div className={s.wrapper}>
                <section className={s.intro}>
                    <div className={s.main_left_column_block}>
                        <div className={s.title_block}>
                            <h1 className={s.title}> {'Надежный способ продажи   и покупки авто через аукцион '}
                             </h1>
                        </div>
                        <div className={s.main_sign_login}>
                            <button onClick={()=>openRegistration()} className={s.main_login}>
                                Зарегистрироваться
                            </button>
                            <button onClick={()=>openLogin()} className={s.main_sign_in}>
                                Войти
                            </button>
                        </div>
                    </div>
                        <img src={mainCar} alt="" className={s.main_car_img}/>
                </section>
            </div>
        </div>
    )
  }
  
  export default Intro;