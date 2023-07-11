import React, { useState } from 'react'
import s from './Header.module.css'
import logo_firm from './media/logo_firm.png'
import location from './media/location.png'
import Button from '../UI/Button/Button'
import PromotionsSection from '../PromotionsSection/PromotionsSection'
import ModalCalc from '../ModalCalc/ModalCalc'


function Header(props) {

    const [modalCalcActive, setModalCalcActive] = useState(false)

    const {scrollToCatalogSection, scrollToPromotionsSection, scrollToServicesPlusSection, scrollToFiveStepsSection, scrollToConsultationSection, scrollToReviewsSection, scrollToFooter} = props

    const menu = ['Цены', 'Акция', 'Материалы', 'Как заказать', 'Наши дизайнеры', 'Отзывы', 'Контакты']

  return (
    <div className={s.container_header_all}>
    <div className={s.container_header_top}>
    <div className='container'>
        <div className={s.wrapper}>
            <div className={s.header_top}>
                <div className={s.header_top_item}>
                    <img className={s.img_logo} src={logo_firm} alt='logo firm' />
                    <p className={s.slogan}>КУХНИ НА ЗАКАЗ В ХАРЬКОВЕ</p>
                </div>
                <div className={s.header_top_item_worktime}>
                    <p className={s.work_time}>Отвечаем на звонки </p>
                    <p className={s.work_time}>с 9:00 до 21:00</p>
                    <p className={s.work_time}>без выходных</p>
                </div>
                <div className={s.header_top_item_location}>
                    <img className={s.img_location} src={location} alt='location'/>
                    <div>
                        <p>г. Харьков,</p>
                        <p>ул. Академика</p>
                        <p>Павлова, 134/16</p>
                    </div>
                </div>
                <div className={s.header_top_item_button}> 
                    <Button 
                        style_btn={'calculate_cost'}
                        title={'Рассчитать стоимость'}
                        onCLickFunc={() => setModalCalcActive(true)}
                        />       
                </div>
                <div className={s.header_top_item_contacts}>
                    <p className={s.phon}>+38 (970) 294-85-46 </p>
                    <p className={s.phon}>+38 (057) 377-37-37 </p>
                    <a className={s.phon_back} href='#'>Вам перезвонить?</a>
                </div>
            </div>
                
            <div className={s.header_bottom}>
                <nav>
                    <ul>
                        <li onClick={scrollToCatalogSection}>{menu[0]}</li>
                        <li onClick={scrollToPromotionsSection}> {menu[1]}</li>
                        <li onClick={scrollToServicesPlusSection}>{menu[2]}</li>
                        <li onClick={scrollToFiveStepsSection}>{menu[3]}</li>
                        <li onClick={scrollToConsultationSection} >{menu[4]}</li>
                        <li onClick={scrollToReviewsSection}>{menu[5]}</li>
                        <li onClick={scrollToFooter}>{menu[6]}</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    </div>

    <div className={s.container_promotion_section}>
         <PromotionsSection />
    </div>

    <ModalCalc activeCalc={modalCalcActive} setActiveCalc={setModalCalcActive} />
    </div>
  )
}

export default Header