import s from './Paginator.module.css'
import {useState} from 'react'
import {useDispatch, useSelector } from "react-redux";
import next_page from './../../../../../../assets/img/arrow_right.svg'
import prev_page from './../../../../../../assets/img/arrow_left.svg'
import { carInfThunk, setCarsListPage, setTransportsInf } from '../../../../../../redux/mainSlice';



function Paginator() {
    const dispatch=useDispatch();
    const transports=useSelector((state=>state.user.transports))
    let pagesQuantity=Math.ceil(transports.pagination.total_results/transports.carsLimit)
    let pagesCount=[];
    for(let i=1; i<=pagesQuantity;i++){
        pagesCount.push(i)
    }
    const handlingPromise=(actionCreator)=>{
        return new Promise( (resolve,reject)=>{
          resolve(dispatch(actionCreator))
        })
    }
    const onChangeActivePage=(e)=>{
        const page=parseInt(e.target.innerText);
        dispatch(setCarsListPage(page));
        const carListPromise=handlingPromise(carInfThunk())
        carListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
    }
    
    return (
    <div className={s.paginator}>
        <button 
        disabled={!transports.pagination.prev_page} 
        onClick={()=>{
            dispatch(setCarsListPage(transports.pagination.prev_page));
            const carListPromise=handlingPromise(carInfThunk())
            carListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
        }} 
        className={s.pagination_btn}>
        <img src={prev_page} alt="" className={s.change_page_img} />
        </button>
        {pagesCount.map(pageNumber=>(
            <button key={pageNumber} onClick={onChangeActivePage} className={transports.pagination.page===pageNumber? `${s.pagination_btn} ${s.active}`:s.pagination_btn}>{pageNumber}</button>
        ))}
        <button     
        disabled={!transports.pagination.next_page} 
        onClick={()=>{
            dispatch(setCarsListPage(transports.pagination.next_page));
            const carListPromise=handlingPromise(carInfThunk())
            carListPromise.then(response=>{dispatch(setTransportsInf(response.payload.data))})
        }} 
        className={s.pagination_btn}>
            <img src={next_page} alt="" className={s.change_page_img} />
        </button>
    </div>
                        
    )
  }
  
  export default Paginator;