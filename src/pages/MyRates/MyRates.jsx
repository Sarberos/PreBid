import s from './MyRates.module.css'
import {useEffect} from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'
import { useOrders } from '../../hooks/my-orders/useOrders'

export const MyRates=({children})=>{
    const {mutate,data,isPending}=useOrders('active');

useEffect(()=>{
  mutate({lotsLimit:10,listPage:1,search:{status:'active'}})
}, [])

if (isPending) {
  return (
    <div>Загрузка</div>
  )
} else {
    return (
      <div className={s.main_wrapper}>
        <Header />
        <div className={s.main_wrap}>
          <div className={s.main_inner_wrap}>
            <h2 className={s.main_title}>Мои ставки</h2>
            <div className={s.main_info_wrap}>
              <div className={s.left_column}>
                <ul className={s.sels_list}>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='' className={s.left_link_style}>Активные ставки </Link></p>
                      <div className={s.item_img_wrap}>
                        {!isPending ? data?.data?.content?.length:0}
                      </div>
                    </div>
                  </li>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/my-orders/peekUp' className={s.left_link_style}>Ставки на согласовании</Link></p>
                      <div className={s.item_img_wrap}>{0}</div>
                    </div>
                  </li>
                  <li className={s.sales_item}>
                    <div className={s.item_value_pair}>
                    <p className={s.item_title}><Link to='/my-orders/purchases' className={s.left_link_style}>Завершенные ставки</Link></p>
                      <div className={s.item_img_wrap}>{0}</div>
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
}