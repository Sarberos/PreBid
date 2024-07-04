import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'
import s from './CarList.module.css'


function CarList() {
    return (
      <section className={s.car_list}>
        <div className={s.two_columns_wrapper}>
          <LeftColumn />
          <RightColumn />
        </div>
      </section>
    );
  }
  
  export default CarList;