import style from './Container.module.css'
import Card from "../Card/Card";
import { useSelector } from "react-redux";


const CardsContainer = ({ninerecipes}) => {
  const recipe = useSelector((state) => state.allRecipes);
  return (
    <div className={style.container}> 
      {ninerecipes?(
      ninerecipes.map((recipe) => {
        return ( <Card 
         id={recipe.id}
          name={recipe.name} 
        Diets={recipe.Diets}
        image={recipe.image} />
        );
      })
      ) : ( 
      <h1>Cargando</h1>)}
    </div> 
  );
};

export default CardsContainer;
