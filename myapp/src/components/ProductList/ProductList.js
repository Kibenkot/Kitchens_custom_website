import React, { useContext } from 'react'
import s from './ProductList.module.css'
import ProductItem from '../ProductItem/ProductItem'
import { Context } from '../context/Context';


function ProductList() {

  const {kitchens} = useContext(Context)
    // console.log('Kitchen--------',kitchens);

  return (
    <div className={s.wrapper}>
        {
            kitchens.map(el => <ProductItem key={el.id} {...el}/>)
        }
        
    </div>
  )
}

export default ProductList