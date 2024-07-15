import { useMyLots } from '../../../hooks/my-sales/useMyLots'
import {useEffect, useState} from 'react';
import s from './MyLots.module.css'
import Paginator from './../../../Main/CarList/RightColumn/ThirdRow/Paginator/Paginator'
import Preloader from '../../../Tools/Preloader/Preloader'



export const MyLots=()=>{
    const [lotStatus,setLotStatus]=useState(0)
    const[currentPage,setCurrentPage]=useState(1)
    const[lotsLimit,setLotsLimit]=useState(10)
    const {data:myLotsData,isLoading,isSuccess,isError}=useMyLots(lotsLimit,currentPage,lotStatus)

    const total_results=myLotsData?.pagination?.total_results;
    let pagesQuantity=Math.ceil(total_results/lotsLimit)
    const onChangeActivePage=(e)=>{
        const eventPage=parseInt(e.target.innerText);
        setCurrentPage(eventPage);
    }
    function prevPage(){
        setCurrentPage(myLotsData?.pagination.prev_page)
    }
    function nextPage(){
        setCurrentPage(myLotsData?.pagination.next_page)
  }

  if (isLoading) {
    return <Preloader />
  }else{
    if (isError) {
      return(
        <div className={s.main_wrapper}>
          <div className={s.inner_wrapper}>
              <div className={s.lots_filters_wrap}>
                <ul className={s.lots_filters_list}>
                  <li onClick={()=>setLotStatus(0)} className={lotStatus===0?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Все</li>
                  <li onClick={()=>setLotStatus(1)} className={lotStatus===1?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Новый </li>
                  <li onClick={()=>setLotStatus(2)} className={lotStatus===2?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>На модераци</li>
                  <li onClick={()=>setLotStatus(3)} className={lotStatus===3?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Пожтвержден</li>
                  <li onClick={()=>setLotStatus(4)} className={lotStatus===4?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Отклонен</li>
                  <li onClick={()=>setLotStatus(5)} className={lotStatus===5?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Ожидается оплата</li>
                  <li onClick={()=>setLotStatus(6)} className={lotStatus===6?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Проданные лоты </li>
                </ul>
              </div>
              <div className={s.lots_list}>
              <h3 style={{width:'100%',color:'#0f0f14','font-size': '40px'}}>Автомобилей не было найдено</h3>
          </div>
        </div>
      </div>)
    }else{
    return (
      <div className={s.main_wrapper}>
        <div className={s.inner_wrapper}>
          <div className={s.lots_filters_wrap}>
            <ul className={s.lots_filters_list}>
              <li onClick={()=>setLotStatus(0)} className={lotStatus===0?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Все</li>
              <li onClick={()=>setLotStatus(1)} className={lotStatus===1?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Новый </li>
              <li onClick={()=>setLotStatus(2)} className={lotStatus===2?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>На модераци</li>
              <li onClick={()=>setLotStatus(3)} className={lotStatus===3?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Пожтвержден</li>
              <li onClick={()=>setLotStatus(4)} className={lotStatus===4?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Отклонен</li>
              <li onClick={()=>setLotStatus(5)} className={lotStatus===5?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Ожидается оплата</li>
              <li onClick={()=>setLotStatus(6)} className={lotStatus===6?`${s.lots_filters_item} ${s.active}`:s.lots_filters_item}>Проданные лоты </li>
            </ul>
          </div>
          <div className={s.lots_list}>
            {myLotsData.content.map(element=>(
              <article className={s.lot_card_wrap}>
              <button className={s.to_car_profile}>
                <img src={element.general.photo}  className={s.car_profile_img} />
              </button>
              <div className={s.cars_lot_info}>
                <p className={s.lot_name}>{element.general.name}</p>
                <div className={s.car_params_wrap}>
                  <p className={s.lot_status}>{element.general.status.name}</p>
                  <div className={s.car_params}>
                    <div className={s.car_params_column}>
                      <div className={s.car_param}>
                        <span className={s.param_text}>Год выпуска</span>
                        <span className={s.param_value}>2022</span>
                      </div>
                      <div className={s.car_param}>
                        <span className={s.param_text}>Объем двигателя</span>
                        <span className={s.param_value}>{element.characteristic.engine}</span>
                      </div>
                    </div>
                    <div className={s.car_params_column}>
                      <div className={s.car_param}>
                        <span className={s.param_text}>Тип топлива</span>
                        <span className={s.param_value}>{element.characteristic.fuel.name}</span>
                      </div>
                      <div className={s.car_param}>
                        <span className={s.param_text}>Одометр</span>
                        <span className={s.param_value}>{`${0} km`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            ))}
            
          </div>
          <div className={s.pagination}>
            <Paginator
              pagesQuantity={pagesQuantity}
              paginationObj={myLotsData?.pagination}
              changeActivePage={(e) => onChangeActivePage(e)}
              prevPage={() => prevPage()}
              nextPage={() => nextPage()}
            />
          </div>
        </div>
      </div>
    );}
  }
}