import React, { forwardRef } from 'react'
import s from './ReviewsSection.module.css'
import CaruselReviews from '../CaruselReviews/CaruselReviews'


const ReviewsSection = forwardRef((props ,ref) => {
  return (
    <div ref={ref} className='container'>
       <div className={s.container_title}>
            <h3>Нам <span>благодарны</span></h3>
            <div className={s.container_line}></div>
        </div>
        <div className={s.container_carusel}>
            <CaruselReviews />
        </div>
    </div>
  )
})

export default ReviewsSection