import { Link } from "react-router-dom";
import s from "./LoginModal.module.css";
import { useId } from "react";
import { useForm } from "react-hook-form";

const LoginModal = () => {
  const id =useId();
  const{register,handleSubmit,formState: { isSubmitting, errors },}=useForm()

  const onSubmiting=(data)=>{
    console.log(data);
  }

  return (
    <div className={s.login_wrapper}>
      <div className={s.title}>
        <h2 className={s.login_title}>Вход в личный кабинет</h2>
        <div className={s.sign_up_row}>
          <p className={s.sign_up_title}>Еще нет аккаунта?</p>
          <Link className={s.sign_up_link} to="/signup">
            <button className={s.sign_up_btn}>Зарегистрироваться</button>
          </Link>
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
                id={`${id}-error-email-message`}
                aria-live="assertive"
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

    // <div className={s.form}>
    //   <form onSubmit={handleSubmit(onSubmiting)}>
    //     <div className={s.field_pair}>
    //       <label htmlFor={`${id}-email`} className={s.field_title}>
    //         Электронная почта
    //       </label>
    //       <input
    //         {...register("email")}
    //         id={`${id}-email`}
    //         type="email"
    //         className={s.field_input}
    //       />
    //     </div>
    //     <div className={s.field_pair}>
    //       <label htmlFor={`${id}-password`} className={s.field_title}>
    //         Password
    //       </label>
    //       <input
    //         {...register("password")}
    //         id={`${id}-password`}
    //         type="password"
    //         className={s.field_input}
    //       />
    //     </div>
    //     <button
    //     type="submit"
    //     className={s.submit_btn}>
    //       Продолжить
    //     </button>
    //   </form>
    // </div>
  );
};
export default LoginModal;
