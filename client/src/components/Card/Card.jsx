import React from "react";
import style from './Card.module.css'
import { Link } from "react-router-dom";

function Card({id,name,image,Diets}) {
console.log(image);
  return (
    <div className={style.card}>
      <Link to={`/Detail/${id}`}>
      <div>
        <h2 className={style.Name}>{name} </h2>
      </div>
      <div >
        <img  src={image}  />
      </div>
    <div> Diets : {Diets}</div>
    </Link>
    </div>
  );
}

export default Card;
