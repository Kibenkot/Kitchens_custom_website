import React from 'react'
import s from './Form.module.css'
import { useForm } from "react-hook-form";


function Form({
    style_form_input,
    style_form,
    placeholder,
    style_btn,
    title_btn,
    style_error,
    order = {},
    handelResetOrder
  }) {
    let {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({ mode: "onSubmit" });
    
      const phoneInp = register("phone", {
        required: "Пожалуйста введите корректный номер телефона +38xxxxxxxxxx",
        pattern: {
          value: /^\+38\d{10}$/,
          message:"Пожалуйста введите корректный номер телефона +38xxxxxxxxxx",
        },
      });


      const onSubmit = (phone) => {
        const result = Object.assign({}, phone, order)
          console.log('Result-----', result);
        reset();
        handelResetOrder()
      };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${s[style_form]}`}>
        <div className={s.container_form}>        
            <input
              className={`${s.num_phone} ${s[style_form_input]}`}
              placeholder={placeholder}
              {...phoneInp}
            />
        </div>
       
        <div className={s.container_btn}>
          <button className={`${s.btn} ${s[style_btn]}`}>
            {title_btn}
          </button>
        </div>
        </div>
        {errors.phone && (
          <p className={`${s.comment_error} ${s[style_error]}`}>{errors.phone.message}</p>
        )}
      </form>
    </div>
  )
}

export default Form