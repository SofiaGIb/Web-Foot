import React from 'react'
import { Link } from 'react-router-dom'
import style from "./landing.module.css"

function Landing() {
  return (
    <div className={style.landingImg}>
      <Link to="/home">
      <button className={style.button}>
        <span className={style.box}>Home</span>
        </button>
      </Link>
      <p className={style.texto}><h1 className={style.title}> FOOD & HEALTH  </h1> <h3>  Te encontraras con una gran variedad de  recetas saludables ,faciles y deliciosas, que cuenta con un paso a paso e instrucciones claras 
        <h2>Bienvenido </h2>  </h3></p>
    </div>
  )
}

export default Landing
