import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";

function Card({id,name,image,Diets}) {
  return (
    <div className={style.card}>
      <Link to={`/Detail/${id}`}>
      <div className={style.title}>
        <h2 className={style.title}>  {name} </h2>
      </div> 
      <div >
        <img  src={image}  />
      </div >
    <div className={style.body}> Diets : {Diets}</div>
    </Link>
    </div>
  );
}

export default Card;
