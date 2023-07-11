import React from 'react'
import s from './CatalogsAllSection.module.css'
import CatalogList from '../CatalogList/CatalogList'



function CatalogsAllSection() {
  return (
    <div className='container'>
        <div className={s.container_title}>
            <h3>Не нашли нужную модель? <br/> <span>Она у нас точно есть!</span></h3>
            <div className={s.container_line}></div>
        </div>
        <div className={s.container_text}>
          <p>Мы установили более <span>3000</span> кухонь на заказ!</p>
          <p>Получите подробный каталог</p>
        </div>
         <CatalogList />
    </div>
  )
}

export default CatalogsAllSection