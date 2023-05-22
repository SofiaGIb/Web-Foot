import style from './form.module.css'
import React from 'react'
import Formulario from '../../components/Formulario/Formulario'

function Form() {
  return (
    <div className={style.form}>
      <h1>FORMULARIO</h1>
      <Formulario/>
    </div>
  )
}

export default Form
