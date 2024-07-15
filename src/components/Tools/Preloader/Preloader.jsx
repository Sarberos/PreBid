import preloader_gif from './../../../assets/img/preloader.gif'
import s from './Preloader.module.css' 

const Preloader=()=>{
    return(
        <div className={s.preloader}>
            <img src={preloader_gif} alt="" />
        </div>
    )
}

export default Preloader;