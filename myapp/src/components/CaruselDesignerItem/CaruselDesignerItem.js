import React from 'react'
import s from './CaruselDesignerItem.module.css'


function CaruselDesignerItem({img, name, year}) {
  return (
    <div className={s.wrapper}>
        <img src={img} alt= 'photo'/>
        <div className={s.title}>
            <p><span>{name},</span> Дизайнер кухонь, работает с  <span>{year}</span> года</p>
        </div>
    </div>
  )
}

export default CaruselDesignerItem