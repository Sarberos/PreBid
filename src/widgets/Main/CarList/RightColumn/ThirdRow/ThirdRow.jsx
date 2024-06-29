import { useDispatch, useSelector } from 'react-redux';
import Paginator from './Paginator/Paginator';
import s from './ThirdRow.module.css'
import { carInfThunk, setCarsListPage, setTransportsInf } from '../../../../../redux/mainSlice';

function ThirdRow() {
  const dispatch=useDispatch();
  const transports=useSelector((state=>state.user.transports))
    let pagesQuantity=Math.ceil(transports.pagination.total_results/transports.carsLimit)
    const handlingPromise=(actionCreator)=>{
        return new Promise( (resolve,reject)=>{
          resolve(dispatch(actionCreator))
        })
    }
    const onChangeActivePage=(e)=>{
        const page=parseInt(e.target.innerText);
        dispatch(setCarsListPage(page));
        handlingPromise(carInfThunk()).then(response=>{dispatch(setTransportsInf(response.payload.data))})
    }
    function prevPage(){
      dispatch(setCarsListPage(transports.pagination.prev_page));
      handlingPromise(carInfThunk()).then(response=>{dispatch(setTransportsInf(response.payload.data))})
  }
    function nextPage(){
      dispatch(setCarsListPage(transports.pagination.next_page));
      handlingPromise(carInfThunk()).then(response=>{dispatch(setTransportsInf(response.payload.data))})
  }
    return (
      <div className={s.right_columns_third_row}>
        <Paginator
          pagesQuantity={pagesQuantity} 
          paginationObj={transports.pagination}
          changeActivePage={(e)=>onChangeActivePage(e)}
          prevPage={()=>prevPage()}
          nextPage={()=>nextPage()}
        />
      </div>
    );
  }
  
  export default ThirdRow;