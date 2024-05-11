import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.max_width}>
            <div className={s.header__wrapper_first_row}>
                <div className={s.header_info}>
                    <span className={s.header_info_country}>Название страны</span>,
                    <span className={s.header_info_city}> город </span>,
                    <span className={s.header_info_phone}>номер телефона</span>
                </div>
                <div className={s.header__settings_list}>
                    <div className={s.setting_items}>Регион</div>
                    <div className={s.setting_items}>Язык
                    </div>
                    <div className={s.setting_items}>Валюта</div>
                </div>
            </div>
        </div>
        <div className={s.wrapper}>
            <div className={s.header__wrapper_sec_row}>
                <div className={s.header__logo}>
                    <a href="/" className={s.header__logo_link}>
                        <img src="./img/logo.svg" alt="logo" className={s.header__logo_img} />
                    </a>
                </div>
                <nav className={s.header__nav}>
                    <ul className={s.header__list}>
                        <li className={`${s.header__item} ${s.all_use}`}>
                            <a href="#" className={s.header__link}>Каталог</a>
                        </li>
                        <li className={`${s.header__item} ${s.all_use}`}>
                            <a href="#" className={s.header__link}>Аукционы</a>
                        </li>
                        <li className={s.header__item}>
                            <a href="#" className={s.header__link}>Тарифы</a>
                        </li>
                        <li className={s.header__item}>
                            <a href="#" className={s.header__link}>Как это работает </a>
                        </li>
                        <li className={`${s.header__item} ${s.width_1440}`}>
                            <a href="#" className={s.header__link }>Мои ставки</a>
                        </li>
                        <li className={`${s.header__item} ${s.width_1440}`}>
                            <a href="#" className={s.header__link}>Личный кабинет</a>
                        </li>
                        <li className={`${s.header__item} ${s.width_1440}`}>
                            <a href="#" className={s.header__link}>Мое избранное</a>
                        </li>
                        <li className={`${s.header__item} ${s.width_1024}`}>
                            <a href="#" className={s.header__link}>Тарифы</a>
                        </li>
                        <li className={`${s.header__item} ${s.width_1024}`}>
                            <a href="#" className={s.header__link}>Как это работает</a>
                        </li>
                    </ul>
                </nav>
                <form className={s.search_form}>
                    <fieldset className={s.search_form__wrap}>
                        <input type="text" name="main_search" className={s.search_form__field} placeholder="Поиск"/>
                        <button type="submit" className={s.search_form__submit}></button>
                    </fieldset>
                </form>
                <button type="submit" className={s.sign_login_btn}>Вход/Регистрация</button>
                <div className={s.header__burger}>
				</div>
            </div>
        </div>
    </header>
    )
  }
  
  export default Header;