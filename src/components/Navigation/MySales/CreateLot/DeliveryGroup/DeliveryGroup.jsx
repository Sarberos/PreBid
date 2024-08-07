import { SelectPicker } from 'rsuite'
import { DateRangePicker } from 'rsuite';
import s from './DeliveryGroup.module.scss'
import subDays from 'date-fns/subDays';
import { useId } from 'react';
import { DELIVERYPLACE, DELIVERYSTATUS, PORTDESTINATION } from '../../../../../consts/my-sels/delivery_const';


export const DeliveryGroup=({setLotConfig})=>{
    const id = useId();

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>Доставка</h3>
            <ul className={s.fields_wrap}>
                <li className={`${s.field} ${s.rs_select_picker}`}>
                    <label htmlFor={id+'delivery_status'} className={s.field_label}>Статус доставки</label>
                    <SelectPicker onChange={(value)=>{setLotConfig(prevState=>({...prevState,status_delivery: parseInt(value)}))}} data={DELIVERYSTATUS} style={{maxWidth: "400px",width: '100%',}} size='lg' id={id+'delivery_status'} searchable={false} />
                </li>
                <li className={`${s.field} ${s.rs_select_picker}`}>
                    <label htmlFor={id+'delivery_place'} className={s.field_label}>Место назначения</label>
                    <SelectPicker onChange={(value)=>{setLotConfig(prevState=>({...prevState, place_destination_id:value}))}}  data={DELIVERYPLACE} style={{maxWidth: "400px",width: '100%',}} size='lg' id={id+'delivery_place'} searchable={false} />
                </li>
                <li className={`${s.field} ${s.rs_select_picker}`}>
                    <label htmlFor={id+'destination_port'} className={s.field_label}>Порт назначения</label>
                    <SelectPicker onChange={(value)=>{ setLotConfig(prevState=>({...prevState,port_id:value}))}} data={PORTDESTINATION} style={{maxWidth: "400px",width: '100%',}} size='lg' id={id+'destination_port'} searchable={false} />
                </li>
                <li className={`${s.field} ${s.rs_select_picker}`}>
                    <label htmlFor={id+'destination_date'} className={s.field_label}>Ориентировочная дата доставки</label>
                    <DateRangePicker
                    onChange={(value)=>{ setLotConfig(prevState=>({...prevState,}))}}
                    style={{maxWidth: "400px",width: '100%',}}
                    size='lg'
                    id={id+'destination_date'}
                    oneTap showOneCalendar  ranges={[]} showHeader={false} />
                </li>
                
            </ul>
        </div>
    )
}