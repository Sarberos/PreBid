import s from './TileCarProfile.module.css'
import blackMers_png from './../../../../../../../assets/img/black_mers.png'
import lamba_png from './../../../../../../../assets/img/lamba.png'
import redcar_png from './../../../../../../../assets/img/redcar.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToFavStatus, carInfThunk, carInfThunkWithOutAnim, setFavouriteStatus, setTransportsInf } from '../../../../../../../redux/mainSlice'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Fetching from '../../../../../../../http/api_request'
import { routesValues } from '../../../../../../../consts/pagesConsts'

function TileCarProfile({name,img,id,favourite,year,marka,model,volume,odometr,data,now_price,show_button_buy_now}) {
  const dispatch=useDispatch()
  const [carImgNum,setCarImgNum]=useState(1)
 
  const queryClient = useQueryClient()

  const onSetBookMarkStatus=(id,favourite)=>{
      dispatch(addToFavStatus({id,add:!favourite})).then(
      (resp)=>{
          queryClient.invalidateQueries({queryKey:['carList'], refetchType: 'all'})
          queryClient.invalidateQueries({queryKey:['favouriteCarsList'], refetchType: 'all'},)
        
      } )
  }
  
  
    return (
      <div className={s.car_profile_tile}>
        <div className={s.main_tile_img_wrap}>
          <Link className={s.main_tile_img_wrap} to={`${routesValues.CARFULLPROFILE}/${id}`}>
            <img
              src={img?img :blackMers_png
              }
              className={s.main_tile_img}
            />{" "}
          </Link>
          <span
            onClick={()=>onSetBookMarkStatus(id,favourite)}
            className={
              favourite ? s.tile_added_to_bookmark : s.tile_delete_bookmark
            }
          ></span>
        </div>
        <div className={s.main_tile_info_wrap}>
          <h2 className={s.tile_title}>
          <Link className={s.car_full_profile_link}  to={`${routesValues.CARFULLPROFILE}/${id}`}>{name}</Link>
          </h2>
          <div className={s.tile_info_wrap}>
            <div className={s.tile_charact_row}>
              <div className={s.tile_charact_name}>Номер лота</div>
              <div className={s.tile_charact__value}>
                <Link
                   to={`${routesValues.CARFULLPROFILE}/${id}`}
                  className={s.tile_charact__value_link}
                >
                  {id}
                </Link>
              </div>
            </div>
            <div className={s.tile_charact_row}>
              <div className={s.tile_charact_name}>Дата акциона</div>
              <div className={s.tile_charact__value}>{data}</div>
            </div>
            <div className={s.tile_charact_row}>
              <div className={s.tile_charact_name}>Объем двигателя</div>
              <div className={s.tile_charact__value}>{volume}</div>
            </div>
            <div className={s.tile_charact_row}>
              <div className={s.tile_charact_name}>Тип топлива</div>
              <div className={s.tile_charact__value}>Бензин</div>
            </div>
            <div className={s.tile_charact_row}>
              <div className={s.tile_charact_name}>Одометр</div>
              <div className={s.tile_charact__value}>
                <span>{odometr}</span> км
              </div>
            </div>
            <div className={s.tile_main_actions}>
              <div className={s.tile_main_actions_bid}>
                <div className={s.now_prise}>
                  <div className={s.now_prise_title}>Текущая ставка</div>
                  <div className={s.now_price_value}>
                    $ <span>{now_price}</span>
                  </div>
                </div>
                <button className={s.create_bid_btn}>Сделать ставку</button>
              </div>
              <div className={s.buy_now_wrap}>
                <a style={{display: show_button_buy_now ? 'flex':'none',}} href="#" className={s.buy_now_link}>
                  Купить сейчас за <span>21500</span>$
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default TileCarProfile;