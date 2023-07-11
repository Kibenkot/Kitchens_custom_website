import React, { useContext } from 'react'
import s from './CatalogList.module.css'
import CatalogItem from '../CatalogItem/CatalogItem'
import { Context } from '../context/Context';

function CatalogList() {

    const {catalogsAll} = useContext(Context)
   
    const catalogsSlice = catalogsAll.slice(0, 3) 
    console.log('catalogsSlice-----', catalogsSlice);

  return (
    <div className={s.wrapper}>
        {
            catalogsSlice.map(el =>  <CatalogItem key={el.id} {...el}/> )
        }
       
    </div>
  )
}

export default CatalogList