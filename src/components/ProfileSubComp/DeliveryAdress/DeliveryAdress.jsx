import { useState } from 'react'
import s from './DeliveryAdress.module.css'


export const DeliveryAdress=()=>{
    const[selectedAdr,setSelectedAdr]=useState({['СВХ Минск']:false,['СВХ Гомель']:false});
    const adressArr=[{
        name:'СВХ Минск',
        adress:'г. Минск, ул. Воронянского 20а',
        select:false,
    },
    {
        name:'СВХ Гомель',
        adress:'г. Гомель, ул. Воронянского 20а',
        select:false,
    },
]
    const changeAdress=(name)=>{
        setSelectedAdr({[name]:true,})
    }
    return(
        <section className={s.main_wrapper}>
            <h2 className={s.title}>Адрес доставки</h2>
            <p className={s.subtitle}>Укажите приориетный адрес доставки купленных Вами лотов</p>
            <div className={s.adress_list}>
                {adressArr.map(adress=>(<div className={s.adress_list_item}>
                    <div className={s.radio_btn_wrap}>
                        <div onClick={()=>{changeAdress(adress.name)}} className={s.radio_btn_inner_wrap}>
                                <span  id="name" className={s.entity_radio_btn} />
                                <span className={selectedAdr[adress.name] ? `${s.radioBtn_background} ${s.active}`: s.radioBtn_background }></span>
                        </div>
                    </div>
                    <div className={s.name_choose_pair}>
                        <p className={s.list_item_name_txt}>{adress.name}</p>
                        <p className={s.list_item_adress_txt}>{adress.adress}</p>
                    </div>
                    
                    
                    </div>))}
            </div>
        </section>
    )
    
}