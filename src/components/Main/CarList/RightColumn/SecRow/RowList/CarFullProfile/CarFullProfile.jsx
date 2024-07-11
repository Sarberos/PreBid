import { Link } from 'react-router-dom';
import s from './CarFullProfile.module.css'
import {useId,useState,useEffect} from 'react'
import bugatti_img from './../../../../../../../assets/img/main_bugatti.jpg'
import bugatti_side_img from './../../../../../../../assets/img/side_bugatti.jpg'
import bugatti_back_img from './../../../../../../../assets/img/back_bugatti.jpg'
import less_arrow from './../../../../../../../assets/img/smallless_arrow.svg'
import transport_logo from './../../../../../../../assets/img/logo.svg'
import copy_img from './../../../../../../../assets/img/copy_img.svg'
import Header from '../../../../../../Header/Header';
import Footer from '../../../../../../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setUserInf, userInfThunk } from '../../../../../../../app/redux/mainSlice';
import Preloader from '../../../../../../Tools/Preloader';
import { CarFullProfileSwiper } from './CarFullProfileSwiper/CarFullProfileSwiper';

function CarFullProfile() {
  const id=useId()
  const dispatch=useDispatch()
  const [imgNumber, setImg]=useState(1)
  const [inBookmark, setBookmark]= useState(false)
  const isLoading = useSelector((state) => { return state.user.isLoading;});

  useEffect(()=>{
    if(localStorage.getItem('access_token')){
      const userInfPromise= new Promise((resolve,reject)=>{
        resolve(dispatch(userInfThunk()))
      })
      userInfPromise.then(response=>{
        dispatch(setUserInf(response.payload.data));
        dispatch(setIsAuth(response.payload.data.status))
      }) 
    }
  },[dispatch])



  if (isLoading) {
    return <Preloader />;
  } else {
    return (
      <>
        <Header />
        <div className={s.wrapper}>
          <div className={s.car_profile_wrap}>
            <div className={s.go_home}>
              <img src={less_arrow} alt="" className={s.less_arrow} />
              <Link to="/" className={s.home_page_link}>
                Назад к результатам{" "}
              </Link>
            </div>
            <div className={s.profile_head}>
              <h2 className={s.title}>Car Name</h2>
              <div className={s.head_tools}>
                <div className={s.head_tool}>
                  <button
                    onClick={() => setBookmark(!inBookmark)}
                    id={`${id}-bookmark`}
                    className={
                      inBookmark ? s.added__to_bookmark_btn : s.deleted_bookmark
                    }
                  ></button>
                  <label
                    htmlFor={`${id}-bookmark`}
                    className={s.add_bookmark_txt}
                  >
                    {inBookmark ? "Добавить в избранное" : "В избранном"}
                  </label>
                </div>
                <div className={s.head_tool}>
                  <button id={`${id}-share`} className={s.share_btn}></button>
                  <label htmlFor={`${id}-share`} className={s.share_txt}>
                    Поделиться
                  </label>
                </div>
              </div>
            </div>
            <div className={s.car_info_wrap}>
              <div className={s.car_img_wrappeer}>
                <CarFullProfileSwiper />
                <div  className={s.suggestes_img}>
                <div onClick={()=>setImg(1)}  className={s.small_img_wrap}>
                  <img src={bugatti_img} alt="" className={s.small_img} />
                </div>
                <div onClick={()=>setImg(2)}  className={s.small_img_wrap}>
                  <img src={bugatti_side_img} alt="" className={s.small_img} />
                </div>
                <div  onClick={()=>setImg(3)}className={s.small_img_wrap}>
                  <img src={bugatti_back_img} alt="" className={s.small_img} />
                </div>
                <div  onClick={()=>setImg(4)}className={s.small_img_wrap}>
                  <img src={bugatti_side_img} alt="" className={s.small_img} />
                </div>
                </div>
                <div className={s.tools_btns}>
                  <button className={`${s.tool_btn} ${s.all_img}`}>
                    Все фото в одном окне
                  </button>
                  <button className={s.tool_btn}>Скачать фото</button>
                </div>
              </div>

              <div className={s.car_charact_с}>
                <div className={s.main_charact}>
                  <div className={s.charact_title}>Основные характеристики</div>
                  <div className={s.property_list}>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Лот</span>
                      <span className={s.property_value}>65</span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>VIN</span>
                      <span className={s.property_value}>2OKDK3KDOKWD</span>
                      <span className={s.property_img}>
                        <img src={copy_img} alt="" className={s.copy_img} />
                      </span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Объем ДВС</span>
                      <span className={s.property_value}>2995</span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Тип топлива</span>
                      <span className={s.property_value}>Бензин</span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Трансмиссия</span>
                      <span className={s.property_value}>Механика</span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Привод</span>
                      <span className={s.property_value}>Задний</span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Тип кузова</span>
                      <span className={s.property_value}>
                        asasdasd sddsv sdfsdf sdCkddjn djdfjn
                      </span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Цвет кузова</span>
                      <span className={s.property_value}>Черный</span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Пробег</span>
                      <span className={s.property_value}>10000 km</span>
                    </div>
                  </div>
                </div>
                <div className={s.additional_charact}>
                  <div className={s.charact_title}>Дополнительные сведения</div>
                  <div className={s.property_list}>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Тип документа</span>
                      <span className={s.property_value}>
                        jnj dfj NJDNN FND _DFJFOKDFMDKFM
                      </span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Ключи</span>
                      <span className={`${s.property_value} ${s.great}`}>
                        1 ключ
                      </span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Состояние</span>
                      <span className={s.property_value}>Не на ходу </span>
                    </div>
                    <div className={s.property_row}>
                      <span className={s.property_title}>Отчет</span>
                      <span className={`${s.property_value} ${s.great}`}>
                        Доступен
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.bid_c}>
                <div className={s.bid_wrap}>
                  <div className={s.create_bid}>
                    <div className={s.bid_title}>Текущая ставка</div>
                    <div className={s.bid_coast}>
                      <input
                        type="number"
                        className={s.coast_field}
                        placeholder="0"
                      />
                      <button
                        className={`${s.change_coast_btn} ${s.plus_btn}`}
                      ></button>
                      <button
                        className={`${s.change_coast_btn} ${s.minus_btn}`}
                      ></button>
                    </div>
                    <div className={s.create_bid_btn}>Сделать ставку</div>
                  </div>
                  <div className={s.leave_bid}>
                    <div className={s.leave_bid_choose}>
                      <span className={s.win_txt}>Winning bid</span>
                      <span className={s.out_txt}>Outbid</span>
                    </div>
                    <button className={s.buy_now_btn}>
                      Купить сейчас за 1.00$
                    </button>
                  </div>
                </div>
                <div className={s.bid_calculator}>
                  <button className={s.bid_calculator_btn}>
                    Калькулятор стоимости
                  </button>
                </div>
                <div className={s.common_inf}>
                  <div className={s.common_inf_list}>
                    <div className={s.inf_property_row}>
                      <span className={s.inf_property_title}>Статус</span>
                      <span className={s.inf_property_value}>В транзите </span>
                    </div>
                    <div className={s.inf_property_row}>
                      <span className={s.inf_property_title}>
                        Порт назначени
                      </span>
                      <span className={s.inf_property_value}>Минск </span>
                    </div>
                    <div className={s.inf_property_row}>
                      <span className={s.inf_property_title}>
                        Место назначения
                      </span>
                      <span className={s.inf_property_value}> </span>
                    </div>
                    <div className={s.inf_property_row}>
                      <span className={s.inf_property_title}>Датадоставки</span>
                      <span className={s.inf_property_value}>0000-00-00 </span>
                    </div>
                    <div className={s.inf_property_row}>
                      <span className={s.inf_property_title}>Дата торгов</span>
                      <span className={s.inf_property_value}>0000-00-00 </span>
                    </div>
                  </div>

                  <span className={s.common_logo}>
                    <img
                      src={transport_logo}
                      alt=""
                      className={s.common_logo_img}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  }
  
  export default CarFullProfile;