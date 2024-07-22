import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'
import s from './CarList.module.css'
import FirstRow from './FirstRow/FirstRow'
import { useState } from 'react';
import { useFavouriteCars } from '../../hooks/car_list/useFavoriteCars';
import { useCarsList } from '../../hooks/car_list/car_list';
import { FindAmount } from './RightColumn/FindAmount/FindAmount';


function CarList({listType='catalog'}) {
  const [visStyle, changeVisStyle]=useState(false);
  const { data: carsList, isLoading: carsLoading, error:getCarsError, refetch} =
  listType === "catalog"
    ? useCarsList()
    : listType === "favouritesCars"
    ? useFavouriteCars()
    : "";

    if(getCarsError)
    {
      return (<section className={s.car_list}>
        <FirstRow listType={listType} visStyle={visStyle} changeVisStyle={changeVisStyle}  />
        <div className={s.two_columns_wrapper}>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }} className={s.not_foound_cars}>
            <FindAmount />
          <strong style={{
            display:'block',
            width: "100%",
            textAlign: 'center'
            }}> Автомобилей не было найдено  </strong>
          </div>
          
        </div>
      </section>)
    }
        return (
      <section className={s.car_list}>
        <FirstRow carsList={carsList} listType={listType} visStyle={visStyle} changeVisStyle={changeVisStyle}  />
        <div className={s.two_columns_wrapper}>
          <LeftColumn />
          <RightColumn carsList={carsList} carsLoading={carsLoading} refetch={refetch} getCarsError={getCarsError} listType={listType} visStyle={visStyle} />
        </div>
      </section>
    );
  }
  
  export default CarList;