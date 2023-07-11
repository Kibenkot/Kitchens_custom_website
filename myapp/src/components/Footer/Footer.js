import React, { forwardRef } from 'react'
import s from './Footer.module.css'
import InteractiveMap from '../InteractiveMap/InteractiveMap'


const Footer = forwardRef((props ,ref) => {
  return (
    <div ref={ref} className={s.wrapper}>
        <div className='container'>
            <div className={s.title}>
                <h2>Контакты</h2>
            </div>
            <div className={s.map}>
             <InteractiveMap />
             <div className={s.info_map}>
                <div className={s.address}>
                    <h4>Адрес:</h4>
                    <p>г.Харьков, ул. Ак.Павлова 134/16</p>
                    <p>(работаем по г.Харьков)</p>
                </div>
                <div className={s.phone}>
                    <h4>Телефон:</h4>
                    <p>+38 (097) 294-85-46</p>
                    <p>+38 (057) 377-37-37</p>
                </div>
             </div>
            </div>
        </div>

    <div className={s.footer_bottom}>
        <div className='container container_bottom'>
            <div className={s.text}>
                <div className={s.text_left}>
                    <p>©  “Немецкий Стандарт” Информация на сайте не является публичной офертой.<br/> Настоящий сайт не является интернет-магазином</p>
                </div>
                <div className={s.text_center}>
                    <p>©  Все права защищены</p>
                </div>
                <div className={s.text_right}>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
})

export default Footer