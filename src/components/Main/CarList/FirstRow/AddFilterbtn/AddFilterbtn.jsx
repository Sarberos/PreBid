import s from './AddFilterbtn.module.css'

export const AddFilterbtn =()=>{

    return (
    <div className={s.add_filter_wrap}>
        <button className={s.add_filter_btn}>
            {'Добавить свой фильтр'}
        </button>
    </div>
    )
}