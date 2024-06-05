import {useSelector } from "react-redux";
import pdf_ico from "./../../../assets/img/pdf_ico.svg";
import { useEffect, useState } from "react";
import s from './Myprofile.module.css'
import { EntityFielInfo } from "./EntityFielInfo/EntityFielInfo";

export const MyProfile=()=>{
  const user_email = useSelector((state) => state.user.userInf.user.email);
  const user = useSelector((state) => state.user.userInf.user);
  const client = useSelector((state) => state.user.userInf.client);
  const [radioBtnNum, setRadioBtnNum]=useState({
    legal: true,
    physical: false,
  })
  const[passwordType,setPasswordType]=useState(false)

  const arr4 = [1, 2, 3, 4];
  const legalEntity=[{
    fieldName: 'Наименнование компании', 
    value: client.company_name, 
  },
  {
    fieldName: 'Страна регистрации', 
    value: client.country, 
  },
  {
    fieldName: 'Номер свидетельства', 
    value: client.certificate_number, 
  },
  {
    fieldName: 'Дата регистрации', 
    value: client.date_register, 
  },
  {
    fieldName: 'Юридический адрес', 
    value: client.ur_address, 
  },
  {
    fieldName: 'Учетные номера налогоплательщика', 
    value: client.unp, 
  },
  {
    fieldName: 'ФИО директора', 
    value: client.fio_director, 
  },
  {
    fieldName: 'Телефон', 
    value: client.phone, 
  },
  {
    fieldName: 'Telegram', 
    value: client.telegram, 
  },
  {
    fieldName: 'ID Telegram  для получения уведомлений', 
    value: user.telegram_id, 
  },
  {
    fieldName: 'Email', 
    value: user.email, 
  },
  {
    fieldName: 'Web', 
    value: client.web, 
  },
]
  const physicalEntity=[{
    fieldName: 'Как давно в бизнесе', 
    value: '', 
  },
  {
    fieldName: 'Номер телефона', 
    value: client.phone, 
  },
  {
    fieldName: 'Как обращаться(Имя)', 
    value: client.name_ru, 
  },
  {
    fieldName: 'Email', 
    value: user_email, 
  },
]
  return(
            <>
              <p className={s.my_profile_txt}>Мой профиль</p>
              <div className={s.profile_data_fields_info}>
                <div className={s.profile_data_title_info}>
                  <p className={s.profile_data_title}>Данные пользователя</p>
                  <div className={s.profile_methods}>
                    <span className={s.user_agreement_pair}>
                      <img src={pdf_ico} className={s.user_files_ico} />
                      Пользовательское соглашение
                    </span>
                    <span className={s.user_agreement_pair}>
                      Изменить данные профиля
                    </span>
                  </div>
                </div>
                <div className={s.data_info_fields}>
                  <div className={s.name_w_value}>
                    <div className={s.field_name}>Имя</div>
                    <input
                      className={s.field_value}
                      disabled
                      value={client.name_ru ? client.name_ru : "Не указано"}
                    ></input>
                  </div>
                  <div className={s.name_w_value}>
                    <div className={s.field_name}>Фамилия</div>
                    <input
                      className={s.field_value}
                      disabled
                      value={
                        client.second_name_ru
                          ? client.second_name_ru
                          : "Не указано"
                      }
                    ></input>
                  </div>
                  <div className={s.name_w_value}>
                    <div className={s.field_name}>Номер телефона</div>
                    <input
                      className={s.field_value}
                      disabled
                      value={client.phone ? client.phone : "Не указано"}
                    ></input>
                  </div>
                  <div className={s.name_w_value}>
                    <div className={s.field_name}>E-mail</div>
                    <input
                      className={s.field_value}
                      disabled
                      value={user_email ? user_email : "Не указано"}
                    ></input>
                  </div>
                </div>
              </div>

              <div className={s.profile_password}>
                <div className={s.profile_data_title_info}>
                  <p className={s.profile_data_title}>
                    Пароль для входа в аккаунт
                  </p>
                  <div className={s.profile_methods}>
                    <span className={s.user_agreement_pair}>
                      Изменить данные профиля
                    </span>
                  </div>
                </div>
                <div className={s.data_info_fields}>
                  <div className={s.name_w_value}>
                    <div className={s.field_name}>Пароль</div>
                    <form  className={s.password_form}>
                      <input
                        type={!passwordType?'password':'text'}
                        className={s.password_field_value}
                        disabled
                        value={client.password ? client.password : "Не указано"}
                      ></input>
                      <button onClick={()=>setPasswordType(!passwordType)} type='button' className={s.password_type_btn}>👁️</button>
                    </form>
                    
                  </div>
                </div>
              </div>
              <div className={s.about_company_wrap}>
                <div className={s.title_line_wrap}>
                  <p className={s.line_title}>Сведение о компании</p>
                  <button className={s.change_profile_data_btn}>
                    Изменить данные профиля
                  </button>
                </div>
                <p className={s.inner_text}>
                  После заполнения данных Вам будет предоставлен доступ для
                  просмотра торгов. Решение о предоставлении доступа к торгам
                  будет принято на основании личной беседы. Мы cкоро свяжемся с
                  Вами, ожидайте
                </p>
                <div className={s.choose_entity}>
                  <div className={s.entity}>
                    <span id="legal"  onClick={()=>{setRadioBtnNum({legal:true, physical: false})}} className={s.entity_radio_btn}/>
                    <span className={radioBtnNum.legal ? `${s.radioBtn_background} ${s.active}`: s.radioBtn_background }></span>
                    <label htmlFor="legal" onClick={()=>{setRadioBtnNum({legal:true, physical: false})}}  className={s.entity_txt}>Юридическое лицо</label>
                  </div>
                  <div className={s.entity}>
                    <span  id="physical" onClick={()=>{setRadioBtnNum({legal:false, physical: true})}} className={s.entity_radio_btn} />
                    <span className={radioBtnNum.physical ? `${s.radioBtn_background} ${s.active}`: s.radioBtn_background }></span>
                    <label htmlFor="physical" onClick={()=>{setRadioBtnNum({legal:false, physical: true})}} className={s.entity_txt}>Физическое лицо</label>
                  </div>
                  
                  <ul className={s.company_info_list}>
                    {radioBtnNum.legal ?legalEntity.map((item) => <EntityFielInfo name={item.fieldName} value={item.value}/>)
                    : radioBtnNum.physical?physicalEntity.map(item=><EntityFielInfo name={item.fieldName} value={item.value}/>):''
                    }
                  </ul>
                  <div className={s.bottom_line}>
                    <span className={s.user_regist_doc}>
                      Свидетельство о регистрации 
                      <img src={pdf_ico} className={s.user_regist_doc_ico} />
                    </span>
                  </div>
                  <div className={s.bottom_line_last}>
                    <div className={s.check_box_wrap}>
                      <input type="checkBox" className={s.check_box} />
                    </div>
                    <p className={s.user_regist_doc}>Я осзнакомился с</p>
                    <button className={s.user_agreement_btn}>
                      Пользовательским соглашение
                    </button>
                  </div>
                </div>
              </div>
              <div className={s.upload_files_wrap}>
                <div className={s.title_line_wrap}>
                  <p className={s.line_title}>Загруженные файлы</p>
                  <span className={s.user_agreement_pair}>
                    Изменить данные профиля
                  </span>
                </div>
                <ul className={s.upload_files_list}>
                  {arr4.map((item) => {
                    return (
                      <li className={s.upload__item}>
                        <span className={s.upload_file_name}>
                          <img src={pdf_ico} className={s.user_files_ico} />
                          Загруженный документ x
                        </span>
                        <span className={s.day_of_uploading}>
                          Загружен 01.09.2023
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div> 
            </>
  )
}
    

  
  