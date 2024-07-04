import { useListOptions } from '../../../hooks/my-sales/useListOptions'
import { SelectPicker,Input, InputNumber, InputGroup, CheckPicker } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import clipImg from './../../../../assets/img/blue_paper_clip.svg'
import searchImg from './../../../../assets/img/search.svg'
import s from './CreateLot.module.css'
import { useCreateLot } from '../../../hooks/my-sales/useCreateLot';
import { useState } from 'react';
import { current } from '@reduxjs/toolkit';
import { UploadImgs } from './UploadImgs/UploadImgs';

const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
    <InputGroup {...props} inside >
      <Input placeholder={placeholder} />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  );
  const toSelectList=(data, dataKey,nameKey,idKey='id')=>{
    let helpArr =[]
    data?.forEach((elem) => {
      elem[dataKey].forEach((item) => {
        helpArr.push({
          id: item[idKey],
          name:item[nameKey],
        });  
      });
    });  
   return  helpArr.map((item) => ({
      label: item.name,
      value: item.id, 
    }));
  }
  const toModelSelectList=(localData,data, dataKey,nameKey,idKey='id')=>{
    let helpArr =[]
    data?.forEach((elem) => {
      elem[dataKey].forEach((item) => {
        helpArr.push({
          id: item[idKey],
          name:item[nameKey],
          transport_brand_id:item['transport_brand_id'],
        });  
      });
    });  
    return helpArr.filter(item=> item.transport_brand_id===localData.transport_brand_id).map((item) => ({
      label: item.name,
      value: item.id, 
    }));
  }


  export const CreateLot=()=>{
    const [keysFile, setKeysFile]=useState();
    const [reportFile, setReportFile]=useState()
    const [lotConfig, setLotConfig] = useState({
      arrival_end:1, //
      auction_id:1, //
      body_type:'',
      color_id:0,
      damages:'',
      doc_fee_id:0,
      engine: 0,
      keys:0,
      location_id:385, //
      lot:'', //
      min_price: 1000,//
      name:'тест 19.06',//
      now_price:'',
      odometer:'',
      place_destination_id:0, //
      port_id: 0,//
      prebid_transport_status_id:0,//
      start_price:'',
      step_price:0, //
      transport_brand_id: 0,
      transport_drive_id:0,
      transport_fuel_id:0,
      transport_hl_id:0,//
      transport_model_id:0,
      transport_tr_id:0, //
      vin: 1,
      year:'',
    });
  
    const {mutate:createPostReq,isPending}=useCreateLot()
    const {data:listData, isLoading: isListInfo}=useListOptions();
    const keysAmount = [{
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
      },];
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
                    onChange={(e) => {
                      setLotConfig({ ...lotConfig, vin: e.target.value });
                    }}
                    value={lotConfig.vin}
                    size="lg"
                  />
                </div>
              </li>
              <li className={s.main_characteristic_item}>
                <label className={s.main_char_item_label}>
                  Марка автомобиля
                </label>
                <div className={s.rs_select_picker}>
                  <SelectPicker
                    onChange={(value) => {
                      setLotConfig({ ...lotConfig, transport_brand_id: value });
                    }}
                    className={s.main_char_item_select}
                    data={toSelectList(listData, "transportBrand", "name")}
                    searchable={true}
                    style={{ width: 332, heigth: 43 }}
                    placeholder="Select"
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
                  />
                </div>
              </li>
            </ul>
            <ul className={s.main_characteristic_column}>
              <li className={s.main_characteristic_item}>
                <label htmlFor="123" className={s.main_char_item_label}>
                  ОбЪем ДВС
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
                    data={toSelectList(
                      listData,
                      "transportTransmission",
                      "name"
                    )}
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
                <label className={s.main_char_item_label}>
                  Тип повреждения
                </label>
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
                    style={{
                      "max-height": "37px",
                      display: "flex",
                      alignItems: "center",
                      "padding-left": "15px",
                      "font-size": "16px",
                    }}
                    className={s.main_char_item_select}
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
                <li className={s.additionals_inputs_item}>
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
                      style={{ width: 300, heigth: 43 }}
                      placeholder="Select"
                    />
                  </div>
                </li>
                <li className={s.additionals_inputs_item}>
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
                      data={toSelectList(
                        listData,
                        "transportHighlight",
                        "name"
                      )}
                      searchable={false}
                      style={{ width: 300, heigth: 43 }}
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
                        style={{ width: 170, heigth: 43 }}
                        placeholder="Select"
                      />
                    </div>
                    <div className={s.clip_file}>
                    {!keysFile 
                        ? <label htmlFor="clip file">
                          <img src={clipImg} className={s.clip_img} />
                          <input
                            id={"clip file"}
                            type="file"
                            style={{ display: "none" }}
                            className={s.clip_file_input}
                            onChange={(e)=>{setKeysFile(
                              e.target.files[0])
                              console.log(e.target.files[0])}}
                          />
                          <span className={s.clip_file_txt}>{'Прикрепить файл'}</span>
                        </label>
                        : <label htmlFor="clip file"><p className={s.cliped_file_name}>{`C:/Fakepath/${keysFile?.name}` }</p></label>
                        }
                      
                    </div>
                  </div>
                </li>
              </ul>
              <ul className={s.additionals_inputs_list}>
                <li className={s.additionals_inputs_item}>
                  <label className={s.main_char_item_label} htmlFor="">
                    Отчет
                  </label>
                  <div className={s.select_with_file}>
                    <div className={s.rs_select_picker}>
                      <SelectPicker
                        className={s.main_char_item_select}
                        data={keysAmount}
                        searchable={false}
                        style={{ width: 170, heigth: 43 }}
                        placeholder="Select"
                      />
                    </div>
                    <div className={s.clip_file}>
                     {!reportFile ? <label htmlFor="clip-report-file">
                        <img src={clipImg} className={s.clip_img} />
                        <span className={s.clip_file_txt}>{reportFile ? reportFile.name :'Прикрепить файл'}</span>
                        <input
                          id={"clip-report-file"}
                          type="file"
                          style={{ transform: "rotateY(90deg)" }}
                          className={s.clip_file_input}
                          onChange={(e)=>{setReportFile(e.target.files[0])}}
                        />
                      </label>
                      :<label htmlFor="clip file"><p className={s.cliped_file_name}>{`C:/Fakepath/${reportFile?.name}` }</p></label>
                      }
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <UploadImgs  />
          <div className={s.button_pair}>
                <button className={s.to_admin_btn}>{"Сохранить"}</button>
                <button
                  onClick={() => {
                    createPost(lotConfig);
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
}