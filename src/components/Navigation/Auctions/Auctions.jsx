import Header from '../../Header/Header'
import Footer from './../../Footer/Footer'
import Paginator from './../../Main/CarList/RightColumn/ThirdRow/Paginator/Paginator'
import s from './Auctions.module.css'
import { DateRangePicker} from 'rsuite';
import {useEffect, useState} from 'react';
import QuantitySort from './../../Main/CarList/FirstRow/QuantitySort/QuantitySort'
import { useDispatch, useSelector } from 'react-redux';
import { setAuctionCurrentPage,setAuctionCurrentLimit } from '../../../redux/mainSlice';
import { useCountries } from '../../hooks/auctions/useCountries';
import { useSearch } from '../../hooks/auctions/useSearch';
import { toDate } from './stringToDate';




export const Auctions=()=>{
    const dispatch=useDispatch();
    const auctions=useSelector(state=>state.user.auctions)
    const[value,setValue]= useState(null);
    const [dateValue,setDateValue]=useState({date1:null,date2:null})
    const[currentPage,setcurrentPage]= useState(auctions.currentPage);
    const[auctionsLimit,setAuctionsLimit]= useState(auctions.auctionsLimit);
    const[countryId, setCountryId]=useState(0);
    const {data,isLoading}=useCountries();
    const {
      data: searchData,
      isLoading: searchLoading,
      refetch: refetchSearchInfo,
    } = useSearch(auctionsLimit, currentPage,countryId,dateValue.date1,dateValue.date2);
    
    const changeSortTitle=(e) => {
        dispatch(setAuctionCurrentPage(1))
        setcurrentPage(1)
        let currentValue=e.target.innerText
        dispatch(setAuctionCurrentLimit(currentValue));
        setAuctionsLimit(currentValue);
      }

    const total_results=searchData?.pagination.total_results;
    let pagesQuantity=Math.ceil(total_results/auctionsLimit)
    
    const onChangeActivePage=(e)=>{
        const eventPage=parseInt(e.target.innerText);
        setcurrentPage(eventPage);
        dispatch(setAuctionCurrentPage(eventPage))
        
    }
    function prevPage(){
       setcurrentPage(searchData?.pagination.prev_page)
       dispatch(setAuctionCurrentPage(searchData?.pagination.prev_page))
    }
    function nextPage(){
        setcurrentPage(searchData?.pagination.next_page)
        dispatch(setAuctionCurrentPage(searchData?.pagination.next_page)) 
  }

  const onDateRangePickerVhange = (date) => {
    setValue(date);
    setDateValue({date1:date[0],date2:date[1]});
    console.log(date[0],date[1])
  };
    return (
      <>
        <div className={s.wrapper}>
          {/* <Header /> */}
          <div className={s.main_wrap}>
            <div className={s.main_inner_wrap}>
              <h2 className={s.title}>Аукционы</h2>
              <div className={s.main_info_wrap}>

                    <div className={s.filter_wrap}>
                    <ul className={s.countries_wrap}>
                        <li
                        onClick={()=>setCountryId(1)}
                        className={
                            countryId===1 ? `${s.one_country} ${s.active}` : s.one_country
                        }
                        >
                        Все
                        </li>
                        {!isLoading? data?.countries.map((country) => (
                        <li
                            onClick={()=>{setCountryId(country.id)}}
                            className={
                                countryId===country.id ? `${s.one_country} ${s.active}` : s.one_country
                            }
                        >
                            {country.name_ru}
                        </li>
                        )):<li className={s.one_country}>{'Загрузка'}</li>}
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
                            onChange={(date)=>onDateRangePickerVhange(date)}
                            className={s.dataRangePicker}
                            size="lg"
                            today="false"
                            placeholder="дд.мм.гггг-дд.мм.гггг"
                            format="dd.MM.yyyy"
                        />
                        </div>
                        <div className={s.select_quantity_wrap}>
                        <QuantitySort
                            activeLimitValue={auctions.auctionsLimit}
                            onChangeSortTitle={(e)=>changeSortTitle(e)}
                        />
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
                        {!searchLoading ? searchData?.content?.map(auction=>(
                            <li className={s.auctionns_byData_wrap}>

                            <article className={s.day_auction}>
                                <h3 className={s.day_auction_date}>{auction.date}</h3>
                                {auction?.contents?.map(auctionItem=>(
                                    <div className={s.day_auction_content}>
                                    <ul className={s.content_list}>
                                        <li className={s.content_item}>
                                            <div className={s.day_auction_country}>
                                                {auctionItem?.countries?.map(auctionItemCountry=>(
                                                    <p className={s.day_auction_country_name}>
                                                        {auctionItemCountry.name_ru}
                                                    </p>
                                                ))}
                                                
                                            </div>
                                            <div className={s.day_auction_id}>
                                                <p className={s.day_auction_name}>{auctionItem.name}</p>
                                                <span className={s.auction_id_result}>
                                                    ID аукциона 
                                                    <p className={s.auction_id_number}>
                                                        {auctionItem.id}
                                                    </p>
                                                </span>
                                            </div>
                                        </li>
                                        <li className={s.content_item}>
                                            <span className={s.cars_sum_txt}>Количество транспортных средств</span>
                                            <span className={s.cars_sum_number}>{auctionItem.transports_count}</span>
                                        </li>
                                        <li className={s.content_item}>
                                            <span className={s.passing_status}>{auctionItem.status.name}</span>
                                        </li>
                                        <li className={s.content_item}>
                                            <button className={s.more_btn}>Смотреть подробнее</button>
                                        </li>
                                    </ul>
                                </div>
                                ))}
                            </article>
                            
                            </li>
                        )):'Загрузка'}
                            
                    </ul>
                    </div>
                    <div className={s.pagination}>
                        <Paginator
                         pagesQuantity={pagesQuantity} 
                         paginationObj={searchData?.pagination}
                         changeActivePage={(e)=>onChangeActivePage(e)}
                         prevPage={()=>prevPage()}
                         nextPage={()=>nextPage()}
                        />
                    </div>
                    
               </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </>
    );
}