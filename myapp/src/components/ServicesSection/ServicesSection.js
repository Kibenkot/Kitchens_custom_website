import React from 'react'
import s from './ServicesSection.module.css'
import Group_1 from './media/Group_1.svg'
import Group_2 from './media/Group_2.svg'
import Group_3 from './media/Group_3.svg'
import Group_4 from './media/Group_4.svg'



function ServicesSection() {
  return (
    <div className='container'>
    <div className={s.sections_all}>
    <div className={s.section}>
        <img src={Group_1} alt='credit' />
        <div className={s.section_text}>
            <p> Рассрочка 0% </p>
            <p>до 12 месяцев </p>
        </div>
    </div>
    <div className={s.section}>
        <img src={Group_2} alt='experience'/>
        <div className={s.section_text}>
            <p>Устанавливаем кухни</p>
            <p>с 2013 года</p>
        </div>
    </div>
    <div className={s.section}>
        <img src={Group_3} alt='installation'/>
        <div className={s.section_text}>
            <p>Бесплатная</p>
            <p>установка</p>
        </div>
    </div>
    <div className={s.section}>
        <img src={Group_4} alt='life time'/>
        <div className={s.section_text}>
            <p>Срок службы</p>
            <p>20 лет</p>
        </div>
    </div>    
    </div>
</div>
  )
}

export default ServicesSection