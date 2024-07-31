import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import Header from "../Header/Header";
import Footer from './../Footer/Footer'
import s from "./Profile.module.css";
import logout_ico from "./../../assets/img/logout_ico.svg";
import { useEffect, useState } from "react";
import { logoutThunk, setIsAuth, setUserInf, setUserRole, userInfThunk } from "../../redux/mainSlice";
import Preloader from "../Tools/Preloader/Preloader"
import {useUserInf} from './../hooks/user-Inf/useUserInf'
import { useQueryClient } from '@tanstack/react-query';


export const Profile = ({children,userInf}) => {
  const dispatch =useDispatch();
  const navigate = useNavigate()
  // const [localLoading, setLocalLoading]=useState(true)
  useEffect(()=>{},[])


  const queryClient =useQueryClient()
  const resetAuth= async()=>{
    dispatch(setUserInf())
    await dispatch(logoutThunk());
    dispatch(setUserRole('unAuth'))
    queryClient.clear();
    navigate('/')
      
  }

  // if (localLoading) {
  //   return <Preloader />
  // }
  return (
    <>
      
      <div className={s.profile_setting_wrapper}>
        <div className={s.wrapper}>
          <h2 className={s.profile_title}>Настройка аккаунта {userInf?.user?.email}</h2>
          <div className={s.main_info_wrap}>
            <div className={s.menu_wrap}>
              <ul className={s.menu_list}>
                <li className={s.menu_list_item}><Link to='/profile' style={{textDecoration:'none',color: 'inherit'}} ><p style={{width:'100%'}}> Мой профиль</p></Link></li>
                <li className={s.menu_list_item}><Link to='/deliveryAdress' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}>Адрес доставки</p></Link></li>
                <li className={s.menu_list_item}><Link to='/tarifPlan' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}>Мой тарифный план</p></Link></li>
                <li className={s.menu_list_item}><Link to='/notifications' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}> Настройки уведломлений</p></Link></li>
                <li className={s.menu_list_item}><Link to='/support' style={{textDecoration:'none',color: 'inherit'}}><p style={{width:'100%'}}> Справка и поддержка</p></Link></li>
                <li className={s.menu_list_item}>
                  <img src={logout_ico} alt="" className={s.logout_img} />
                  <button onClick={resetAuth} className={s.logout_btn}>Выход из аккаунта</button>
                </li>
              </ul>
            </div>
              <div className={s.profile_data}>
                {children}
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
