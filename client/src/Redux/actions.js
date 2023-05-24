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
  return async function (dispatch) {
    try {
      const json = await axios.get(`/Recipe/${id}`);
      const data = json.data;
      return dispatch({
        type: DETAIL_RECIPE,
        payload: data,
      });
    } catch (error) {
    }
  };
};
//*NOS BUSCA LA RECETA POR NOMBRE
export const RECIPE_NAME = "RECIPE_NAME";

export const getRecipeByName = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`/Recipe/?name=${name}`);
      const allRecipes = apiData.data;

      const searchTerm = name.toLowerCase();
      const filteredRecipes = allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm)
      );

      if (filteredRecipes.length > 0) {
        console.log("Recetas encontradas:", filteredRecipes);
        dispatch({ type: RECIPE_NAME, payload: filteredRecipes });
      } else {
        dispatch({ type: RECIPE_NAME, payload: [] });
        alert("No recipes were found with the specified name");
      }
    } catch (error) {
      return dispatch({ type: RECIPE_NAME, payload: [] });
    }
  };
};

//const results = !search ? name : name.filter((dato)=> dato.name.toLowercase(include(search.toLocaleLowerCase())))

//* CREA RECETA
export const ADD_RECIPE = "ADD_RECIPE";

export const addRecipe = (payload) => {
  return async function (dispatch) {
    try {
      let response = await axios.post("/Recipe/", payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

//*ELIMINA RECETA CON ID

export const DELETE_RECIPE = "DELETE_RECIPE"
export const  deleteRecipeId = (id) =>{
  console.log("Borrando receta con id: ", id);
  return async function (dispatch) {
    if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(id)) {
      throw new Error("Formato invalido");
    }
    try {
      await axios.delete(`/Recipe/${id}`);
      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
    } catch (error) {
      console.log("Error borrando recipe:", error)
      alert("No se pudo eliminar la receta ");
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

export const filterdiets = (dietsTypes) => {
  return function (dispatch, getState) {
    console.log(dietsTypes);
    if (dietsType === "All Diet Types") {
      dispatch(Recipes());
    } else {
      dispatch({ type: FILTER_DIETS, payload: dietsTypes });
    }
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

// filter source
export const FILTER_SOURCE = "FILTER SOURCE";
export const filterBySource = (selectedSource) => {
  return function (dispatch, getState) {
    const { allRecipes, source } = getState();
    let filterRecipes = allRecipes;

    if (selectedSource !== source) {
      if (selectedSource === "API") {
        filterRecipes = allRecipes.filter(
          (recipe) => typeof recipe.id === "number"
        );
      } else if (selectedSource === "Database") {
        filterRecipes = allRecipes.filter(
          (recipe) => typeof recipe.id === "string"
        );
      }
    }
    dispatch({
      type: FILTER_SOURCE,
      payload: { filterRecipes, source: selectedSource },
    });
  };
};

//*PUNTAJE DE CLASIFICACION

export const SCORE_SORT = "SCORE_SORT";
export const scoreSort = (payload) => {
  return {
    type: SCORE_SORT,
    payload,
  };
};
