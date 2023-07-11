import React, { cloneElement, useContext, useState } from 'react'
import s from './CaruselDesigners.module.css'
import { Context } from '../context/Context';
import left_icon from './media/left_icon.svg'
import right_icon from './media/right_icon.svg'
import CaruselDesignerItem from '../CaruselDesignerItem/CaruselDesignerItem';



function CaruselDesigners() {

    const {designers} = useContext(Context)
    // console.log('designers--------',designers);
    // console.log(designers.length);

    const PAGE_WIDTH = 569

    const [offset, setOffset] = useState(0)

    const handeleLeftArrowClick = () =>{

        setOffset((currentOffset) =>{
            const newOffset = currentOffset + PAGE_WIDTH 
            if(newOffset > 0){
                const maxOffset = -(PAGE_WIDTH * (designers.length-1))
                return maxOffset
            }
            return newOffset
        })
    }

    const handeleRightArrowClick = () =>{
      
        setOffset((currentOffset) =>{
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (designers.length-1))
            console.log('maxOffset---', maxOffset);
            console.log('newOffset----', newOffset);

             if(newOffset < maxOffset){
                return maxOffset + (PAGE_WIDTH * (designers.length-1))
            }
             return newOffset
        })

    }

  return (
    <div className={s.wrapper}>
        <button 
            onClick={handeleLeftArrowClick}
            className={s.icon_left}
            >
            <img src={left_icon} alt='left_icon'/>
        </button>
        <div className={s.window}>
            <div className={s.designers_line}
                 style ={{
                    transform:`translateX(${offset}px)`,
                }}
                >
                    {
                        designers.map(el => <CaruselDesignerItem key={el.id} {...el}/> )
                    }
            </div>
       </div>
        <button
             onClick={handeleRightArrowClick}
             className={s.icon_right}>
             <img src={right_icon} alt='right_icon'/>
        </button>
    </div>
  )
}

export default CaruselDesigners