import React, { useContext, useState } from 'react'
import s from './ModalCalc.module.css'
import { Context } from '../context/Context'
import Form from '../UI/Form/Form'

function ModalCalc({activeCalc, setActiveCalc}) {

    const {catalogsAll, forms, spaces} = useContext(Context)

    let startOrder = {
        style:'',
        form:'',
        space:''
    }
    
    const [order, setOrder] = useState(startOrder)

    const chooseStyleKitchen = (title) =>{
        setOrder({...order, style:title})
    }

    const chooseFormKitchen = (title) =>{
        setOrder({...order, form:title})
    }

    const chooseSpaceKitchen =(text) =>{
        setOrder({...order, space:text})
    }

    const handelResetOrder = ()=>{
        setOrder(startOrder)
    }

  return (
    <div onClick={() => setActiveCalc(false)}  className={activeCalc ? `${s.modal} ${s.active}` : s.modal}>
        <div onClick={e => e.stopPropagation()} className={activeCalc ? `${s.modal_content} ${s.active}` : s.modal_content}>
            <div className={s.wrapper}>
                <h2>Узнайте цену <span>вашей кухни</span></h2>
                
                <div className={s.style_kitchen}>
                    <h4>Стиль:</h4>
                    <div className={s.style_kitchen_container}>
                        {
                            catalogsAll.map(el =>(
                                <div onClick={() => chooseStyleKitchen(el.title)} 
                                     className={s.style_kitchen_item}
                                     key={el.id}
                                > 
                                    <img src={el.img} alt='foto kitchen'/>
                                    <div className={el.title === order.style ? s.active_title : null }>
                                     <p>{el.title}</p>
                                    </div>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>

                <div className={s.form_kitchen}>
                    <h4>Форма:</h4>
                    <div className={s.form_kitchen_container}>
                        {
                            forms.map(el =>(
                                <div onClick={() => chooseFormKitchen(el.title)}
                                    className={s.form_kitchen_item} 
                                    key={el.id}> 
                                    <div className={el.title === order.form ? s.form_kitchen_active : s.form_kitchen_img}>
                                         <img src={el.title === order.form ? el.img_2 : el.img_1} alt='foto kitchen'/>
                                    </div>
                                    <div>
                                        <p>{el.title}</p>
                                    </div>
                                </div>
                                )
                            )
                        }
                    </div>
                </div>

                <div className={s.space_kitchen}>
                    <h4>Площадь кухни:</h4>
                    <div className={s.space_kitchen_container}>
                        {
                            spaces.map(el =>(
                                <div
                                    onClick={() => chooseSpaceKitchen(el.text)} 
                                    className={el.text === order.space ? s.space_active :  s.space_kitchen_item}
                                    key={el.id}> 
                                     <p>{el.text}</p> 
                                </div>
                                )
                            )
                        }
                    </div>
                </div>

                <div className={s.form_container}>
                    <div className={s.container_text}>
                        <p>Оставьте свой номер телефона сейчас и наш</p>
                        <p>дизайнер свяжется с Вами в ближайшее время!</p>
                    </div>
                    <Form 
                        placeholder={'Номер телефона'}
                        style_form_input={'phone_modal'}
                        style_form = {'container_form_btn'}
                        title_btn={'Рассчитать стоимость'}
                        style_btn={'get_price'}
                        order={order}
                        handelResetOrder={handelResetOrder}
                    />

                </div>

            </div>
        </div>
    </div>
  )
}

export default ModalCalc