import s from './TileCarProfile.module.css'
import blackMers_png from './../../../../../../../../assets/img/black_mers.png'
import lamba_png from './../../../../../../../../assets/img/lamba.png'
import redcar_png from './../../../../../../../../assets/img/redcar.png'
import {useState} from 'react'

function TileCarProfile() {
  const [tileBookmark, setTileBookmark]=useState(false)
  const [carImgNum,setCarImgNum]=useState(1)

    return (
          <div className={s.car_profile_tile}>
            <div className={s.main_tile_img_wrap}>
              <img
                src={carImgNum === 1 ? blackMers_png : carImgNum === 2 ? lamba_png : carImgNum === 3 ? redcar_png : ''}
                className={s.main_tile_img}
              />
              <button onClick={()=>setTileBookmark(!tileBookmark)} className={tileBookmark?s.tile_added_to_bookmark:s.tile_delete_bookmark}></button>
              <span className={s.car_ava_whirligig}>
                <div  onClick={()=>setCarImgNum(1)} className={ carImgNum===1 ?`${s.car_ava_whirligig_elem} ${s.active}`:s.car_ava_whirligig_elem}></div>
                <div  onClick={()=>setCarImgNum(2)}  className={ carImgNum===2 ?`${s.car_ava_whirligig_elem} ${s.active}`:s.car_ava_whirligig_elem}></div>
                <div onClick={()=>setCarImgNum(3)}  className={ carImgNum===3 ?`${s.car_ava_whirligig_elem} ${s.active}`:s.car_ava_whirligig_elem}></div>
              </span>
            </div>
            <div className={s.main_tile_info_wrap}>
              <h2 className={s.tile_title}>
                2020 VOLKSWAGENGolf Sportsvan VII плюс длинное название 
              </h2>
              <div className={s.tile_info_wrap}>
                <div className={s.tile_charact_row}>
                  <div className={s.tile_charact_name}>Номер лота</div>
                  <div className={s.tile_charact__value}>
                    <a href="#" className={s.tile_charact__value_link}>
                      2345678
                    </a>
                  </div>
                </div>
                <div className={s.tile_charact_row}>
                  <div className={s.tile_charact_name}>Дата акциона</div>
                  <div className={s.tile_charact__value}>01.07.2023</div>
                </div>
                <div className={s.tile_charact_row}>
                  <div className={s.tile_charact_name}>Объем двигателя</div>
                  <div className={s.tile_charact__value}>2997</div>
                </div>
                <div className={s.tile_charact_row}>
                  <div className={s.tile_charact_name}>Тип топлива</div>
                  <div className={s.tile_charact__value}>Бензин</div>
                </div>
                <div className={s.tile_charact_row}>
                  <div className={s.tile_charact_name}>Одометр</div>
                  <div className={s.tile_charact__value}>
                    <span>31 068</span> км
                  </div>
                </div>
                <div className={s.tile_main_actions}>
                  <div className={s.tile_main_actions_bid}>
                    <div className={s.now_prise}>
                      <div className={s.now_prise_title}>Текущая ставка</div>
                      <div className={s.now_price_value}>
                        $ <span>20 000</span>
                      </div>
                    </div>
                    <button className={s.create_bid_btn}>Сделать ставку</button>
                  </div>
                  <div className={s.buy_now_wrap}>
                    <a href="#" className={s.buy_now_link}>
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