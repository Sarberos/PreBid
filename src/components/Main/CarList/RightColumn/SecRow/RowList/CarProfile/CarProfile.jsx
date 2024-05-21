import s from './CarProfile.module.css'
import blackMers_png from './../../../../../../../assets/img/black_mers.png'
import { Link, NavLink } from 'react-router-dom';
import {useState} from 'react'


function CarProfile() {
  const [rowBookmark, setRowBookmark]=useState(false)

    return (
      <div className={s.car_profile_row}>
        <div className={s.car_ava}>
        <Link  to='CarFullProfile/1' ><img src={blackMers_png} className={s.car_ava_img} /> </Link>
          <button onClick={()=>setRowBookmark(!rowBookmark)} className={rowBookmark?s.added_to_bookmark:s.delete_bookmark}></button>
        </div>
        <div className={s.lot_value}>
          <Link to='CarFullProfile/1' >12345</Link>
        </div>
        <div className={s.car_year_value}>2020</div>
        <div className={s.car_firm_value}>Volkswagen</div>
        <div className={s.car_make_value}>Golf</div>
        <div className={s.car_volume}>1.5</div>
        <div className={s.car_odometer_value}>
          <span className={s.car_odometer_value_km}>5000</span>км
        </div>
        <div className={s.lot_release_date}>
          <div>01.01.2023</div>
          <div>09.00</div>
        </div>
        <div className={s.bid_price}>
          {" "}
          $ <span className={s.bid_price_value}>40000</span>
        </div>
        <div className={s.main_actions}>
          <button className={s.create_bid_btn}>Сделать ставку</button>
          <a href="#" className={s.buy_now_link}>
            Купить сейчас за<span className={s.buy_now_price}>21500$</span>
          </a>
        </div>
      </div>
    );
  }
  
  export default CarProfile;