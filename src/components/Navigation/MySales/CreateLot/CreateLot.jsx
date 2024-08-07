import { useListOptions } from "../../../hooks/my-sales/useListOptions";
import {
  SelectPicker,
  Input,
  InputNumber,
  InputGroup,
  CheckPicker,
} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import clipImg from "./../../../../assets/img/blue_paper_clip.svg";
import searchImg from "./../../../../assets/img/search.svg";
import s from "./CreateLot.module.css";
import { useCreateLot } from "../../../hooks/my-sales/useCreateLot";
import { useSearchByVin } from "../../../hooks/my_sels/useSearchByVin";
import { useEffect, useState } from "react";
import { current } from "@reduxjs/toolkit";
import { UploadImgs } from "./UploadImgs/UploadImgs";
import Preloader from './../../../Tools/Preloader/Preloader'
import { CustomInputGroupWidthButton } from "./CustomInputGroup/CustomInputGroup";
import { DeliveryGroup } from "./DeliveryGroup/DeliveryGroup";



const toSelectList = (data, dataKey, nameKey, idKey = "id") => {
  let helpArr = [];
  data?.forEach((elem) => {
    elem[dataKey].forEach((item) => {
      helpArr.push({
        id: item[idKey],
        name: item[nameKey],
      });
    });
  });
  return helpArr.map((item) => ({
    label: item.name,
    value: item.id,
  }));
};
const toModelSelectList = (localData, data, dataKey, nameKey, idKey = "id") => {
  let helpArr = [];
  data?.forEach((elem) => {
    elem[dataKey].forEach((item) => {
      helpArr.push({
        id: item[idKey],
        name: item[nameKey],
        transport_brand_id: item["transport_brand_id"],
      });
    });
  });
  return helpArr
    .filter((item) => item.transport_brand_id === localData.transport_brand_id)
    .map((item) => ({
      label: item.name,
      value: item.id,
    }));
};

