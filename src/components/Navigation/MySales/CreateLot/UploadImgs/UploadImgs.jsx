import { useEffect, useState } from "react";
import s from "./UploadImgs.module.css";
import ellipsis from "../../../../../assets/img/ellipsis.svg";
import { useSearchAEKImg } from "../../../../hooks/my_sels/useSearchAEKImg";
import { useToaster, ButtonToolbar, SelectPicker, Button } from 'rsuite';
import {  useToast } from "../../../../../utilits/Toaster/Toaster";
import { useToastWithLoader } from "../../../../../utilits/Toaster/LoaderToaster";
import {toast} from "react-hot-toast"

export const UploadImgs = ({ lotConfig }) => {
  const [imgToolsStat, setImgToolsStat] = useState({});
  const [, setSelectAllBtn]=useState(false)
  const [imgUrlArr, setImgArr] = useState([]);
  const [aekImgs, setAEKImgs]=useState([])
  const [aekDownload, setAekDownload]=useState(false)
  const { mutate: searchImg, isPending: searchImgPending, data: searchImgData, } = useSearchAEKImg();
  const [toastSettings,setToastStatus]= useState({isToastOpen: false, toastStatus:false,toastTxt:"", tostGravity:'top', })
  useToast(toastSettings.isToastOpen, toastSettings.toastStatus,toastSettings.toastTxt,  toastSettings.tostGravity);
  useToastWithLoader(toastSettings.isToastOpen, toastSettings.toastStatus,toastSettings.toastTxt,  toastSettings.tostGravity )
useEffect(()=>{
    if(searchImgData){
      const imgs=searchImgData?.data?.content
      for(let img of imgs){
        setAEKImgs(prevState=>([...prevState,{img,checked:false}]))
        setImgToolsStat(prevState=>({...prevState,[img.id]:false}))
      }
      console.log(...aekImgs)
    }
  },[searchImgData])
useEffect(() => {
    if (imgUrlArr && imgUrlArr.length > 0) {
      const midleImgStatus = {};
      imgUrlArr.forEach((item, index) => {
        midleImgStatus[index] = false;
      });
      setImgToolsStat(prevState=>({...prevState,...midleImgStatus}));
    }
  }, [imgUrlArr]);
useEffect(()=>{
  if (searchImgData && !searchImgPending) {
    setAekDownload(true)
  }
},[searchImgData, searchImgPending])

const imgReader = (e) => {
    const files = e.target.files;
    let urls = [];
    for (let i = 0; i <= files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = (e) => {
        urls.push(e.target.result);

        if (urls.length === files.length) {
          setImgArr((prevImgArr) => {
            let middleUrls;
            if (prevImgArr) {
              middleUrls = [...new Set([...prevImgArr, ...urls])];
            } else {
              middleUrls = urls;
            }
            return middleUrls.slice(0, 20);
          });
        }
      };
    }
  };
  const remooveImg = (itemUrl) => {
    setImgArr((prevImgArr) => prevImgArr.filter((elem) => elem !== itemUrl));
  };
  const getAEKImg = () => {
    if (lotConfig.vin) {
      if(lotConfig.vin.length===17){
      return searchImg(lotConfig.vin);
      }
      toast.success('Successfully toasted!')
      // setToastStatus({isToastOpen:true,toastStatus: false,toastTxt:"Введите корректное значение VIN номера",tostGravity:'bottom',})
      // setTimeout(()=>{ setToastStatus((prevState)=>({...prevState,isToastOpen:false}))},750)
    }else{
      // setToastStatus({isToastOpen:true,toastStatus: false,toastTxt:"Заполните поле VIN номера",tostGravity:'bottom',})
      // setTimeout(()=>{ setToastStatus((prevState)=>({...prevState,isToastOpen:false}))},750)
    }
  };

  return (
    <div className={s.upload_img_grid}>
      <div className={s.price_title_wrap}>
        <p
          style={{ color: "#000", "font-size": "26px" }}
          className={s.price_title}
        >
          Загрузить фото
        </p>
        <button onClick={getAEKImg} className={s.get_img_by_AEK}>
          {"Получить фото из AEK по VIN"}
        </button>
      </div>
      <p className={s.price_subtitle}>
        {"Требуется добавить минимум 10 фото для отображения на сайте"}
      </p>
      <div className={s.upload_img_wrap}>
        <div className={s.uploading_img_list}>
          <li className={s.uploading_img_txt_item}>
            <label htmlFor="upload img" className={s.upload_file_wrap}>
              <input
                id={"upload img"}
                style={{ display: "none" }}
                type="file"
                multiple={true}
                className={s.upload_file_input}
                onChange={(e) => imgReader(e)}
              />
              <span className={s.upload_file_ico}>+Загрузить фото</span>
            </label>
          </li>

          {imgUrlArr?.map((item, index) => (
            <div key={index} className={s.uploading_img_item}>
              <img src={item}></img>
              <div className={s.tools_img_burger_wrapper}>
                <div
                  className={s.tools_img_burger}
                  tabIndex="0"
                  onBlur={() => {
                    setImgToolsStat({
                      ...imgToolsStat,
                      [index]: false,
                    });
                  }}
                >
                  <button
                    onClick={() => {
                      setImgToolsStat({
                        ...imgToolsStat,
                        [index]: !imgToolsStat[index],
                      });
                    }}
                    className={`${s.img_tools_btn} `}
                  >
                    <img src={ellipsis}></img>
                  </button>
                  <ul
                    className={
                      imgToolsStat[index]
                        ? `${s.img_burger_menu} ${s.active}`
                        : `${s.img_burger_menu} `
                    }
                  >
                    <li className={s.burger_menu_item}>
                      <p>Сделать главным</p>
                    </li>
                    <li
                      onMouseDown={() => {
                        remooveImg(item);
                      }}
                      className={s.burger_menu_item}
                    >
                      <p>Удалить</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={aekDownload ? {display: 'flex'}:{display:'none'}} className={s.upload_aek_img_wrap}>
        <div className={s.aek_title}>
          <h3>Выберите фото загруженые из АЕК</h3>
        </div>
        <div className={s.select_all_btn}>
          <button
            onClick={()=>{
              setAEKImgs(prevState => {  
                const updatedImgs = [...prevState];   
                for(let items of updatedImgs){
                  items.checked =true;
                }
                return updatedImgs;   
                
            })
            }}
            >Выделить все фото</button>
        </div>
      
        <ul className={s.aek_imgs_list}>
          {aekImgs.map((elem,elemIndex) => (
            <li className={s.aek_img_wrap}>
             <img src={elem.img.full.path} alt="" className={s.aek_img} />
             <div className={`${s.tools_img_burger_wrapper}`}>
                <input type="checkBox" checked={elem.checked } className={s.select_input} 
                  onChange={(e)=>{
                    setAEKImgs(prevState => {                      
                      const updatedImgs = [...prevState];   
                      updatedImgs[elemIndex].checked = e.target.checked;   
                      return updatedImgs;   
                  })}
                  }
                />
                <div
                  className={s.tools_img_burger}
                  tabIndex="0"
                  onBlur={()=>{
                    setImgToolsStat(prevState=>({...prevState,[elem.img.id]:false}))
                  }}
                >
                  <button
                    className={`${s.img_tools_btn} `}
                    onClick={()=>{
                    setImgToolsStat(prevState=>({...prevState,[elem.img.id]:!prevState[elem.img.id]}))
                    }}
                  >
                    <img src={ellipsis}></img>
                  </button>
                  <ul
                    className={imgToolsStat[elem.img.id]
                        ? `${s.img_burger_menu} ${s.active}`
                        : `${s.img_burger_menu} `
                    }
                  >
                    <li
                      onMouseDown={
                        ()=>{
                          setAEKImgs(prevState=>(prevState.filter((item)=>item.img.id!== elem.img.id)))
                        }
                      }
                      className={s.burger_menu_item}
                    >
                      <p>Удалить фото </p>
                    </li>
                  </ul>
                </div>
              </div>
           </li>
          ))}
            
            
        </ul>
      </div>
    </div>
  );
};


