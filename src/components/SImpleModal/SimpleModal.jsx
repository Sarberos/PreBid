import './SimpleModal.css'
import { Transition } from 'react-transition-group'

export const SimpleModal=({isOpen, onClose,children})=>{
    const onWrapperClick=(e)=>{
        if(e.target.classList.contains('modal_wrapper')) onClose();
    }
    return(
        <>
        <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state)=>(
        <div className={`modal  modal__${state}`}>
            <div className={'modal_wrapper'} onClick={onWrapperClick}>
                <div className={'modal_content'}>
                    <button onClick={()=>onClose()} className={'cross_btn'}>
                    </button>
                    {children}
                </div>
            </div>
        </div>)}
        </Transition>
        </>
    )
}