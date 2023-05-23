import axios from "axios";

//*NOS TRAE TODAS LAS RECETAS
export const ALL_RECIPE = "ALL_RECIPE";

export const Recipes = () => {
  return async function (dispatch) {
    const recipes = await axios.get("/Recipe/");
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
return async function(dispatch){
  try {
    const json = await axios.get(`/Recipe/${id}`)
    const data = json.data;
    return dispatch({
      type : DETAIL_RECIPE,
      payload: data
    })
  } catch (error) {
    alert(error.response.data.error)
    
  }
}

};
//*NOS BUSCA LA RECETA POR NOMBRE
export const RECIPE_NAME = "RECIPE_NAME";

export const getRecipeByName = (name) => {
  
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `/Recipe/?name=${name}`
      );
      const recipename = response.data;
      return dispatch({ type: RECIPE_NAME, payload: recipename });
    } catch (error) {
      return alert(error.response);
    }
  };
};
//const results = !search ? name : name.filter((dato)=> dato.name.toLowercase(include(search.toLocaleLowerCase())))

//*AGREGA RECETA
export const ADD_RECIPE = "ADD_RECIPE";

export const addRecipe = (payload) => {
  return async function (dispatch) {
    try {
      let response = await axios.post("/Recipe/",payload);
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
      let response = await axios.get("/Diets/");
      let dietsType = response.data;
      return dispatch({ type: DIET_TYPE, payload: dietsType });
    } catch (error) {
      console.log(error);
    }
  };
};
//* FILTRA POR TIPO DE DIETA
export const FILTER_DIETS = "FILTER_DIETS";

export const filterdiets = (filters) => {
  return {
    type: FILTER_DIETS                                    ,
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
