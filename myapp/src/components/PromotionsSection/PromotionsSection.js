import React, { forwardRef } from 'react'
import s from './PromotionsSection.module.css'
import Reclame from '../Reclame/Reclame'
import SaleGetSection from '../SaleGetSection/SaleGetSection'


  const PromotionsSection = forwardRef((props, ref) =>{
  return (
    <div ref={ref} className={s.wrapper}>
       <div className='container'>
        <div className={s.container_header_bottom}>
        <div className={s.container_reclame}>
            <Reclame />
        </div>
        <div className={s.container_reclame}>
        <SaleGetSection />
        </div>
    </div>
    </div>     
    </div>
  )
})

export default PromotionsSection