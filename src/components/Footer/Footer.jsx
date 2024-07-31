import s from './Footer.module.css'
import Copyright_logo from './../../assets/img/Copyright.svg'
import VK from './../../assets/./img/VK.svg'
import faceBook from './../../assets/img/faceBook.svg'
import inst from './../../assets/./img/Inst.svg'
import fourthNetwork from './../../assets/img/fourthNetwork.svg'
import youtube from './../../assets/img/Youtube.svg'

function Footer() {
    return (
        <footer className={s.footer_wrapper}>
        <div className={s.wrapper}>
            <div className={s.footer_info_wrap}>
                <div className={s.footer_list_column}>
                    <a href="#" className={s.main_footer_column_link}>О компани</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                </div>
                <div className={s.footer_list_column}>
                    <a href="#" className={s.main_footer_column_link}>Центр помощи</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                </div>
                <div className={s.footer_list_column}>
                    <a href="#" className={s.main_footer_column_link}>Как продать авто</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                </div>
                <div className={s.footer_list_column}>
                    <a href="#" className={s.main_footer_column_link}>Как купить авто</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                </div>
                <div className={s.footer_list_column}>
                    <a href="#" className={s.main_footer_column_link}>Блок для seo</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                    <a href="" className={s.footer_column_link}>Ccылка на страницу</a>
                </div>
            </div>
            <div className={s.footer_social_networks}>
                <div className={s.footer_logo_wrap}>
                    <a href="#" className={s.footer_logo_link}>
                        <img src={Copyright_logo} alt="" className={s.footer_logo_img}/>
                    </a>
                </div>
                <div className={s.footer_networks_wrap}>
                    <a href="#" className={s.network_elem}>
                        <img src={faceBook} alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src={inst} alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src={VK} alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src={fourthNetwork} alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src={youtube}alt="" className={s.network_elem_img}/>
                    </a>
                </div>
            </div>
        </div>
    </footer >
    )
  }
  
  export default Footer;