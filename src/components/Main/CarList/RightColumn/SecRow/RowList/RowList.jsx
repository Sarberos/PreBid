import ProfileColumnsNames from './ProfileColumnsNames/ProfileColumnsNames';
import CarProfile from './CarProfile/CarProfile';
import s from './RowList.module.css'

function RowList() {
    return (
    <div className={s.right_columns_sec_row_list}>
        <ProfileColumnsNames />
        <CarProfile />
        <CarProfile />
        <CarProfile />
    </div>
    )
  }
  export default RowList;

