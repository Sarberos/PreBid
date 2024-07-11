import s from './Header.module.css'
import logo from './../../assets/img/logo.svg'
import unknownUser from './../../assets/img/unknownUserImage.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { logoutThunk, setIsAuth, setUserInf, userFiltersThunk, userInfThunk } from '../../app/redux/mainSlice';
import { Navigation } from '../Navigation/Navigation';
import { HeaderBurger } from './HeaderBurger/HeaderBurger';
import { SelectPicker} from 'rsuite';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { setCurrentLang } from '../../redux/settingsSlice';




function Header({ openLogin}) {
    const reduxSettings=useSelector(state=>state.settings)
    const dispatch=useDispatch()
    const [lang,setLanguage]=useState(reduxSettings.currentlang)

    useEffect(() => {
        dispatch(setCurrentLang(lang))
        i18next.changeLanguage(lang)
    }, [lang]);

    const data=[
    {
        label:'ru',
        value: "ru",
    },
    {
        label:'en',
        value: "en",
    },
    {
        label:'pl',
        value: "pl",
    },
    ]
    const {t}=useTranslation()

    const changelanguage =(inputData)=>{
        if (inputData!==null && inputData!==undefined) {
            setLanguage(inputData)
        }
    }


    const{register,handleSubmit,formState: { isSubmitting},}=useForm()
    const getFormData=(data)=>{
        console.log(data)
    }
    const isAuth=useSelector((state)=>state.user.isAuth);
    const client_name_ru=useSelector((state)=>state.user.userInf.client.name_ru);
    const user_email=useSelector((state)=>state.user.userInf.user.email);
    const navigate=useNavigate()

    const [profileTools,setToolsStatus]= useState(false);
    const resetAuth=()=>{
        dispatch(logoutThunk());
        navigate('/')
    }
    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          {/* <div className={s.header__wrapper_first__row}>
            <SelectPicker
              data={data}
              searchable={false}
              style={{ width: 60 }}
              placeholder={lang}
              onChange={(inf)=>changelanguage(inf)}
            />
          </div> */}
          <div className={s.header__wrapper_sec_row}>
            <div
              style={{
                display: "flex",
                ["flex-direction"]: "row",
                gap: "40px",
              }}
            >
              <a href="/" className={s.header__logo_link}>
                <img src={logo} alt="logo" className={s.header__logo_img} />
              </a>
              <Navigation />
            </div>
            <div className={s.login_wrap}>
              <form
                onSubmit={handleSubmit(getFormData)}
                className={s.search_form}
              >
                <input
                  type="text"
                  {...register("search")}
                  className={s.search_form__field}
                  placeholder="Поиск"
                />
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={s.search_form__submit}
                ></button>
              </form>
              <button
                onClick={() => {
                  openLogin();
                }}
                type="submit"
                className={
                  isAuth ? `${s.sign_login_btn} ${s.hide}` : s.sign_login_btn
                }
              >
                Вход/Регистрация
              </button>
              <div
                className={
                  isAuth ? `${s.profile_preVis} ${s.active}` : s.profile_preVis
                }
              >
                <div className={s.mini_profile_wrap}>
                  {/* <div className={s.profile_mini_img_wrap}>
                                <img src={unknownUser} alt="" className={s.profile_mini_img} />   Добавления рядом с имененм автарки 
                            </div> */}
                  <label
                    htmlFor={"profile_preVis"}
                    className={s.profile_preVis_lbl}
                  >
                    {client_name_ru ? client_name_ru : user_email}
                  </label>
                  <button
                    id={"profile_preVis"}
                    onClick={() => {
                      setToolsStatus(!profileTools);
                    }}
                    className={s.profile_preVis_btn}
                  ></button>
                </div>
                <div
                  className={
                    profileTools
                      ? s.tools_for_mini_profile
                      : `${s.tools_for_mini_profile} ${s.hiden}`
                  }
                >
                  <Link to="/profile" className={s.mini_profile_tool_link}>
                    <div className={s.mini_profile_tool}>
                      Настройки аккаунта
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      resetAuth();
                    }}
                    className={s.mini_profile_tool}
                  >
                    Выйти
                  </button>
                </div>
              </div>
              <HeaderBurger />
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;