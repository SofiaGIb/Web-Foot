import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteRecipeId,DetailRecipe} from "../../Redux/actions";
import { useDispatch ,useSelector} from "react-redux"


//-----dispatch ´para buscar las recetas por id
const Detail = () => {
    const { id } = useParams();

    const dispatch =  useDispatch()
    const [ recipe, setRecipe ] = useState({});
    const Details = useSelector((state)=>state.Details)
    useEffect(() => {
dispatch(DetailRecipe(id),[dispatch,id]) })
     
    

      const isValidUUID = (id) => {
        const uuidRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
        return uuidRegex.test(id);
      };
    
      const handleDelete = () => {
        console.log("Delete button clicked")
        deleteRecipeId(recipe.id);
      };
// solo renderizo el boton cuando la receta tiene id de tipo UUID    
      const renderDeleteButton = () => {
        if (isValidUUID(recipe.id)) {
          return (
            <button className={style.buttonDelete} onClick={handleDelete}>
              DELETE
            </button>
          );
        }
        return null;
      };
    

      return (
        <body className={style.detail}>
          
        <div className={style.grid}>
        <div className={style.cardContent}>
          <div className={style.title}>
            <h1>{Details?.Name}</h1>
            <h3 className={style.num} >HealthScore: {Details.Health_score}</h3>
            <p>
              Summary: 
              <div>{Details?.Sumary}</div>
            </p>
          </div>
          <div className={style.containerStep}>steps:{Details.steps?.map((step) => {
          return (
            <ul className={style.steps} key={step.number}>
              <li key={step.number}>{step.number}</li>
              <li key={step.step.lenght}>{step.step}</li>
            </ul>
          );
        })}</div>
          <div className={style.dietTypes}>Diet Types:{Details.diets}</div>
          <h3 className={style.num}>id: {Details.id}</h3>
          
        </div>
        <div className={style.imgContainer}>
          <img className={style.img} src={Details?.image} alt="" />
        </div>
          <div className={style.buttonContainer}>
            <Link to="/Home">
              <button className={style.buttonBack}>BACK</button>
            </Link>
            {renderDeleteButton()}
          </div>
      </div>
              </body>
    );
};

export default Detail;



