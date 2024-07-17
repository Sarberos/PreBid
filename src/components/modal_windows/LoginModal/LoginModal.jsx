import { Link, useNavigate } from "react-router-dom";
import s from "./LoginModal.module.css";
import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { loginThunk,setIsAuth,setUserInf,userInfThunk,userFiltersThunk,setFiltersInf } from "../../../redux/mainSlice";
import Preloader from "../../Tools/Preloader/Preloader";
import { useUserInf } from "../../hooks/user-Inf/useUserInf";
import { handlingPromise } from "../../../helpers/handlingPromise";
 
const LoginModal = ({ onClose, openRegistration,setLoginStatus}) => {
  const{register,handleSubmit,formState: { isSubmitting, errors },}=useForm()


  const navigate =useNavigate()
  const id =useId();
  const dispatch=useDispatch();
  

  const onOpenRgistrPage=()=>{
    openRegistration();
    onClose();
  }

  const onSubmiting=(formData)=>{
    const loginPromise = new Promise((resolve, reject)=>{
      resolve(dispatch(loginThunk(formData)))
    })
    loginPromise.then((response) => {

      if (response.payload.data.status === "success") {  
        dispatch(setIsAuth(true))
        // handlingPromise(dispatch(userInfThunk())).then(
        //   resp=>{dispatch(setUserInf(resp?.payload?.data))}
        // )
        setLoginStatus(false);  
        navigate("/");  

      } else {  
        setLoginStatus(true);  
        dispatch(setIsAuth(false))
      }  
      

    });
   
    
     
  }
  return (
    <div className={s.login_wrapper}>
      <div className={s.title}>
        <h2 className={s.login_title}>Вход в личный кабинет</h2>
        <div className={s.sign_up_row}>
          <p className={s.sign_up_title}>Еще нет аккаунта?</p>
            <button  onClick={onOpenRgistrPage} className={s.sign_up_btn}>Зарегистрироваться</button>
        </div>
      </div>
      <div className={s.form}>
        <form onSubmit={handleSubmit(onSubmiting)}>
          <div className={s.input_wrap}>
            <div className={s.input_title}>
              <label className={s.input_title_txt} htmlFor={`${id}-email`}>
                Электронная почта
              </label>
            </div>
            <input
              className={s.input_field}
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              aria-describedby={`${id}-error-email-message`}
              {...register("email", { required: "The field is required" })}
            />
            {errors.email && (
              <p
                className={s.error_message_txt}
              >
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={s.input_wrap}>
            <div className={s.input_title}>
              <label className={s.input_title_txt} htmlFor={`${id}-password`}>
                Пароль
              </label>
            </div>
            <input
              className={s.input_field}
              id={`${id}-password`}
              name="password"
              type="password"
              autoComplete="current-password"
              aria-describedby={`${id}-error-password-message`}
              {...register("password", {
                required: "The field is required",
                minLength: {
                  value: 8,
                  message: "min length is 10 ",
                },
              })}
            />
            {errors.password && (
              <p
                className={s.error_message_txt}
                id={`${id}-error-password-message`}
                aria-live="assertive"
              >
                {errors.password.message}
              </p>
            )}
          </div>
          <div className={s.input_tools_wrap}>
            <button
              className={s.continue_btn}
              disabled={isSubmitting}
              type="submit"
            >
              Продолжить
            </button>
            <div className={s.input_link}>
                <Link className={s.forget_password} to="/forgetpassword">
                  Забыли пароль
                </Link>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginModal;
