import s from './MySels.module.css'
import searchImg from './../../../assets/img/search.svg'
import Header from './../../Header/Header'
import Footer from '../../Footer/Footer'
import { SelectPicker,Input, InputNumber, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { useListOptions } from '../../hooks/my-sels/useListOptions';


const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
    <InputGroup {...props} inside >
      <Input placeholder={placeholder} />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  );
export const MySels=()=>{
    const {data:listData, isLoading}=useListOptions()

      let transportBrand =[];
      listData?.forEach(elem => {
            elem.transportBrand.forEach(item=>{
              transportBrand.push(item.name);    
            })
        })
    let transportBrandObj=transportBrand.map(
      item => ({ label: item, value: item })
    );

    return (
      <div className={s.main_wrapper}>
        <Header />
        <div className={s.main_wrap}>
          <div className={s.main_inner_wrap}>
            <h2 className={s.main_title}>Мои продажи</h2>
            <div className={s.main_info_wrap}>
              <div className={s.left_column}>
                <ul className={s.sels_list}>
                  <li className={s.sels_item}>
                    <div className={s.item_value_pair}>
                      <p className={s.item_title}>Выставить лот </p>
                      <div className={s.item_img_wrap}>
                        <img src="" alt="" className={s.item_img} />
                      </div>
                    </div>
                  </li>
                  <li className={s.sels_item}>
                    <div className={s.item_value_pair}>
                      <p className={s.item_title}>Мои лоты </p>
                      <div className={s.item_img_wrap}>0</div>
                    </div>
                  </li>
                </ul>
                <div className={s.avalible_cash}>
                  <span className={s.avalible_cash_txt}>
                    {" "}
                    Доступные средства
                  </span>
                  <span className={s.avalible_cash_value}> $ 22 000</span>
                </div>
              </div>
              <div className={s.right_column}>
                <div className={s.main_characteristic}>
                  <div className={s.right_title_wrap}>
                    <p className={s.right_title}>Основные харктеристики </p>
                  </div>
                  <div className={s.main_characteristic_grid}>
                    <ul className={s.main_characteristic_column}>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Vin номер
                        </label>
                        <div className={s.rs_select_picker}>
                        <CustomInputGroupWidthButton size="lg" />
                            </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Марка автомобиля
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Модель
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label htmlFor='123'
                          className={s.main_char_item_label}
                        >
                          Год выпуска
                        </label>
                        <div className={s.rs_select_picker}>
                            <InputNumber  style={{'max-height':'37px',display:'flex',alignItems:'center',}} className={s.main_char_item_select} defaultValue={2000} max={100000} min={0} />
                        </div>
                      </li>
                    </ul>
                    <ul className={s.main_characteristic_column}>
                    <li className={s.main_characteristic_item}>
                        <label htmlFor='123'
                          className={s.main_char_item_label}
                        >
                          ОбЪем ДВС
                        </label>
                        <div className={s.rs_select_picker}>
                            <InputNumber  style={{'max-height':'37px',display:'flex',alignItems:'center',}} className={s.main_char_item_select} defaultValue={0} max={100000} min={0} />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Трансмиссия
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Тип топлива
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Привод
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                    </ul>
                    <ul className={s.main_characteristic_column}>
                    <li className={s.main_characteristic_item}>
                        <label htmlFor='123'
                          className={s.main_char_item_label}
                        >
                          Тип кузова
                        </label>
                        <div className={s.rs_select_picker}>
                            <Input className={s.main_char_item_select} id={'123'}/>
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Цвет кузова
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label htmlFor='123'
                          className={s.main_char_item_label}
                        >
                          Пробег
                        </label>
                        <div className={s.rs_select_picker}>
                            <InputNumber  style={{'max-height':'37px',display:'flex',alignItems:'center',}} className={s.main_char_item_select} defaultValue={0} max={100000} min={0} />
                        </div>
                      </li>
                      <li className={s.main_characteristic_item}>
                        <label
                          className={s.main_char_item_label}
                        >
                          Тип повреждения
                        </label>
                        <div className={s.rs_select_picker}>
                            <SelectPicker
                            className={s.main_char_item_select}
                            data={transportBrandObj}
                            searchable={false}
                            style={{ width: 332,heigth:43, }}
                            placeholder="Select"
                            />
                        </div>
                      </li>
                    </ul>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    );
}