import { ALL_RECIPE,DETAIL_RECIPE } from "./actions";

const initialState = {
 recipedata: [],
 Details :[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RECIPE:
      return { ...state, recipedata: action.payload};
 case  DETAIL_RECIPE:
  return {...state , Details: action.payload,}
    default:
      return { ...state };
  }
};


export default rootReducer;
