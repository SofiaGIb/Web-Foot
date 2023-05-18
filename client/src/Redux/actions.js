import axios from "axios";

export const ALL_RECIPE = "ALL_RECIPE";

export const Recipes = () => {
  return async function (dispatch) {
    const recipes = await axios.get("http://localhost:3001/Recipe/");
    const recipedata = recipes.data;
    dispatch({
      type: ALL_RECIPE,
      payload: recipedata,
    });
  };
};
export const DETAIL_RECIPE = "DETAIL_RECIPE";

export const DetailRecipe = (id) => {
 return async function (dispatch){
 const recipeDetails = await axios.get(`http://localhost:3001/Recipe/${id}`)
 const Details=recipeDetails.data;
 dispatch({
  type : DETAIL_RECIPE,
  payload :Details
 })

 }

}