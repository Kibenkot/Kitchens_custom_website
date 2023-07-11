import React, { forwardRef, useContext, useState } from 'react'
import s from './FiveStepsSection.module.css'
import step_1 from './media/step_1.png'
import step_2 from './media/step_2.png'
import step_3 from './media/step_3.png'
import step_4 from './media/step_4.png'
import step_5 from './media/step_5.png'
import Button from '../UI/Button/Button'
import Modal from '../Modal/Modal'
import ModalCalc from '../ModalCalc/ModalCalc'




const FiveStepsSection = forwardRef((props ,ref) => {

   const [modalActive, setModalActive] = useState(false)
   const [modalCalcActive, setModalCalcActive ] = useState(false)

   const children = {
    placeholder:'Ваш телефон',
    style_form:'consultation_get',
    style_form_input:'phone_number',
    title_btn:'Получить каталог',
    style_btn:'consultation_btn',
    style_error:'consultation_error' 
   }

  return (
    <div ref={ref} className={s.wrapper}>
        <div className='container'>
        <div className={s.container_title}>
            <h3>5 шагов к Вашей <span>идеальной кухне</span></h3>
            <div className={s.container_line}></div>
        </div>
        <div className={s.container_steps}>
        <div className={s.container_steps_first}>
            <div className={s.steps_item}>
                <img src={step_1} alt='photo_kitchen' />
                <div className={s.title_text}>
                    <div className={s.title}>
                    <div className={s.step_num}> 1 </div>
                    <h4>Заявка</h4>
                    </div>
                    <p><span>Вы оставляете заявку</span> или звоните нам <span> +7 (989) 277-94-30</span> Наш специалист подробно расскажет Вам об особенностях наших кухонь, вариантах оплаты и ее установки.</p>
                </div>
                </div>

                <div className={s.steps_item}>
                <img src={step_2} alt='photo_kitchen' />
                <div className={s.title_text}>
                    <div className={s.title}>
                    <div className={s.step_num}> 2 </div>
                    <h4>Консультация дизайнера </h4>
                    </div>
                    <p>Наши дизайнеры с 9:00 до 21: 00 помогут Вам подобрать идеальную кухню, проведут замер, сделают проект и рассчитают стоимость.</p>
                </div>
                </div>

                <div className={s.steps_item}>
                <img src={step_3} alt='photo_kitchen' />
                <div className={s.title_text}>
                    <div className={s.title}>
                    <div className={s.step_num}> 3 </div>
                    <h4>Заключение договора </h4>
                    </div>
                    <p>Подписываем договор, выдаем чек, оформляем рассрочку, согласовываем удобное для Вас время доставки и сборки.</p>
                </div>
                </div>

                </div>
                <div className={s.container_steps_second} >
                <div className={s.steps_item}>
                <img src={step_4} alt='photo_kitchen' />
                <div className={s.title_text}>
                    <div className={s.title}>
                    <div className={s.step_num}> 4 </div>
                    <h4>Доставка и сборка кухни </h4>
                    </div>
                    <p>Привезем Вашу кухню, соберем и установим. Время работ зависит от выбранного Вами материала и перечня дополнительных работ. По окончанию сборки делаем уборку, выносим мусор.</p>
                </div>
                </div>

                <div className={s.steps_item}>
                <img src={step_5} alt='photo_kitchen' />
                <div className={s.title_text}>
                    <div className={s.title}>
                    <div className={s.step_num}> 5 </div>
                    <h4>Поздравляем! <br/> Ваша кухня готова! </h4>
                    </div>
                    <p>Теперь вы можете наслаждаться временем проведенным с семьей на Вашей новой кухне.</p>
                </div>
                </div>
                </div>

                <div className={s.container_btn}>
                <div>
                <Button 
                    title={'Рассчитать стоимость'}
                    style_btn={'calculate_cost_second'}
                    onCLickFunc={() => setModalCalcActive(true)}
                    />
                <Button 
                    title={'Получить весь каталог'}
                    style_btn={'get_whole_catalog'}
                    onCLickFunc={() => setModalActive(true)}
                    />  
                </div>    
             </div>
       
        </div>
        </div>   
        <Modal active={modalActive} setActive={setModalActive} children={children}/>   
        <ModalCalc activeCalc={modalCalcActive} setActiveCalc={setModalCalcActive} />
    </div>
  )
})

export default FiveStepsSection