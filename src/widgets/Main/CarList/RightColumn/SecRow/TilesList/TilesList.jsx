import s from './TilesList.module.css'
import TileCarProfile from './TileCarProfile/TileCarProfile'
import {useSelector} from 'react-redux'

function TilesList() {
  const transports=useSelector(state=>state.user.transports);

    return (
      <div className={s.right_columns_sec_row_tiles}>
        {transports.content.map(carProfile=>(
          <TileCarProfile
            name={carProfile.general?.name}
            img={carProfile.general?.photo?.img}
            id={carProfile.general.id}
            favourite={carProfile.general?.favourite}
            year={carProfile.general?.year}
            marka={carProfile.general?.transportModel?.transport_brand?.name}
            model={carProfile.general?.transportModel?.name}
            volume={carProfile.characteristic.volume}
            odometr={carProfile.characteristic.odometer}
            data={carProfile.bid.created_at}
            now_price={carProfile.bid.now_price}
            show_button_buy_now={carProfile.prebid_auction.show_button_buy_now}
          />
        ))}
      </div>
    );
  }
  
  export default TilesList;