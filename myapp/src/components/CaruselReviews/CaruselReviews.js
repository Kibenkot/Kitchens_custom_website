import React, { useContext, useState } from 'react'
import s from './CaruselReviews.module.css'
import { Context } from '../context/Context'
import CaruselReviewItem from '../CaruselReviewItem/CaruselReviewItem'
import icon_left from './media/icon_left.svg'
import icon_right from './media/icon_right.svg'
import Modal from '../Modal/Modal'

function CaruselReviews() {

  //----Modal------
  const [modalActive, setModalActive] = useState(false)
  const children = {
    placeholder:'Ваш телефон',
    style_form:'consultation_get',
    style_form_input:'phone_number',
    title_btn:'Оставить заявку',
    style_btn:'consultation_btn',
    style_error:'consultation_error'
  }
  
    const{reviews} = useContext(Context)

  //--scroll----
    const PAGE_WIDTH = 1137

    const [offset, setOffset] = useState(0)

    const handeleLeftArrowClick = () =>{

        setOffset((currentOffset) =>{
            const newOffset = currentOffset + PAGE_WIDTH 
            if(newOffset > 0){
                const maxOffset = -(PAGE_WIDTH * (reviews.length-1))
                return maxOffset
            }
            return newOffset
        })
    }

    const handeleRightArrowClick = () =>{
      
        setOffset((currentOffset) =>{
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (reviews.length-1))
            console.log('maxOffset---', maxOffset);
            console.log('newOffset----', newOffset);

             if(newOffset < maxOffset){
                return maxOffset + (PAGE_WIDTH * (reviews.length-1))
            }
             return newOffset
        })
    }

  
  return (
    <div className={s.wrapper}>
      <button 
          onClick={handeleLeftArrowClick}
          className={s.icon_left}>
        <img src={icon_left} alt='icon'/>
      </button>
      <div className={s.window}>
        <div className={s.reviews_line}style ={{
                    transform:`translateX(${offset}px)`,
                }}
        >
          {
              reviews.map(el => <CaruselReviewItem key={el.id} {...el} setModalActive={setModalActive} />)
          }   
        </div>    
      </div>
      <button
          onClick={handeleRightArrowClick} 
          className={s.icon_right}>
        <img src={icon_right} alt='icon'/>
      </button>
      <Modal active={modalActive} setActive={setModalActive} children={children} />
    </div>
  )
}

export default CaruselReviews