export const CreateLot = () => {
  const [imgUrlArr, setImgArr] = useState([]);
  const [keysFile, setKeysFile] = useState();
  const [reportFile, setReportFile] = useState();
  const [lotConfig, setLotConfig] = useState({
    prebid_transport_status_id: 2, // 1(сохранить) 2(отправить на модерацию) 
    arrival_end:'1',
    auction_id: 1, //
    body_type: "",
    color_id: 0,
    damages: "",
    date_delivery:"2024-07-31",  /// нужно задать динамическое изменение 
    doc_fee_id: 0,
    engine: '',
    keys: 0,
    location_id: 385, //
    lot: "", //
    min_price: 1, //
    name: "шевроле", //
    now_price: "",
    odometer: "",
    place_destination_id: 0, //
    port_id: 0, //
    start_price: "",
    status_delivery:0,
    step_price: 0, //
    transport_brand_id: 0,
    transport_drive_id: 0,
    transport_fuel_id: 0,
    transport_hl_id: 1, //
    transport_model_id: 0,
    transport_tr_id: 0, //
    vin: '',
    year: "",
  });
const keysAmount = [
    {
      label: "1 ключ",
      value: 1,
    },
    {
      label: "2 ключ",
      value: 2,
    },
    {
      label: "нет",
      value: 0,
    },
  ];
  const { mutate: createPostReq, isPending,data:createPostData,isSuccess } = useCreateLot(imgUrlArr);
  const { data: listData, isLoading: isListInfo } = useListOptions();
  const { mutate :vinRequest, isPending: vinPending, data:vinRequestData } = useSearchByVin();



  
  useEffect(()=>{
    if (vinRequestData) {
      const vinData = {
        body_type:vinRequestData.data.content.body_type,
        transport_brand_id: vinRequestData.data.content.brand.id,
        transport_drive_id: vinRequestData.data.content.drive.id,
        transport_fuel_id: vinRequestData.data.content.fuel.id,
        transport_model_id: vinRequestData.data.content.model.id,
        engine: vinRequestData.data.content.volume,
        year: vinRequestData.data.content.year,
        vin: vinRequestData.data.content.vin,
      };

    setLotConfig(prevState=>({...prevState, ...vinData}));
    }
  },[vinRequestData])
  const handleVinRequest = (value)=>{
    value && vinRequest(value)
  }
if (vinPending  && !vinRequestData) {
  return <Preloader />
}
  return (
    <div className={s.right_column}>
      <div className={s.main_characteristic}>
        <div className={s.right_title_wrap}>
          <p className={s.right_title}>Основные харктеристики </p>
        </div>
        <div className={s.main_characteristic_grid}>
          <ul className={s.main_characteristic_column}>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Vin номер</label>
              <div className={s.rs_select_picker}>
                <CustomInputGroupWidthButton
                  setLotConfig={setLotConfig}
                  lotConfig={lotConfig}
                  searchByVin={(v)=>handleVinRequest(v)}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Марка автомобиля</label>
              <div className={s.rs_select_picker}>
                <SelectPicker
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, transport_brand_id: value });
                  }}
                  className={s.main_char_item_select}
                  data={toSelectList(listData, "transportBrand", "name")}
                  searchable={true}
                  style={{ width: '100%', heigth: 43 }}
                  placeholder="Select"
                  value={lotConfig.transport_brand_id}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Модель</label>
              <div className={s.rs_select_picker}>
                <SelectPicker
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, transport_model_id: value });
                  }}
                  className={s.main_char_item_select}
                  data={toModelSelectList(
                    lotConfig,
                    listData,
                    "transportModel",
                    "name"
                  )}
                  searchable={true}
                  style={{ width: 332, heigth: 43 }}
                  placeholder="Select"
                  value={lotConfig.transport_model_id}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label htmlFor="123" className={s.main_char_item_label}>
                Год выпуска
              </label>
              <div className={s.rs_select_picker}>
                <InputNumber
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, year: value });
                  }}
                  style={{
                    "max-height": "37px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={s.main_char_item_select}
                  defaultValue={2000}
                  max={100000}
                  min={0}
                  value={lotConfig.year}
                />
              </div>
            </li>
          </ul>
          <ul className={s.main_characteristic_column}>
            <li className={s.main_characteristic_item}>
              <label htmlFor="123" className={s.main_char_item_label}>
                Объем ДВС
              </label>
              <div className={s.rs_select_picker}>
                <InputNumber
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, engine: value });
                  }}
                  style={{
                    "max-height": "37px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={s.main_char_item_select}
                  max={100000}
                  min={0}
                  value={lotConfig.engine}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Трансмиссия</label>
              <div className={s.rs_select_picker}>
                <SelectPicker
                  className={s.main_char_item_select}
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, transport_tr_id: value });
                  }}
                  data={toSelectList(listData, "transportTransmission", "name")}
                  searchable={false}
                  style={{ width: 332, heigth: 43 }}
                  placeholder="Select"
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Тип топлива</label>
              <div className={s.rs_select_picker}>
                <SelectPicker
                  className={s.main_char_item_select}
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, transport_fuel_id: value });
                  }}
                  data={toSelectList(listData, "transportFuel", "name")}
                  searchable={false}
                  style={{ width: 332, heigth: 43 }}
                  placeholder="Select"
                  value={lotConfig.transport_fuel_id}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Привод</label>
              <div className={s.rs_select_picker}>
                <SelectPicker
                  className={s.main_char_item_select}
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, transport_drive_id: value });
                  }}
                  data={toSelectList(listData, "transportDrive", "name")}
                  searchable={false}
                  style={{ width: 332, heigth: 43 }}
                  placeholder="Select"
                  value={lotConfig.transport_drive_id}
                />
              </div>
            </li>
          </ul>
          <ul className={s.main_characteristic_column}>
            <li className={s.main_characteristic_item}>
              <label htmlFor="123" className={s.main_char_item_label}>
                Тип кузова
              </label>
              <div className={s.rs_select_picker}>
                <Input
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, body_type: value });
                  }}
                  className={s.main_char_item_select}
                  id={"123"}
                  value={lotConfig.body_type}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Цвет кузова</label>
              <div className={s.rs_select_picker}>
                <SelectPicker
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, color_id: value });
                  }}
                  className={s.main_char_item_select}
                  data={toSelectList(listData, "transportColor", "name")}
                  searchable={false}
                  style={{ width: 332, heigth: 43 }}
                  placeholder="Select"
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label htmlFor="123" className={s.main_char_item_label}>
                Пробег
              </label>
              <div className={s.rs_select_picker}>
                <InputNumber
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, odometer: value });
                  }}
                  style={{
                    "max-height": "37px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={s.main_char_item_select}
                  max={100000}
                  min={0}
                />
              </div>
            </li>
            <li className={s.main_characteristic_item}>
              <label className={s.main_char_item_label}>Тип повреждения</label>
              <div className={s.rs_select_picker}>
                <CheckPicker
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, damages: value });
                  }}
                  className={s.main_char_item_select}
                  data={toSelectList(listData, "transportDamage", "name")}
                  searchable={false}
                  style={{ width: 332, heigth: 43 }}
                  placeholder="Select"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={s.price_grid}>
          <div className={s.reservу_price_column}>
            <p className={s.price_title}>Установить резерв продажи</p>
            <div className={s.price_inputNumber}>
              <label htmlFor="">Сумма</label>
              <div
                style={{ display: "flex", "flex-direction": "row" }}
                className={s.rs_select_picker}
              >
                <InputNumber
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, start_price: value });
                  }}
                 size="md"
                  className={s.price_grid_inputNumber}
                  max={100000}
                  min={0}
                />
                <span
                  style={{
                    position: "absolute",
                    padding: "0 0 0 15px",
                  }}
                  className={s.span_usd_ico}
                >
                  $
                </span>
              </div>
            </div>
          </div>
          <div className={s.reservу_price_column}>
            <p className={s.price_title}>Установить цену "Купить сейчас"</p>
            <div className={s.price_inputNumber}>
              <label htmlFor="">Сумма</label>
              <div
                style={{ display: "flex", "flex-direction": "row" }}
                className={s.rs_select_picker}
              >
                <InputNumber
                  onChange={(value) => {
                    setLotConfig({ ...lotConfig, now_price: value });
                  }}
                  className={s.price_grid_inputNumber}
                  max={100000}
                  min={0}
                />
                <span
                  style={{
                    position: "absolute",
                    padding: "0 0 0 15px",
                  }}
                  className={s.span_usd_ico}
                >
                  $
                </span>
              </div>
            </div>
          </div>
        </div>
        <DeliveryGroup  setLotConfig={setLotConfig}/>
        <div className={s.additional_grid}>
          <div className={s.price_title_wrap}>
            <p
              style={{ color: "#000", "font-size": "26px" }}
              className={s.price_title}
            >
              Дополнительная информация
            </p>
          </div>
          <div className={s.additional_grid_inputs}>
            <ul className={s.additionals_inputs_list}>
              <li className={''}>
                <label className={s.main_char_item_label} htmlFor="">
                  Тип документа
                </label>
                <div className={s.rs_select_picker}>
                  <SelectPicker
                    onChange={(value) => {
                      setLotConfig({ ...lotConfig, doc_fee_id: value });
                    }}
                    className={s.main_char_item_select}
                    data={toSelectList(listData, "docFees", "title")}
                    searchable={false}
                    size='lg'
                    style={{ maxWidth: '300px',width: '100%'}}
                    placeholder="Select"
                  />
                </div>
              </li>
              <li className={''}>
                <label className={s.main_char_item_label} htmlFor="">
                  Состояние
                </label>
                <div className={s.rs_select_picker}>
                  <SelectPicker
                    onChange={(value) => {
                      setLotConfig({
                        ...lotConfig,
                        transport_drive_id: value,
                      });
                    }}
                    className={s.main_char_item_select}
                    data={toSelectList(listData, "transportHighlight", "name")}
                    searchable={false}
                    size='lg'
                    style={{ maxWidth: '300px',width: '100%'}}
                    placeholder="Select"
                  />
                </div>
              </li>
              <li className={s.additionals_inputs_item}>
                <label className={s.main_char_item_label} htmlFor="">
                  Ключи
                </label>
                <div className={s.select_with_file}>
                  <div className={s.rs_select_picker}>
                    <SelectPicker
                      onChange={(value) => {
                        setLotConfig({ ...lotConfig, keys: value });
                      }}
                      className={s.main_char_item_select}
                      data={keysAmount}
                      searchable={false}
                      size='lg'
                      style={{ maxWidth: '300px',width: '100%'}}
                      placeholder="Select"
                    />
                  </div>
                  <div className={s.clip_file}>
                    {!keysFile ? (
                      <label htmlFor="clip file">
                        <img src={clipImg} className={s.clip_img} />
                        <input
                          id={"clip file"}
                          type="file"
                          style={{ display: "none" }}
                          className={s.clip_file_input}
                          onChange={(e) => {
                            setKeysFile(e.target.files[0]);
                            console.log(e.target.files[0]);
                          }}
                        />
                        <span className={s.clip_file_txt}>
                          Прикрепить<br/>файл
                        </span>
                      </label>
                    ) : (
                      <label htmlFor="clip file">
                        <p
                          className={s.cliped_file_name}
                        >{`C:/Fakepath/${keysFile?.name}`}</p>
                      </label>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <UploadImgs
          imgUrlArr={imgUrlArr}
          setImgArr={setImgArr}
          lotConfig={lotConfig}
        />
        <div className={s.button_pair}>
          <button className={s.to_admin_btn}>{"Сохранить"}</button>
          <button
            onClick={ () => {
               createPostReq(lotConfig)
        
             
            }}
            disabled={isPending}
            className={s.to_admin_btn}
          >
            {"Отправить на модерацию"}
          </button>
        </div>
      </div>
    </div>
  );
};
