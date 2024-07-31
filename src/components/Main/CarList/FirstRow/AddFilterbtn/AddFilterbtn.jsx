import { useDispatch, useSelector } from 'react-redux'
import s from './AddFilterbtn.module.css'
import { setAddFilterIsOpen, setLoginIsOpen } from '../../../../../redux/mainSlice'
import { AddFilterModal } from '../../../../modal_windows/addFilterModal/AddFilterModal'

export const AddFilterbtn =()=>{
    const dispatch= useDispatch()
    const userState= useSelector( state=> state.user)

    const addFilterClick=()=>{
        if(userState.userRole==="unAuth"){
            dispatch(setLoginIsOpen(true))
            return 
        }
        dispatch(setAddFilterIsOpen(true))
    }
    return (
    <div onClick={()=>{addFilterClick()}} className={s.add_filter_wrap}>
        <button className={s.add_filter_btn}>
            {'Добавить свой фильтр'}
        </button>
    </div>
    )
}