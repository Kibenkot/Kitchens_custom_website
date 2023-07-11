import React, { useContext, useState } from 'react'
import s from './BenefitsOurKitchensSection.module.css'
import Rectangle_1 from './media/Rectangle_1.png'
import Rectangle_2 from './media/Rectangle_2.png'
import Rectangle_3 from './media/Rectangle_3.png'
import Rectangle_4 from './media/Rectangle_4.png'
import Rectangle_5 from './media/Rectangle_5.png'
import Rectangle_6 from './media/Rectangle_6.png'
import Button from '../UI/Button/Button'
import Modal from '../Modal/Modal'
import ModalCalc from '../ModalCalc/ModalCalc'


function BenefitsOurKitchensSection() {

    const [modalActive, setModalActive] = useState(false)
    const [modalCalcActive, setModalCalcActive] = useState(false)

  const children = {
      placeholder:'Ваш телефон',
      style_form:'consultation_get',
      style_form_input:'phone_number',
      title_btn:'Получить каталог',
      style_btn:'consultation_btn',
      style_error:'consultation_error'
    }

  return (
    <div className='container'>
        <div className={s.container_title}>
            <h3>Почему выбирают <span>наши кухни?</span></h3>
            <div className={s.container_line}></div>
        </div>
        <div className={s.container_benefits_all}>
            <div className={s.benefit_item}>
                <img src={Rectangle_1} alt='photo_kithen'/>
                <h4>Современные фасады</h4>
                <p>Наши фасады на <span>40%</span> долговечнее обычных, так как они влагоустойчивы и не подвержены повреждениям. В наличии более <span>250</span>  фактур и <span>2000</span> оттенков.</p>
            </div>
            <div className={s.benefit_item}>
                <img src={Rectangle_2} alt='photo_kithen'/>
                <h4>Прочные столешницы</h4>
                <p>Наши столешницы на <span>25%</span> прочнее и в <span>2</span> раза влагоустойчивее чем обычные. В наличии <span>10</span> покрытий и <span>170</span> вариантов расцветок и фактур.</p>
            </div>
            <div className={s.benefit_item}>
                <img src={Rectangle_3} alt='photo_kithen'/>
                <h4>Долговечная и функциональная фурнитура</h4>
                <p>Выдерживает более <span>20</span> лет службы. Создает максимальный комфорт и удобство пользования кухней.</p>
            </div>
            <div className={s.benefit_item}>
                <img src={Rectangle_4} alt='photo_kithen'/>
                <h4>Полный комплект документов</h4>
                <p>Вы получите: договор, кассовый чек, гарантийный талон и правила эксплуатации. Это гарантирует защиту Ваших прав.</p>
            </div>
            <div className={s.benefit_item}>
                <img src={Rectangle_5} alt='photo_kithen'/>
                <h4>Опытные и вежливые сборщики</h4>
                <p>Наши сборщики вежливы и аккуратны. Соберут, установят и вынесут строительный мусор. Имеют стаж работы с кухнями  не менее <span>6</span> лет.</p>
            </div>
            <div className={s.benefit_item}>
                <img src={Rectangle_6} alt='photo_kithen'/>
                <h4>Бесплатная доставка <br/> и сборка кухни</h4>
                <p>Мы бесплатно доставим, соберем и установим Вашу кухню в любой точке Краснодара.</p>
            </div>
            </div>
            <div className={s.container_btn}>
                <div>
                <Button 
                    title={'Рассчитать стоимость'}
                    style_btn={'calculate_cost_second'}
                    onCLickFunc={() => setModalCalcActive(true) }
                    />
                <Button 
                    title={'Получить весь каталог'}
                    style_btn={'get_whole_catalog'}
                    onCLickFunc={() => setModalActive(true)}
                    />  
                </div>    
        </div>
        <Modal active={modalActive} setActive={setModalActive} children={children}/>
        <ModalCalc activeCalc={modalCalcActive} setActiveCalc={setModalCalcActive} />
    </div>
  )
}

export default BenefitsOurKitchensSection