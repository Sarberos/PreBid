import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'
import s from './CarList.module.css'
import FirstRow from './FirstRow/FirstRow'
import { useState } from 'react';


function CarList() {
  const [visStyle, changeVisStyle]=useState(false);
    return (
      <section className={s.car_list}>
        <FirstRow visStyle={visStyle} changeVisStyle={changeVisStyle} />
        <div className={s.two_columns_wrapper}>
          <LeftColumn />
          <RightColumn visStyle={visStyle} />
        </div>
      </section>
    );
  }
  
  export default CarList;