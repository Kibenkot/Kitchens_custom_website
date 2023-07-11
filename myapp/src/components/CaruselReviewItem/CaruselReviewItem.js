import React, { useState } from 'react'
import s from './CaruselReviewItem.module.css'
import Button from '../UI/Button/Button'
import star from './media/star.svg'


function CaruselReviewItem({ name, rating, comments, img_1, img_2, data, setModalActive}) {

    const stars = []
    for(let i = 0; i < rating; i++){
        stars.push(<img src={star} alt='star' key={i}/>)
    }

  return (
    <div className={s.wrapper}>
        <div className={s.container_left}>
            <p className={s.data}>{data}</p>
            <h3>{name}</h3>
            <div className={s.rating}>
                {stars}
            </div>
            <p className={s.comment}>{comments}</p>
            <Button 
                title={'Получить дизайн проект'}
                style_btn={'get_design_project'}
                onCLickFunc={() => setModalActive(true)}
                />
        </div>
        <div className={s.container_right}>
            <img src={img_1} alt='photo_customer'/>
            <img src={img_2} alt='photo_kitchen'/>
        </div>
    </div>
  )
}

export default CaruselReviewItem