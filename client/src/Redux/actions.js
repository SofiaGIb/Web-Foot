import axios from "axios";

export const ALL_RECIPE = "ALL_RECIPE";

export const Recipes = () => {
  return async function (dispatch) {
    await axios
      .get("http://localhost3001/Recipe/")
      .then((response) => response.data)
      .then((data) => {
        return dispatch({
          type: ALL_RECIPE,
          payload: data,
        });
      });
  };
};
