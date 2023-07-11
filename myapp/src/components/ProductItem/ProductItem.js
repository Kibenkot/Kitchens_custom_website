import React, {useState } from 'react'
import s from './ProductItem.module.css'
import Button from '../UI/Button/Button'
import Modal from '../Modal/Modal'
import ModalCalc from '../ModalCalc/ModalCalc'



function ProductItem({img, front, furniture, worktop, price, discounted_price}) {

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
    <div className={s.wrapper_product}>
        <div className={s.img}>
            <img src={img} alt='foto kitchen'/>
        </div>
        <div className={s.info}>
            <div className={s.info_top}>
                <p>материал фасадов: <span>{front}</span></p>
                <p>фурнитура: <span>{furniture}</span></p>
                <p>столешница: <span>{worktop}</span></p>
            </div>
            <div className={s.price_btn}>
            <div className={s.price}>
                <p>Цена:</p>
                <p className={s.price_old}>от: {price}</p>
                <p className={s.price_discount}>{discounted_price} Грн п./м.</p>
            </div>
                <Button 
                    title={'Получить каталог'}
                    style_btn={'catalog_get'}
                    onCLickFunc={() => setModalActive(true)}
                />
                <Button 
                    title={'Рассчитать стоимость'}
                    style_btn={'calculate_cost'}

                    onCLickFunc={() => setModalCalcActive(true)}
                    />
            </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive} children={children}/> 
        <ModalCalc activeCalc={modalCalcActive} setActiveCalc={setModalCalcActive} />
       
    </div>
  )
}

export default ProductItem