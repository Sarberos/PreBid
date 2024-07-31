import { useDispatch } from 'react-redux'
import './SimpleModal.css'
import { Transition } from 'react-transition-group'
import { setAddFilterIsOpen, setLoginIsOpen } from '../../redux/mainSlice'

export const SimpleModal=({isOpen, onClose,children})=>{
    const dispatch = useDispatch()
    const onWrapperClick=(e)=>{
        if(e.target.classList.contains('modal_wrapper')) {onClose();
        dispatch(setLoginIsOpen(false))}
        dispatch(setAddFilterIsOpen(false))
    }
    const preventCloseOnInputClick = (e) => {
        e.stopPropagation();
      };
    return(
        <>
        <Transition in={isOpen} timeout={300} unmountOnExit={true}>
        {(state)=>(
        <div className={`modal  modal__${state}`}>
            <div className={'modal_wrapper'} onClick={onWrapperClick}>
                <div className={'modal_content'}>
                    <button onClick={()=>{onClose();dispatch(setLoginIsOpen(false));dispatch(setAddFilterIsOpen(false));}} className={'cross_btn'}>
                    </button>
                    <div onClick={preventCloseOnInputClick}>{children}</div>
                </div>
            </div>
        </div>)}
        </Transition>
        </>
    )
}