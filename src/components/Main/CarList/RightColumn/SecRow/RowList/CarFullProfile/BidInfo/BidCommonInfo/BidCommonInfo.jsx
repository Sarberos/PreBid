import transport_logo from './../../../../../../../../../assets/img/logo.svg'
import s from './BidCommonInfo.module.css'

export const BidCommonInfo =({carCharacteristic})=>{

    const carProfileBidInfo=[
        {
            title: 'Статус',
            value: carCharacteristic.delivery.status_delivery
        },
        {
            title: 'Порт назначени',
            value: carCharacteristic.delivery.port.name
        },
        {
            title: 'Место назначения',
            value: carCharacteristic.delivery.place.title
        },
        {
            title: 'Дата доставки',
            value: carCharacteristic.delivery.date_delivery
        },
        {
            title: 'Дата торгов',
            value: carCharacteristic.prebid_auction.date_start
        }
    ]


    return (
    <div className={s.common_inf}>
            <div className={s.common_inf_list}>
                {carProfileBidInfo.map(elem=>(
                <div className={s.inf_property_row}>
                    <span className={s.inf_property_title}>{elem.title}</span>
                    <span className={s.inf_property_value}>{elem.value} </span>
                </div> 
                ))}
            </div>
    </div>
    )
}