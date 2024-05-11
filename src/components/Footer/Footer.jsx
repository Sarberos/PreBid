import s from './Footer.module.css'

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
                        <img src="./img/Copyright.svg" alt="" className={s.footer_logo_img}/>
                    </a>
                </div>
                <div className={s.footer_networks_wrap}>
                    <a href="#" className={s.network_elem}>
                        <img src="./img/faceBook.svg" alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src="./img/Inst.svg" alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src="./img/VK.svg" alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src="./img/fourthNetwork.svg" alt="" className={s.network_elem_img}/>
                    </a>
                    <a href="#" className={s.network_elem}>
                        <img src="./img/Youtube.svg" alt="" className={s.network_elem_img}/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
  }
  
  export default Footer;