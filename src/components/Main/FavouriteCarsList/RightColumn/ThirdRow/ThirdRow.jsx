import { useDispatch, useSelector } from 'react-redux';
import Paginator from './Paginator/Paginator';
import s from './ThirdRow.module.css'
import { carInfThunk, setCarsListPage, setFavCarsListPage, setTransportsInf } from '../../../../../redux/mainSlice';

function ThirdRow({pagination, listType}) {
  const dispatch=useDispatch();
  const state=useSelector((state=>state.user))
    const pagesQuantity =
      listType === "catalog"
        ? Math.ceil(pagination?.total_results / state.transports.carsLimit)
        : listType === "favouritesCars"
        ? Math.ceil(pagination?.total_results / state.favourCars.carsLimit)
        : "";

    const onChangeActivePage=(e)=>{
        const page=parseInt(e.target.innerText);
        listType==='catalog'?dispatch(setCarsListPage(page)): listType==='favouritesCars'?dispatch(setFavCarsListPage(page)):"";
    }
    function prevPage(){
       listType==='catalog'?dispatch(setCarsListPage(pagination.prev_page)):  listType==='favouritesCars'?dispatch(setFavCarsListPage(pagination.prev_page)):'';
  }
    function nextPage(){
       listType==='catalog'?dispatch(setCarsListPage(pagination.next_page)):listType==='favouritesCars'?dispatch(setFavCarsListPage(pagination.next_page)):'';
  }
  
    return (
      <div className={s.right_columns_third_row}>
        <Paginator
          pagesQuantity={pagesQuantity} 
          paginationObj={pagination}
          changeActivePage={(e)=>onChangeActivePage(e)}
          prevPage={()=>prevPage()}
          nextPage={()=>nextPage()}
        />
      </div>
    );
  }
  
  export default ThirdRow;