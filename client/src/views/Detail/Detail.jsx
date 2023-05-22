import style from './Detail.module.css'
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { DetailRecipe } from "../../Redux/actions";
 import { useParams } from "react-router-dom/";

function Detail() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const Details = useSelector((state) => state.Details);
  console.log(id);
  useEffect(() => {
    dispatch(DetailRecipe(id));
  },[dispatch,id]);

  return (
    <div className={style.detail}>

      <div className={style.ddsh} >
        <h3 className={style.texts}>Steps:</h3>
        {Details.steps?.map((step) => {
          return (
            <ul className={style.steps} key={step.number}>
              <li key={step.number}>{step.number}</li>
              <li key={step.step.lenght}>{step.step}</li>
            </ul>
          );
        })}
      </div>
      <h1 className={style.texts}>name :{Details.Name}</h1>

      <div >
        <h3 className={style.ddsh}>Summary:</h3>
        <p className={style.summary}>{Details.Sumary}</p>
      </div>
      <h3 className={style.ddsh}>health score:</h3>
      <div>{Details.Healthscore}</div>

      <div className={style.divimg}>
        <img  className={style.detailImg} src={Details.image} alt="Pic not found" />
      </div>
      <h2 className={style.texts}>Diets:</h2>
      <div className={style.dishesanddiets}>{Details.diets}</div>
    </div>
)}

export default Detail;
