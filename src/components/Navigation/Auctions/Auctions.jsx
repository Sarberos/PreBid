import Header from '../../Header/Header'
import Footer from './../../Footer/Footer'
import Paginator from './../../Main/CarList/RightColumn/ThirdRow/Paginator/Paginator'
import s from './Auctions.module.css'
import { DateRangePicker, Pagination } from 'rsuite';
import {useState} from 'react';
import QuantitySort from './../../Main/CarList/RightColumn/FirstRow/QuantitySort/QuantitySort'


export const Auctions=()=>{
    const[value,setValue]= useState(null);
    const countries=['Беларусь','США','Канада','Китай'];
    const total_results=1;

    return (
      <>
        <div className={s.wrapper}>
          <Header />
          <div className={s.main_wrap}>
            <div className={s.main_inner_wrap}>
              <h2 className={s.title}>Аукционы</h2>
              <div className={s.main_info_wrap}>

                    <div className={s.filter_wrap}>
                    <ul className={s.countries_wrap}>
                        <li
                        className={
                            !true ? `${s.one_country} ${s.active}` : s.one_country
                        }
                        >
                        Все
                        </li>
                        {countries.map((country) => (
                        <li
                            className={
                            !true ? `${s.one_country} ${s.active}` : s.one_country
                            }
                        >
                            {country}
                        </li>
                        ))}
                    </ul>
                    <div className={s.sub_sort}>
                        <div className={s.select_data_wrap}>
                        <label
                            htmlFor="DateRangePicker"
                            className={s.dataPickerRange_label}
                        >
                            Показать за период
                        </label>
                        <DateRangePicker
                            id="DateRangePicker"
                            value={value}
                            onChange={(date) => {
                            setValue(date);
                            }}
                            className={s.dataRangePicker}
                            size="lg"
                            today="false"
                            placeholder="дд.мм.гггг-дд.мм.гггг"
                            format="dd.MM.yyyy"
                        />
                        </div>
                        <div className={s.select_quantity_wrap}>
                        <QuantitySort />
                        </div>
                    </div>
                    </div>

                    <div className={s.auctions_list_wrap}>
                    <div className={s.find_results_wrap}>
                        <p className={s.find_txt}>
                        {total_results === 1 ? "Найден" : "Найдено"}
                        </p>
                        <span className={s.find_results}>
                        {total_results === 1
                            ? `${total_results} результат`
                            : (total_results >= 2) & (total_results < 5)
                            ? `${total_results} результатa`
                            : total_results >= 5
                            ? `${total_results} результатов`
                            : ""}
                        </span>
                    </div>
                    <ul className={s.auctions_list_innerWrap}>
                            <li className={s.auctionns_byData_wrap}>

                                <article className={s.day_auction}>
                                    <h3 className={s.day_auction_date}>12.12.2005</h3>
                                    <div className={s.day_auction_content}>
                                        <ul className={s.content_list}>
                                            <li className={s.content_item}>
                                                <div className={s.day_auction_country}>
                                                    <p className={s.day_auction_country_name}>
                                                        США
                                                    </p>
                                                </div>
                                                <div className={s.day_auction_id}>
                                                    <p className={s.day_auction_name}>Аукцион</p>
                                                    <span className={s.auction_id_result}>
                                                        ID аукциона 
                                                        <p className={s.auction_id_number}>
                                                            123
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.cars_sum_txt}>Количество транспортных средств</span>
                                                <span className={s.cars_sum_number}>0</span>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.passing_status}>Проходит сейчас </span>
                                            </li>
                                            <li className={s.content_item}>
                                                <button className={s.more_btn}>Смотреть подробнее</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.day_auction_content}>
                                        <ul className={s.content_list}>
                                            <li className={s.content_item}>
                                                <div className={s.day_auction_country}>
                                                    <p className={s.day_auction_country_name}>
                                                        США
                                                    </p>
                                                    <p className={s.day_auction_country_name}>
                                                    Латвия
                                                    </p>
                                                </div>
                                                <div className={s.day_auction_id}>
                                                    <p className={s.day_auction_name}>Аукцион</p>
                                                    <span className={s.auction_id_result}>
                                                        ID аукциона 
                                                        <p className={s.auction_id_number}>
                                                            123
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.cars_sum_txt}>Количество транспортных средств</span>
                                                <span className={s.cars_sum_number}>0</span>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.passing_status}>Проходит сейчас </span>
                                            </li>
                                            <li className={s.content_item}>
                                                <button className={s.more_btn}>Смотреть подробнее</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.day_auction_content}>
                                        <ul className={s.content_list}>
                                            <li className={s.content_item}>
                                                <div className={s.day_auction_country}>
                                                    <p className={s.day_auction_country_name}>
                                                        США
                                                    </p>
                                                    <p className={s.day_auction_country_name}>
                                                    Латвия
                                                    </p>
                                                </div>
                                                <div className={s.day_auction_id}>
                                                    <p className={s.day_auction_name}>Аукцион</p>
                                                    <span className={s.auction_id_result}>
                                                        ID аукциона 
                                                        <p className={s.auction_id_number}>
                                                            123
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.cars_sum_txt}>Количество транспортных средств</span>
                                                <span className={s.cars_sum_number}>0</span>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.passing_status}>Проходит сейчас </span>
                                            </li>
                                            <li className={s.content_item}>
                                                <button className={s.more_btn}>Смотреть подробнее</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.day_auction_content}>
                                        <ul className={s.content_list}>
                                            <li className={s.content_item}>
                                                <div className={s.day_auction_country}>
                                                    <p className={s.day_auction_country_name}>
                                                        США
                                                    </p>
                                                    <p className={s.day_auction_country_name}>
                                                    Латвия
                                                    </p>
                                                </div>
                                                <div className={s.day_auction_id}>
                                                    <p className={s.day_auction_name}>Аукцион</p>
                                                    <span className={s.auction_id_result}>
                                                        ID аукциона 
                                                        <p className={s.auction_id_number}>
                                                            123
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.cars_sum_txt}>Количество транспортных средств</span>
                                                <span className={s.cars_sum_number}>0</span>
                                            </li>
                                            <li className={s.content_item}>
                                                <span className={s.passing_status}>Проходит сейчас </span>
                                            </li>
                                            <li className={s.content_item}>
                                                <button className={s.more_btn}>Смотреть подробнее</button>
                                            </li>
                                        </ul>
                                    </div>

                                </article>
                                
                                </li>
                    </ul>
                    </div>
                    <div className={s.pagination}>
                        {/* <Paginator
                        //  pagesQuantity={pagesQuantity} 
                        //  paginationObj={transports.pagination}
                        //  changeActivePage={(e)=>onChangeActivePage(e)}
                        //  prevPage={()=>prevPage()}
                        //  nextPage={()=>nextPage()}
                        /> */}
                    </div>
                    
               </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
}