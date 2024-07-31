import { Link, useParams } from 'react-router-dom';
import s from './CarFullProfile.module.css'
import {useId,useState,useEffect} from 'react'
import less_arrow from './../../../../../../../assets/img/smallless_arrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../../../../../Tools/Preloader/Preloader';
import { useCarFullProfile } from '../../../../../../hooks/car_list/useCarFullProfile';
import { useCarUnAuthProfile } from '../../../../../../hooks/car_list/useCarUnAuthProfile';
import { MainCharacteristics } from './MainCharacteristics/MainCharacteristics';
import { CarImgs } from './CarImgs/CarImgs';
import { BidInfo } from './BidInfo/BidInfo';
import { addToFavStatus } from '../../../../../../../redux/mainSlice';
import { useQueryClient } from '@tanstack/react-query';

function CarFullProfile() {
  const state= useSelector(state=> state.user)

  const id=useId()
  const requestProps =useParams()
  const {data: carInfo, isLoading: caInfoLoading,refetch:refetchCarInfo}=state.userRole!=='unAuth' ? useCarFullProfile(requestProps.profileId):useCarUnAuthProfile(requestProps.profileId)
  const carCharacteristic=carInfo?.content;
  const [isFavourite, setIsFavourite]=useState(null)
  const [carId, setcarId]=useState(null)

  useEffect(()=>{
    setIsFavourite(carCharacteristic?.general?.favourite)
  },[carCharacteristic?.general?.favourite])

  useEffect(()=>{
    setcarId(carCharacteristic?.general?.favourite)
  },[carCharacteristic?.general?.favourite])

  const dispatch = useDispatch();

  const queryClient = useQueryClient()
  const onSetBookMarkStatus=(id=true,favourite)=>{
    if(state.userRole!=="unAuth")
    dispatch(addToFavStatus({id,add:!favourite})).then(
    (resp)=>{
        queryClient.invalidateQueries({queryKey:['carList'], refetchType: 'all'})
        queryClient.invalidateQueries({queryKey:['favouriteCarsList'], refetchType: 'all'},)
        setIsFavourite(!isFavourite)
        refetchCarInfo()
      
    } )
}





  if (caInfoLoading) {
    return <Preloader />;
  } 
    return (
      <>
        <div className={s.wrapper}>
          <div className={s.car_profile_wrap}>
            <div className={s.go_home}>
              <img src={less_arrow} alt="" className={s.less_arrow} />
              <Link to="/" className={s.home_page_link}>
                Назад к результатам{" "}
              </Link>
            </div>
            <div className={s.profile_head}>
              <h2 className={s.title}>{carCharacteristic?.general?.name}</h2>
              <div className={s.head_tools}>
                <div className={s.head_tool}>
                  <button
                    onClick={()=>onSetBookMarkStatus(carId, isFavourite)}
                    id={`${id}-bookmark`}
                    className={
                      isFavourite ? s.added__to_bookmark_btn : s.deleted_bookmark
                    }
                  ></button>
                  <label
                    htmlFor={`${id}-bookmark`}
                    className={s.add_bookmark_txt}
                  >
                    {!isFavourite ? "Добавить в избранное" : "В избранном"}
                  </label>
                </div>
                <div className={s.head_tool}>
                  <button id={`${id}-share`} className={s.share_btn}></button>
                  <label htmlFor={`${id}-share`} className={s.share_txt}>
                    Поделиться
                  </label>
                </div>
              </div>
            </div>
            <div className={s.car_info_wrap}>
              <CarImgs carCharacteristic={carCharacteristic}/>
              <MainCharacteristics carCharacteristic={carCharacteristic}/>
              <BidInfo carCharacteristic={carCharacteristic}/>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CarFullProfile;