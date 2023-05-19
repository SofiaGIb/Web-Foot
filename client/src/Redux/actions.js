import axios from "axios";

//*NOS TRAE TODAS LAS RECETAS
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

//*NOS TRAE EL DETALLE DE LA RECETA
export const DETAIL_RECIPE = "DETAIL_RECIPE";

export const DetailRecipe = (id) => {
  return async function (dispatch) {
    const recipeDetails = await axios.get("http://localhost:3001/Recipe/" + id);
    const Details = recipeDetails.data;
    dispatch({
      type: DETAIL_RECIPE,
      payload: Details,
    });
  };
};
//*NOS BUSCA LA RECETA POR NOMBRE
export const RECIPE_NAME = "RECIPE_NAME";

export const getRecipeByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/Recipe/?name=${name}`
      );
      const recipename = response.data;
      return dispatch({ type: RECIPE_NAME, payload: recipename });
    } catch (error) {
      return alert(error.response.data);
    }
  };
};

//*AGREGA RECETA
export const ADD_RECIPE = "ADD_RECIPE";

export const addRecipe = () => {
  return async function (dispatch) {
    try {
      let response = await axios.post("http://localhost:3001/Recipe/");
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
//*NOS TRAE EL TIPO DE DIETA
export const DIET_TYPE = "DIET_TYPE";

export const dietsType = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("http://localhost:3001/Diets/");
      let dietsTypes = response.data;
      return dispatch({ type: DIET_TYPE, payload: dietsTypes });
    } catch (error) {
      console.log(error);
    }
  };
};
//* FILTRA POR TIPO DE DIETA
export const FILTER_DIETS = "FILTER_DIETS";

export const filterdiets = (filters) => {
  return {
    type: FILTER_DIETS,
    payload: filters,
  };
};
//*FILTRA POR ORDEN ALFABETICO
export const ORDEN_ALFABETICO = "ORDEN_ALFABETICO";
export function aplhabeticalSort(payload) {
  return {
    type: ORDEN_ALFABETICO,
    payload,
  };
}

//*PUNTAJE DE CLASIFICACION

export const SCORE_SORT = "SCORE_SORT";
export const scoreSort = (payload) => {
  return {
    type: SCORE_SORT,
    payload,
  };
};
