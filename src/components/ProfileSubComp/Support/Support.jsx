import s from './Support.module.css'
import blue_paper_clip from'./../../../assets/img/blue_paper_clip.svg'

export const Support=()=>{
    return (
      <section className={s.main_wrapper}>
        <div className={s.main_info_wrap}>
            <h2 className={s.main_title}>Справка и поддрежка</h2>
            <p className={s.subtitle}>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях. При создании генератора мы
            использовали небезизвестный универсальный
            </p>
        </div>
        <label htmlFor="support" className={s.message_area_wrap}>
            <p className={s.message_area_title}>Текст вашего сообщения</p>
            <textarea id={'support'} name="support" rows='13' type={'text'}  className={s.message_area_textarea} style={{height: '220px'}}></textarea>
        </label>
        <label htmlFor="pin_file" className={s.pin_message}>
            <img src={blue_paper_clip} alt="" className={s.pin_message_ico} />
            <input id='pin_file' style={{display:'none'}} type="file" />
            <p className={s.pin_message_txt}>Прикрепить файл</p>
        </label>
        <button className={s.continue}>Продолжить</button>
      </section>
    );
}