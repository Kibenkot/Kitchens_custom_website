import React from 'react'
import s from './SaleGetSection.module.css'
import Form from '../UI/Form/Form'


function SaleGetSection() {
  return (
    <div className={s.wrapper}>
        <div className={s.container_text}>
            <h4>Акция</h4>
            <p>Скидка <span>35%</span> на Вашу кухню</p>
            <p>до 01.01.2024</p>
        </div>
        <div className={s.container_form}>
            <Form
                placeholder={'Введите номер телефона'}
                style_form_input={'phone'}
                style_form = {'container_form_btn'}
                title_btn={'Получить скидку'}
                style_btn={'get_discount'}
                />
        </div>
    </div>
  )
}

export default SaleGetSection