import s from './Intro.module.css'

function Intro() {
    return (
        <div className={s.full_screen_intro}>
            <div className={s.wrapper}>
                <section className={s.intro}>
                    <div className={s.main_left_column_block}>
                        <div className={s.title_block}>
                            <h1 className={s.title}> Надежный способ продажи и покупки авто через аукцион </h1>
                        </div>
                        <div className={s.main_sign_login}>
                            <button className={s.main_login}>
                                Зарегистрироваться
                            </button>
                            <button className={s.main_sign_in}>
                                Войти
                            </button>
                        </div>
                    </div>
                    <div className={s.main_car_img_block}>
                        <img src="./img/main_car.png" alt="" className={s.main_car_img}/>
                    </div>
                </section>
            </div>
        </div>
    )
  }
  
  export default Intro;