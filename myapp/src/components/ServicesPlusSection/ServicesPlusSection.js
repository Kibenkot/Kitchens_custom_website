import React, { forwardRef, useContext, useState } from 'react'
import s from './ServicesPlusSection.module.css'
import { Context } from '../context/Context'
import Button from '../UI/Button/Button'
import Modal from '../Modal/Modal'



  const ServicesPlusSection = forwardRef((props ,ref) =>{

    const [modalActive, setModalActive] = useState(false)

    const {services} = useContext(Context)
    // console.log('services-----', services);

    const children = {
      placeholder:'Ваш телефон',
      style_form:'consultation_get',
      style_form_input:'phone_number',
      title_btn:'Жду звонка',
      style_btn:'consultation_btn',
      style_error:'consultation_error'
    }

  return (
    <div ref={ref} className={s.wrapper}>
        <div className='container'>
            <div className={s.container_title}>
                <h3>Наши <span>дополнительные <br/> решения</span>  для Вашей кухни </h3>
                <div className={s.container_line}></div>
            </div>
            <div className={s.container_services}>
                {
                  services.map(el => (
                    <div key={el.id} className={s.service_item}>
                      <img src={el.img} alt='photo'/>
                      <div className={s.service_title_btn}> 
                          <h4>{el.title}</h4>
                          <Button 
                                title={'Получить консультацию'}
                                style_btn={'consultation_btn'}
                                onCLickFunc={() => setModalActive(true)}
                                />
                      </div>
                    </div>
                  ))
                }
            </div>
        </div>

                <Modal active={modalActive} setActive={setModalActive} children={children}/> 
                  

    </div>
  )
})

export default ServicesPlusSection