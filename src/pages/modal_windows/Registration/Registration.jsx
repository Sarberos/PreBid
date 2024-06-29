import { useForm } from 'react-hook-form'
import s from './Registration.module.css'
import {useId} from 'react'

const Registration= ()=>{
  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmiting = (data) => {
    console.log(data);
  };
  return (
    <div className={s.regstaration_wrap}>
        <div className={s.title}><p className={s.registration_title}>Регистрация в личном кабинете</p></div>
      <form onSubmit={handleSubmit(onSubmiting)} className={s.form_wrap}>
        <div className={s.field_pair}>
          <label htmlFor={`${id}--surname`} className={s.field_title}>
            Фамилия
          </label>
          <input
            {...register("surname",{required: "The field is required" })}
            id={`${id}--surname`}
            type="text"
            className={s.field_input}
            aria-describedby={`${id}-error-surname-message`}
          />
          { errors.surname &&(
            <p
            className={s.error_message_txt}
            id={`${id}-error-surname-message`}
            aria-live="assertive"
          >
            {errors.surname.message}
          </p>
          )}
        </div>

        <div className={s.field_pair}>
          <label htmlFor={`${id}--name`} className={s.field_title}>
            Имя
          </label>
          <input
            {...register("name",{required: "The field is required" })}
            id={`${id}--name`}
            type="text"
            className={s.field_input}
            aria-describedby={`${id}-error-name-message`}
          />
          {errors.name && (
            <p className={s.error_message_txt}
            id={`${id}-error-name-message`}
            aria-live="assertive">
                {errors.name.message}
            </p>
          )}
        </div>

        <div className={s.field_pair}>
          <label htmlFor={`${id}--number`} className={s.field_title}>
            Номер телефона
          </label>
          <input
            {...register("number",{required: "The field is required" })}
            id={`${id}--number`}
            type="number"
            className={s.field_input}
            aria-describedby={`${id}-error-number-message`}

          />
          {errors.number && (
            <p className={s.error_message_txt}
            id={`${id}-error-number-message`}
            aria-live="assertive">
                {errors.number.message}
            </p>
          )}
        </div>

        <div className={s.field_pair}>
          <label htmlFor={`${id}--email`} className={s.field_title}>
            Email
          </label>
          <input
            {...register("email", { required: "The field is required" })}
            autoComplete="email"
            id={`${id}--email`}
            type="email"
            className={s.field_input}
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

        <div className={s.field_pair}>
          <label htmlFor={`${id}--password`} className={s.field_title}>
            Пароль
          </label>
          <input
            {...register("password", {
              required: "The field is required",
              minLength: {
                value: 8,
                message: "min length is 10 ",
              },
            })}
            autoComplete="current-password"
            id={`${id}--password`}
            type="password"
            className={s.field_input}
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
        <div className={s.button_wrap}>
        <button
          disabled={isSubmitting}
          type="submit"
          className={s.form_btn}
        >Зарегистрироваться
        </button>
        </div>
        
      </form>
    </div>
  );
}
 export default Registration