import s from './Paginator.module.css'
import next_page from './../../../../../../assets/img/arrow_right.svg'
import prev_page from './../../../../../../assets/img/arrow_left.svg'


function Paginator({pagesQuantity,paginationObj,changeActivePage,prevPage,nextPage}) {
    let pagesCount=[];
    for(let i=1; i<=pagesQuantity;i++){
        pagesCount.push(i)
    }
    if (pagesQuantity===1 || !paginationObj ) {
        return(<div></div>)
    }else{
  return(
      <div className={s.paginator}>
      <button 
      disabled={!paginationObj?.prev_page} 
      onClick={()=>prevPage()} 
      className={s.pagination_btn}>
      <img src={prev_page} alt="" className={s.change_page_img} />
      </button>
      {pagesCount.map(pageNumber=>(
          <button key={pageNumber} onClick={(e)=>changeActivePage(e)} className={paginationObj.page===pageNumber? `${s.pagination_btn} ${s.active}`:s.pagination_btn}>{pageNumber}</button>
      ))}
      <button     
      disabled={!paginationObj?.next_page} 
      onClick={()=>nextPage()} 
      className={s.pagination_btn}>
          <img src={next_page} alt="" className={s.change_page_img} />
      </button>
  </div>
  )
    }
}
  
  export default Paginator;