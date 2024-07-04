import { useEffect, useState } from "react";
import s from './UploadImgs.module.css'
import ellipsis from '../../../../../assets/img/ellipsis.svg'



export const UploadImgs=()=>{
  const [imgToolsStat,setImgToolsStat]=useState({})
  const [imgUrlArr,setImgArr]=useState([]);

    const imgReader = (e) => {
      const files = e.target.files;
      let urls=[];

      for(let i=0; i<=files.length; i++){
        const reader = new FileReader();
        reader.readAsDataURL(files[i])
        reader.onload=(e)=>{
          urls.push(e.target.result);
  
          if (urls.length === files.length) {

            setImgArr((prevImgArr)=>{
              let middleUrls;
            if(prevImgArr){
               middleUrls= [...new Set([...prevImgArr,...urls])]
            }else{
              middleUrls=urls;
            }
            return middleUrls.slice(0,20);
          });
          }
         
        }
      }
      
    }
    useEffect(()=>{
      if(imgUrlArr &&imgUrlArr.length>0){
      const midleImgStatus={}
      imgUrlArr.forEach((item,index)=>{
        midleImgStatus[index]=false;
      })
      setImgToolsStat(midleImgStatus)}
    },[imgUrlArr])
    const remooveImg=(itemUrl)=>{
      setImgArr((prevImgArr) => prevImgArr.filter(elem => elem !==itemUrl ));
    }
    return (
      <div className={s.upload_img_grid}>
        <div className={s.price_title_wrap}>
          <p
            style={{ color: "#000", "font-size": "26px" }}
            className={s.price_title}
          >
            Загрузить фото
          </p>
        </div>
        <p className={s.price_subtitle}>
          Загрузите до 20 фотографий в хорошем качестве
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
              <div
                key={index}
                className={s.uploading_img_item}>
                <img src={item}></img>
                <div className={s.tools_img_burger_wrapper}>
                    <div 
                        className={s.tools_img_burger}
                          tabIndex="0"
                  onBlur={() => {
                    setImgToolsStat({
                    ...imgToolsStat,
                    [index]: false,
                  });}} >
                      <button                    
                        onClick={() => {setImgToolsStat({
                            ...imgToolsStat,
                            [index]: !imgToolsStat[index],
                          }); }}
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
                            remooveImg(item);}}
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
      </div>
    );
}