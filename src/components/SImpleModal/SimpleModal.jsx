import { useDispatch } from 'react-redux'
import './SimpleModal.css'
import { Transition } from 'react-transition-group'
import { setLoginModalStatus } from '../../redux/mainSlice'

export const SimpleModal=({isOpen, onClose,children})=>{
    const dispatch = useDispatch()
    const onWrapperClick=(e)=>{
        if(e.target.classList.contains('modal_wrapper')) onClose();
        dispatch(setLoginModalStatus(false));
    }
    return(
        <>
        <Transition in={isOpen} timeout={300} unmountOnExit={true}>
        {(state)=>(
        <div className={`modal  modal__${state}`}>
            <div className={'modal_wrapper'} onClick={onWrapperClick}>
                <div className={'modal_content'}>
                    <button onClick={()=>{onClose();dispatch(setLoginModalStatus(false));}} className={'cross_btn'}>
                    </button>
                    {children}
                </div>
            </div>
        </div>)}
        </Transition>
        </>
    )
}