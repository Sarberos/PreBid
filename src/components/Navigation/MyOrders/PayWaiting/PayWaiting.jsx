import { useOrders } from "../../../hooks/my-orders/useOrders"
import s from "./PayWaiting.module.css"
import carImg from './../../../../assets/img/black_mers.png'
import accordion_arrow from './../../../../assets/img/Accordion.svg'
import Paginator from './../../../Main/CarList/RightColumn/ThirdRow/Paginator/Paginator'
import { useState } from "react"

export const PayWaiting=()=>{
    const [lotsLimit, setlotsLimit]=useState(10);
    const[currentPage,setCurrentPage]=useState(1)
    const {mutate, data:lotsInfo, isPending} =useOrders('finish')

    const total_results=lotsInfo?.data?.pagination?.total_results;
    let pagesQuantity=Math.ceil(total_results/lotsLimit)
    const onChangeActivePage=(e)=>{
        const eventPage=parseInt(e.target.innerText);
        setCurrentPage(eventPage);
    }
    function prevPage(){
        setCurrentPage(lotsInfo?.data?.pagination.prev_page)
    }
    function nextPage(){
        setCurrentPage(lotsInfo?.data?.pagination.next_page)
  }
    
    if (isPending){
        return <div>{'Загрузка'}</div>
    }else{
    return (
      <>
        <div className={s.profile_wrapper}>
          <div className={s.profile__inner_wrapper}>
            <article className={s.wrapper_for_card}>
              <div className={s.img_wrapper}>
                <img src={carImg} alt="" className={s.card_img} />
              </div>
              <div className={s.card_info}>
                <p className={s.card_info_title}>2022 AUDI Q7</p>
                <div className={s.bid_characteristics}>
                  <div className={s.pair_info_wrap}>
                    <div className={s.one_of_pair_info}>
                      <span className={s.pair_title}>Номер лота</span>
                      <span className={s.pair_lot_number_subtitle}>64</span>
                    </div>
                    <div className={s.one_of_pair_info}>
                      <span className={s.pair_title}>Дата покупки</span>
                      <span className={s.pair_subtitle}>06.05.2024</span>
                    </div>
                  </div>
                  <div className={s.next_info_wrap}>
                    <div className={s.one_span_info}>
                      <span className={s.pair_title}>Сумма покупки</span>
                      <span className={s.pair_subtitle}>{`$ ${100000.00}`}</span>
                    </div>
                    <div className={s.one_span_info}>
                      <span className={s.pair_title}>Оплата до</span>
                      <span className={s.pair_subtitle}>{'05.06.24'}</span>
                    </div>
                  </div>
                  <div className={s.btns_wrap}>
                    <button className={s.pay_btn}>Перейти к оплате</button>
                    <div className={s.documents_btn}>
                        <p className={s.documents_txt}>Документы </p>
                        <button className={s.doc_btn}>
                            <img src={accordion_arrow} alt="" className={s.btn_img} />
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div className={s.paginator}>
                <Paginator
                pagesQuantity={pagesQuantity}
                paginationObj={lotsInfo?.data?.pagination}
                changeActivePage={onChangeActivePage}
                prevPage={prevPage}
                nextPage={nextPage}
                />
            </div>
          </div>
        </div>
      </>
    );           
}
}
