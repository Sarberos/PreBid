
import { BidCommonInfo } from './BidCommonInfo/BidCommonInfo'
import s from './BidInfo.module.css'

export const BidInfo =({carCharacteristic})=>{
    return(
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
                <BidCommonInfo  carCharacteristic={carCharacteristic}/>
              </div>
    )
}

