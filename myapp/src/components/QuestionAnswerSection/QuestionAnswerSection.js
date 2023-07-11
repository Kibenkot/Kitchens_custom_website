import React, { useContext } from 'react'
import s from './QuestionAnswerSection.module.css'
import clock from './media/clock.svg'
import location from '../Header/media/location.png'
import { Context } from '../context/Context'
import phone from './media/phone.svg'




function QuestionAnswerSection() {

    const {designers} = useContext(Context)
    // console.log(designers[2].img);

  return (
    <div className='container'>
        <div className={s.wrapper}>
            <div className={s.container_title}>
                <h3>Остались вопросы? — <br/> <span>С радостью ответим на них!</span></h3>
                <div className={s.container_line}></div>
            </div>
            <div className={s.container_info}>
                <div className={s.info_address_time}>
                    <div className={s.time}>
                        <img src={clock} alt='icon_clock'/>
                        <p>Отвечаем на звонки с 9:00 до 21:00 без выходных!</p>
                    </div>
                    <div className={s.address}>
                        <img className={s.img_location} src={location} alt='icon_location'/>
                        <p>г. Харьков, <br/> ул. Академика <br/> Павлова, 134/16</p>
                    </div>
                </div>
                <div className={s.info_photo}>
                    <div className={s.photo}>
                        <img src={designers[2].img} alt='photo_designers'/>
                    </div>
                    <h4><span>Юлия,</span> Дизайнер</h4>
                </div>
                <div className={s.info_phone}>
                    <div className={s.phone}>
                        <img src={phone} alt='icon_phone'/>
                        <p>+38(057)377-37-37</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionAnswerSection