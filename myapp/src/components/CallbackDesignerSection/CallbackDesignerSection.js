import React from 'react'
import s from './CallbackDesignerSection.module.css'
import Form from '../UI/Form/Form'

function CallbackDesignerSection() {
  return (
    <div className={s.wrapper}>
        <div className={s.title_form}>
            <div className={s.title}>
                <h4>Оставьте свой номер телефона наш дизайнер свяжется</h4>
                <h4>с Вами в ближайшее время!</h4>
            </div>
                <Form 
                    placeholder={'Введите номер телефона'}
                    style_form_input={'phone_callback_section'}
                    style_form = {'container_form_btn'}
                    title_btn={'Задать вопрос'}
                    style_btn={'ask_question_btn'}
            />
       </div>   
    </div>
  )
}

export default CallbackDesignerSection