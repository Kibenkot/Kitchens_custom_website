import React from 'react'
import s from './Reclame.module.css'
import Money from './media/Money.svg'
import Frame from './media/Frame.svg'
import Star from './media/Star.svg'


function Reclame() {
  return (
    <div className={s.wrapper}>
       <h2>Кухни на заказ <br/> <span>В Харькове</span></h2>
       <div className={s.info}>
        <div className={s.info_item}>
            <div className={s.info_item_img}>
            <img src={Money} alt='icon_money'/>
            </div>
            <p>Цена от <span>19 990 Грн. м./п.</span></p>
        </div>
        <div className={s.info_item}>
            <div className={s.info_item_img}>
            <img src={Frame} alt='icon_frame'/>
            </div>
            <p>Изготовим от <span>7 дней</span></p>
        </div>
        <div className={s.info_item}>
            <div className={s.info_item_img}>
            <img src={Star} alt='icon_star'/>
            </div>
            <p>Гарантия <span>2 года </span></p>
        </div>
       </div>
    </div>
  )
}

export default Reclame