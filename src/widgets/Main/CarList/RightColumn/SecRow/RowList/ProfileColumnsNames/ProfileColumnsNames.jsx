import s from './ProfileColumnsNames.module.css'
import galochkaVerh from './../../../../../../../assets/img/galocha_verh.svg'
import galochkaVniz from './../../../../../../../assets/img/galochka_vniz.svg'

function ProfileColumnsNames() {
    return (
        <div className={s.title_car_table_wrap}>
            <div className={s.name_of_column}>Фото</div>
            <div className={s.name_of_column}>№ Лота</div>
            <div className={s.name_of_column}>Год
                <span className={s.sort_up_down}>
                    <img src={galochkaVerh} alt="" className={s.sort_up_down}/>
                    <img src={galochkaVniz} alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Марка</div>
            <div className={s.name_of_column}>Модель</div>
            <div className={s.name_of_column}>Объем
                <span className={s.sort_up_down}>
                    <img src={galochkaVerh} alt="" className={s.sort_up_down}/>
                    <img src={galochkaVniz} alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Одометр
                <span className={s.sort_up_down}>
                    <img src={galochkaVerh} alt="" className={s.sort_up_down}/>
                    <img src={galochkaVniz} alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Дата
                <span className={s.sort_up_down}>
                    <img src={galochkaVerh} alt="" className={s.sort_up_down}/>
                    <img src={galochkaVniz} alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Ставка</div>
            <div className={s.name_of_column}>Действие</div>
        </div>
    )
  }
  
  export default ProfileColumnsNames;