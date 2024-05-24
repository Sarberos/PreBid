import s from './Header.module.css'
import logo from './../../assets/img/logo.svg'
import unknownUser from './../../assets/img/unknownUserImage.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setIsAuth } from '../../redux/counterSlice';

function Header({ openLogin}) {
    const{register,handleSubmit,formState: { isSubmitting},}=useForm()
    const getFormData=(data)=>{
        console.log(data)
    }
    const isAuth=useSelector((state)=>state.user.isAuth);
    const dispatch=useDispatch();

    const [profileTools,setToolsStatus]= useState(false);

    const resetAuth=()=>{
        localStorage.removeItem('access_token')
    }


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
                <form onSubmit={handleSubmit(getFormData)} className={s.search_form}>
                        <input type="text" {...register('search')} className={s.search_form__field} placeholder="Поиск"/>
                        <button disabled={isSubmitting} type='submit' className={s.search_form__submit}></button>
                </form>
                 <button onClick={()=>openLogin()} type="submit" className={isAuth ?`${s.sign_login_btn} ${s.hide}`: s.sign_login_btn}>Вход/Регистрация</button>
                 <div tabindex="0" onBlur={()=>{setToolsStatus(false)}} onClick={()=>{setToolsStatus(!profileTools)}} className={isAuth ?`${s.profile_preVis} ${s.active}`:s.profile_preVis}>
                    <div className={s.mini_profile_wrap}>
                        <div className={s.profile_mini_img_wrap}>
                            <img src={unknownUser} alt="" className={s.profile_mini_img} />
                        </div>
                        <label htmlFor={'profile_preVis'} className={s.profile_preVis_lbl}>Артем Круглов</label>
                        <button id={'profile_preVis'} className={s.profile_preVis_btn}></button>
                    </div>
                    <div className={profileTools? s.tools_for_mini_profile:`${s.tools_for_mini_profile} ${s.hiden}`}>
                        <div className={s.mini_profile_tool}>Настройки аккаунта </div>
                        <button onclick={()=>{resetAuth}} className={s.mini_profile_tool}>Выйти</button>
                        
                    </div>
                 </div>
                <div className={s.header__burger}>
				</div>
            </div>
        </div>
    </header>
    )
  }
  
  export default Header;