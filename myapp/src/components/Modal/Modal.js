import React from 'react'
import s from './Modal.module.css'
import Form from '../UI/Form/Form'

function Modal({active, setActive, children}) {
  
  const {placeholder, style_form, style_form_input, title_btn, style_btn, style_error} = children

  return (
    <div onClick={() => setActive(false)}  className={active ? `${s.modal} ${s.active}` : s.modal}>
        <div onClick={e => e.stopPropagation()} className={active ? `${s.modal_content} ${s.active}` : s.modal_content}>
             <div className={s.modal_content_text}>
                <p>Оставьте свой номер телефона</p>
                <p>сейчас и наш дизайнер свяжется</p>
                <p>с Вами в ближайшее время!</p>
            </div>
            <div className={s.modal_content_form}>
              <Form 
                    placeholder={placeholder}
                    style_form={style_form} 
                    style_form_input={style_form_input}
                    title_btn={title_btn } 
                    style_btn={style_btn}
                    style_error={style_error}
            />
            </div>
        </div>
    </div>
  )
}

export default Modal