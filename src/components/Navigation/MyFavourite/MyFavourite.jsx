import Header from '../../Header/Header'
import LeftColumn from '../../Main/CarList/LeftColumn/LeftColumn'
import VisualeVariation from '../../Main/CarList/RightColumn/FirstRow/VisualeVariation/VisualeVariation'
import s from './MyFavourite.module.css'


export const MyFavourite=()=>{
    return (
        <>
            <Header />
            <section className={s.main_info}>
                <div className={s.car_list_first_row}>
                    <VisualeVariation />
                </div>
                <div className={s.two_columns_wrapper}>
                    <LeftColumn />
                    <div className={s.right_column}>
                        <div className={s.rigth_column_title}>
                            <p className={s.column_title_txt}><span className={s.column_title_pice}>{'Найдено'}</span>{` 2 результата`}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}