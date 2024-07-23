import Header from '../../Header/Header'
import Footer from './../../Footer/Footer'
import Paginator from './../../Main/CarList/RightColumn/ThirdRow/Paginator/Paginator'
import s from './Auctions.module.css'
import { DateRangePicker} from 'rsuite';
import {useEffect, useState} from 'react';
import QuantitySort from './../../Main/CarList/FirstRow/QuantitySort/QuantitySort'
import { useDispatch, useSelector } from 'react-redux';
import { setAuctionCurrentPage,setAuctionCurrentLimit, setLoginModalStatus } from '../../../redux/mainSlice';
import { useCountries } from '../../hooks/auctions/useCountries';
import { useSearch } from '../../hooks/auctions/useSearch';
import { toDate } from './stringToDate';
import Preloader from '../../Tools/Preloader/Preloader';
import { AuctionList } from './AuctionList/AuctionList';
import { useNavigate } from 'react-router-dom';
import { SimpleModal } from '../../SImpleModal/SimpleModal';
import LoginModal from '../../modal_windows/LoginModal/LoginModal';




export const Auctions=({openLogin})=>{
  
  const navigate =useNavigate()
    const dispatch=useDispatch();
    const state=useSelector(state=>state.user)
    const[value,setValue]= useState(null);
    const [dateValue,setDateValue]=useState({date1:null,date2:null})
    const[currentPage,setcurrentPage]= useState(state.auctions.currentPage);
    const[auctionsLimit,setAuctionsLimit]= useState(state.auctions.auctionsLimit);
    const[countryId, setCountryId]=useState(0);
    const [loginStatus, setLoginStatus] = useState(false);
    const {data,isLoading}=useCountries();
    const {
      data: searchData,
      isLoading: searchLoading,
      refetch: refetchSearchInfo,
    } = useSearch(auctionsLimit, currentPage,countryId,dateValue.date1,dateValue.date2);

    const total_results=searchData?.pagination.total_results;

    let pagesQuantity=Math.ceil(total_results/auctionsLimit)

    const changeSortTitle=(e) => {
        dispatch(setAuctionCurrentPage(1))
        setcurrentPage(1)
        let currentValue=e.target.innerText
        dispatch(setAuctionCurrentLimit(currentValue));
        setAuctionsLimit(currentValue);
      }
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
useEffect(()=>{
  if (!state.isAuth) {
    navigate('/')
    openLogin()
  }
},[])
  
    return (
      <>
        <div className={s.wrapper}>
          <div className={s.main_wrap}>
            <div className={s.main_inner_wrap}>
              <h2 className={s.title}>Аукционы</h2>
              <div className={s.main_info_wrap}>

                    <div className={s.filter_wrap}>
                    <ul className={s.countries_wrap}>
                        <li
                        onClick={()=>setCountryId(null)}
                        className={
                            countryId===0 ? `${s.one_country} ${s.active}` : s.one_country
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
                            activeLimitValue={state.auctions.auctionsLimit}
                            onChangeSortTitle={(e)=>changeSortTitle(e)}
                        />
                        </div>
                    </div>
                    </div>

                    <AuctionList searchData={searchData} searchLoading={searchLoading}  total_results={total_results}/>
                    
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
        </div>
      </>
    );
}