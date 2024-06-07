import s from './CarProfile.module.css'
import blackMers_png from './../../../../../../../assets/img/black_mers.png'
import { Link, NavLink } from 'react-router-dom';
import {useState} from 'react'


function CarProfile({img,id,year,marka,model,volume,odometr,data,now_price,show_button_buy_now}) {
  const [rowBookmark, setRowBookmark]=useState(false)

    return (
      <div className={s.car_profile_row}>
        <div className={s.car_ava}>
        <Link  to='CarFullProfile/1' ><img src={img?img:blackMers_png} className={s.car_ava_img} /> </Link>
          <button onClick={()=>setRowBookmark(!rowBookmark)} className={rowBookmark?s.added_to_bookmark:s.delete_bookmark}></button>
        </div>
        <div className={s.lot_value}>
          <Link to='CarFullProfile/1' >{id}</Link>
        </div>
        <div className={s.car_year_value}>{year}</div>
        <div className={s.car_firm_value}>{marka}</div>
        <div className={s.car_make_value}>{model}</div>
        <div className={s.car_volume}>{volume}</div>
        <div className={s.car_odometer_value}>
          <span className={s.car_odometer_value_km}>{odometr}</span>км
        </div>
        <div className={s.lot_release_date}>
          <div>{data}</div>
          <div>09.00</div>
        </div>
        <div className={s.bid_price}>
          $ <span className={s.bid_price_value}>{now_price}</span>
        </div>
        <div className={s.main_actions}>
          <button className={s.create_bid_btn}>Сделать ставку</button>
          <a href="#" style={{display: show_button_buy_now ? 'flex':'none',}} className={s.buy_now_link}>
            Купить сейчас за<span  className={s.buy_now_price}>21500$</span>
          </a>
        </div>
      </div>
    );
  }
  
  export default CarProfile;