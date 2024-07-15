import ProfileColumnsNames from './ProfileColumnsNames/ProfileColumnsNames';
import CarProfile from './CarProfile/CarProfile';
import s from './RowList.module.css'
import {useSelector} from 'react-redux'

function RowList({carsList}) {
    return (
      <div className={s.right_columns_sec_row_list}>
        <ProfileColumnsNames />
        {carsList?.content?.map((carProfile) => {
            return(
          <CarProfile
            img={carProfile.general?.photo?.img}
            id={carProfile.general.id}
            year={carProfile.general?.year}
            marka={carProfile.general?.transportModel?.transport_brand?.name}
            model={carProfile.general?.transportModel?.name}
            volume={carProfile.characteristic.volume}
            odometr={carProfile.characteristic.odometer}
            data={carProfile.bid.created_at}
            now_price={carProfile.bid.now_price}
            show_button_buy_now={carProfile.prebid_auction.show_button_buy_now}
          />
        )})}
      </div>
    );
  }
  export default RowList;

