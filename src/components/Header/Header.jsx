import s from './Header.module.css'
import logo from './../../assets/img/logo.svg'
import { Link } from 'react-router-dom';

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
                        <img src={logo} alt="logo" className={s.header__logo_img} />
                    </a>
                </div>
                <nav className={s.header__nav}>
                    <ul className={s.header__list}>
                        <li className={`${s.header__item} ${s.all_use}`}>
                            <Link to="/"  className={s.header__link}>Каталог</Link>
                        </li>
                        <li className={`${s.header__item} ${s.all_use}`}>
                            <Link to="/auctions"  className={s.header__link}>Аукционы</Link>
                        </li>
                        <li className={s.header__item}>
                            <Link to="/rates"  className={s.header__link}>Тарифы</Link>
                        </li>
                        <li className={s.header__item}>
                            <Link to="/help"  className={s.header__link}>Как это работает </Link>
                        </li>
                        <li className={`${s.header__item} ${s.width_1440}`}>
                            <Link to=""  className={s.header__link }>Мои ставки</Link>
                        </li>
                        <li className={`${s.header__item} ${s.width_1440}`}>
                            <Link to=""  className={s.header__link}>Личный кабинет</Link>
                        </li>
                        <li className={`${s.header__item} ${s.width_1440}`}>
                            <Link to=""  className={s.header__link}>Мое избранное</Link>
                        </li>
                        <li className={`${s.header__item} ${s.width_1024}`}>
                            <Link to=""  className={s.header__link}>Тарифы</Link>
                        </li>
                        <li className={`${s.header__item} ${s.width_1024}`}>
                            <Link to=""  className={s.header__link}>Как это работает</Link>
                        </li>
                    </ul>
                </nav>
                <form className={s.search_form}>
                        <input type="text" name="main_search" className={s.search_form__field} placeholder="Поиск"/>
                        <button type="submit" className={s.search_form__submit}></button>
                </form>
                <Link to='/login' > <button type="submit" className={s.sign_login_btn}>Вход/Регистрация</button></Link>
                <div className={s.header__burger}>
				</div>
            </div>
        </div>
    </header>
    )
  }
  
  export default Header;