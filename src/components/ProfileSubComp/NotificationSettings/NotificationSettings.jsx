import { useState } from 'react'
import s from './NotificationSettings.module.css'

export const NotificationSettings=()=>{
    const[selectedNotif, setSelectedNotif]=useState({
        ['1']:false,
        ['2']:false,
        ['3']:false,
    })
    let notifItemsArr=[{
        id:1,
        name:'Вы сделали самую высокую ставку',
        sendTo:'e-mail',
        status: false,
    },
    {
        id:2,
        name:'Ваша ставка больше не самая высокая',
        sendTo:'e-mail',
        status: false,
    },
    {
        id:3,
        name:'Вы выйграли/проиграли аукцион',
        sendTo:'e-mail',
        status: false,
    },
]

    return(
        <section className={s.main_wrapper}>
            <div className={s.title_wrap}>
                <h2 className={s.main_title}>Настройка уведомлений</h2>
                <p className={s.subtitile}>Мы ценим вашу конфиденциальность. Укадите ниже какую информацию вы хотите получать и с помощью какого канала связи </p>
            </div>
            <ul className={s.notifications_list}>
                {notifItemsArr.map(notification=>(
                    <li className={s.notifications_list_item}>
                    <p className={s.item_title}>{notification.name}</p>
                    <span className={s.сhange_status}>
                        <label onClick={()=>setSelectedNotif({...selectedNotif,[notification.id]:!selectedNotif[notification.id]})} 
                            className={selectedNotif[notification.id] ?`${s.toggle_input_wrap} ${s.active}`:s.toggle_input_wrap}>
                            <div  className={selectedNotif[notification.id] ?`${s.toggle_circe} ${s.active}`:s.toggle_circe} />
                            <span className={selectedNotif[notification.id]?`${s.toggle_background} ${s.active}`:s.toggle_background}></span>
                        </label>
                        <p className={s.item_send_to}>{`На ${notification.sendTo}`}</p>
                    </span>
                    
                </li>
                ))}
            </ul>
        </section>
    )
}