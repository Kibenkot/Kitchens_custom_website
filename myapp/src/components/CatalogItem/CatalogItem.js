import React, { useContext, useState } from 'react'
import s from './CatalogItem.module.css'
import Button from '../UI/Button/Button'
import Modal from '../Modal/Modal'



function CatalogItem({img, title, count}) {

  const [modalActive, setModalActive] = useState(false)

  const children = {
      placeholder:'Ваш телефон',
      style_form:'consultation_get',
      style_form_input:'phone_number',
      title_btn:'Получить каталог',
      style_btn:'consultation_btn',
      style_error:'consultation_error'
    }
 

  return (
    <div className={s.wrapper_product}>
        <div className={s.img}>
            <img src={img} alt='foto kitchen'/>
        </div>
        <div className={s.info}>
            <h3>{title}</h3>
            <p>У нас более <span>{count}</span> моделей <br/>современных кухонь.</p>
            <Button 
                title={'Получить каталог'}
                style_btn={'catalog_get_all'}
                onCLickFunc={() => setModalActive(true)}
                />
        </div>
        <Modal active={modalActive} setActive={setModalActive} children={children}/>
    </div>
  )
}

export default CatalogItem