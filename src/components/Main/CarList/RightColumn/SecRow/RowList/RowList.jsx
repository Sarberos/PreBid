import s from './RowList.module.css'

function RowList() {
    return (
    <div className={s.right_columns_sec_row_list}>
        <div className={s.title_car_table_wrap}>
            <div className={s.name_of_column}>Фото</div>
            <div className={s.name_of_column}>№ Лота</div>
            <div className={s.name_of_column}>Год
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Марка</div>
            <div className={s.name_of_column}>Модель</div>
            <div className={s.name_of_column}>Объем
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Одометр
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Дата
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Ставка</div>
            <div className={s.name_of_column}>Действие</div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/black_mers.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за<span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bmw.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/lamba.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/redcar.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bluelight.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/black_mers.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bmw.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/lamba.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/redcar.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bluelight.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/black_mers.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bmw.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/lamba.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/redcar.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bluelight.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/black_mers.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/bmw.png" className={s.car_ava_img} />
                <button className={s.added_to_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
        <div className={s.car_profile_row}>
            <div className={s.car_ava}>
                <img src="./img/lamba.png" className={s.car_ava_img} />
                <button className={s.delete_bookmark}></button>
            </div>
            <div className={s.lot_value}>
                <a href="#" className={s.lot_value_link}>12345</a>
            </div>
            <div className={s.car_year_value}>2020</div>
            <div className={s.car_firm_value}>Volkswagen</div>
            <div className={s.car_make_value}>Golf</div>
            <div className={s.car_volume}>1.5</div>
            <div className={s.car_odometer_value}><span className={s.car_odometer_value_km}>5000</span>км
            </div>
            <div className={s.lot_release_date}>
                <div>01.01.2023</div>
                <div>09.00</div>
            </div>
            <div className={s.bid_price}> $ <span className={s.bid_price_value}>40000</span></div>
            <div className={s.main_actions}>
                <button className={s.create_bid_btn}>Сделать ставку</button>
                <a href="#" className={s.buy_now_link}>Купить сейчас за <span
                        className={s.buy_now_price}>21500$</span></a>
            </div>
        </div>
    </div>
    )
  }
  
  export default RowList;