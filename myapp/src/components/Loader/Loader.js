import React from 'react'
import s from './Loader.module.css'
import {RotatingLines} from 'react-loader-spinner'

function Loader() {
  return (
    <div className={s.loader}>
        <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="1.5"
            width="196"
            visible={true}
        />
    </div>
  )
}

export default Loader