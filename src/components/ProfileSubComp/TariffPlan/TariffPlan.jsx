import s from './TariffPlan.module.css'
import {useState} from 'react'

export const TariffPlan=()=>{
    const[selectedTarif,setSelectedTarif]=useState({['Тарифный план 1']:true,['Тарифный план 2']:false,})

    const newTarifsArr = [
      {
        id:1,
        name: `Тарифный план 1`,
        description: "Описание первого тарифного плана ",
      },
      {
        id:2,
        name: `Тарифный план 2`,
        description: "Описание первого тарифного плана ",
      },
    ];



    return(
        <section className={s.main_wrapper}>
            <div className={s.my_tarif_wrap}>
                <h2 className={s.title}>Мой тарифный план</h2>
                <p className={s.subtitle}>Название моего тарифного плана</p>
                <p className={s.tarif_plan_description}>Здесь будет описание выбранного такрифного плана </p>
            </div>
            <div className={s.change_tarif}>
                <p className={s.item_title}>Сменить тарифный план</p>
                <ul className={s.tarifs_list}>
                    {newTarifsArr.map(tarif=>(
                        <li className={s.tarif_list_item}>
                        <div className={s.radio_btn_wrap}>
                            <div onClick={()=>setSelectedTarif({[tarif.name]:true})} className={s.radio_btn_inner_wrap}>
                                    <span  id="name" className={s.entity_radio_btn} />
                                    <span className={selectedTarif[tarif.name]? `${s.radioBtn_background} ${s.active}`: s.radioBtn_background }></span>
                            </div>
                        </div>
                        <div className={s.item_new_tarif_info}>
                            <p className={s.item_tarif_name}>{tarif.name}</p>
                            <p className={s.item_tarif_description}>{tarif.description}</p>
                        </div>
                    </li>
                    ))}
                    
                </ul>
            </div>
            <button type='submit' className={s.contine_btn}>Продолжить</button>
        </section>
    )
}