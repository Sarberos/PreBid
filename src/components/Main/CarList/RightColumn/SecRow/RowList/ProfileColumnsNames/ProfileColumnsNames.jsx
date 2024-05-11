import s from './ProfileColumnsNames.module.css'

function ProfileColumnsNames() {
    return (
        <div className={s.title_car_table_wrap}>
            <div className={s.name_of_column}>Фото</div>
            <div className={s.name_of_column}>№ Лота</div>
            <div className={s.name_of_column}>Год
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Марка</div>
            <div className={s.name_of_column}>Модель</div>
            <div className={s.name_of_column}>Объем
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Одометр
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Дата
                <span className={s.sort_up_down}>
                    <img src="./img/galocha_verh.svg" alt="" className={s.sort_up_down}/>
                    <img src="./img/galochka_vniz.svg" alt="" className={s.sort_up_down}/>
                </span>
            </div>
            <div className={s.name_of_column}>Ставка</div>
            <div className={s.name_of_column}>Действие</div>
        </div>
    )
  }
  
  export default ProfileColumnsNames;