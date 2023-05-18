import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const recipe = useSelector((state) => state.recipedata);
  return (
    <div> 
      {recipe.map(recipe => {
        return <Card name={recipe.name} 
        Diets={recipe.Diets}
        
        
        image={recipe.image} />
      })}
    </div>
  );
};

export default CardsContainer;
