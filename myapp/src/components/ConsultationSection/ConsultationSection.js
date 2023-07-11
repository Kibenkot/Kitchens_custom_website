import React, { forwardRef, useState } from 'react'
import s from './ConsultationSection.module.css'
import Layer from './media/Layer.svg'
import CaruselDesigners from '../CaruselDesigners/CaruselDesigners'
import Form from '../UI/Form/Form'
import Button from '../UI/Button/Button'



const ConsultationSection = forwardRef((props ,ref) => {
    const [fileSRC, setFileSRC] = useState('')
 
    const uploadClickHandler = () =>{
        document.getElementById('file_input').click()
    }

    const handlerInput = (e) =>{
      const value = e.target.files
      console.log(value);
      if(!value.length){
        setFileSRC('')
        return
      }
     const fileURLs = Object.values(value).map(el => URL.createObjectURL(el))
     setFileSRC(fileURLs)
    console.log(fileURLs);
}

  return (
    <div ref={ref} className='container'>
        <div className={s.container_title}>
            <h3>Не знаете какой выбрать  <br/> <span>дизайн кухни?</span></h3>
            <div className={s.container_line}></div>
        </div>
        <div className={s.slider_info}>

            <div className={s.slider}>
                <CaruselDesigners />
            </div>

            <div className={s.info}>
                <div className={s.container_title_second}>
                   <h4>Обратитесь к нашим  <br/> <span>дизайнерам!</span></h4>
                 </div>
                 <div className={s.container_title_text}>
                    <p>Более 3000 клиентов благодарны <br/> нашим дизайнерам за:</p>
                 </div>
                 <div className={s.container_skills}>
                    <div className={s.skill}>
                        <img src={Layer} alt='icon_level'/>
                        <p>Скрупулезную и терпеливую работу <br/> по созданию проекта идеальной кухни.</p>
                    </div>
                    <div className={s.skill}>
                        <img src={Layer} alt='icon_level'/>
                        <p>Подбор материалов с экономией  <br/> до 60% без потери качества.</p>
                    </div>
                    <div className={s.skill}>
                        <img src={Layer} alt='icon_level'/>
                        <p>100% соответствие дизайн-проекта <br/> с реальностью.</p>
                    </div>
                 </div>
                 <div className={s.container_title_text}>
                    <p>Оставьте свой номер телефона <br/> и наш дизайнер свяжется <br/> с Вами в ближайшее время</p>
                 </div>

                 <div className={s.form}>
                    <Form 
                        placeholder={'Введите номер'}
                        style_form={'consultation_get'} 
                        style_form_input={'consultation_phone'}
                        title_btn={'Получить консультацию'}
                        style_btn={'consultation_btn'}
                        style_error={'consultation_error'}
                   />
                    <Button
                        title={'Прикрепить свой проект'}
                        style_btn={'my_project'}
                        onCLickFunc = {uploadClickHandler}
                    />
                    <input onChange={handlerInput} type='file' id='file_input' multiple style={{display:'none'}}/>
                 </div>
            </div>
        </div>
    </div>
  )
})

export default ConsultationSection