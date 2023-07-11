import React, { forwardRef } from 'react'
import s from './CatalogSection.module.css'
import ProductList from '../ProductList/ProductList'


  const CatalogSection = forwardRef((props, ref) => {
   
  return(
    <div ref={ref} className={s.container_catalog_all}>
        <div className='container'>
        <div className={s.container_title}>
            <h3>Какие кухни <br/> <span>мы производим?</span></h3>
            <div className={s.container_line}></div>
        </div>
          <ProductList/>
        </div>
    </div>
  )
})

export default CatalogSection