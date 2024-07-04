import s from './MySales.module.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { useListCount } from '../../hooks/my-sales/useListCount'
import { Link } from 'react-router-dom'
import { CreateLot } from './CreateLot/CreateLot'

export const MySales=({children})=>{
    const {data:countData, isLoading}=useListCount()

    return (
      <div className={s.main_wrapper}>
        <Header />
        <div className={s.main_wrap}>
          <div className={s.main_inner_wrap}>
            <h2 className={s.main_title}>Мои продажи</h2>
            <div className={s.main_info_wrap}>
              <div className={s.left_column}>
                <ul className={s.sels_list}>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/my-sales' className={s.left_link_style}>Выставить лот </Link></p>
                      <div className={s.item_img_wrap}>
                        <img src="" alt="" className={s.item_img} />
                      </div>
                    </div>
                  </li>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/my-lots' className={s.left_link_style}>Мои лоты </Link></p>
                      <div className={s.item_img_wrap}>{countData?.my}</div>
                    </div>
                  </li>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/coordination-lots' className={s.left_link_style}>Лоты на согласовании </Link></p>
                      <div className={s.item_img_wrap}>{countData?.moderation}</div>
                    </div>
                  </li>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/waiting-lots' className={s.left_link_style}>Ожидается оплата </Link></p>
                      <div className={s.item_img_wrap}>{countData?.by_paymentWithUser}</div>
                    </div>
                  </li>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/sold-lots' className={s.left_link_style}>Проданные лоты </Link></p>
                      <div className={s.item_img_wrap}>{countData?.by_paymentWithUserSum}</div>
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
              {children}
            </div>
          </div>
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
      </div>
    );
}