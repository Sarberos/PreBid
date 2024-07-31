import s from './AddFilterModal.module.css' 
import {useId}from 'react'


export const AddFilterModal=()=>{
    const id= useId();
    return (
        <div className={s.wrapper}>
            <div className={s.title_wrap}><h3 className={s.titile}>{"Введите название фильтра"}</h3></div>
            <form className={s.form} >
                <label htmlFor={`${id}filter name`}>Введите название фильтра </label>
                <input id={`${id}filter name`} type='email' />
                
            </form>
            <button className={s.add_filter}>{"Добавиить фильтр"}</button>
            
        </div>
    )
}