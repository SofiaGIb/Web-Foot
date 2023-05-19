import { ALL_RECIPE,DETAIL_RECIPE,RECIPE_NAME,ADD_RECIPE,DIET_TYPE,FILTER_RECIPES,SCORE_SORT,ORDEN_ALFABETICO, FILTER_DIETS} from "./actions";

const initialState = {
 recipes: [],
 Details :[],
 allRecipes:[],
 dietsTypes:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RECIPE:
      return { ...state,
        allRecipes:action.payload,
         recipes: action.payload};

 case  DETAIL_RECIPE:
  return {...state , Details: action.payload,}
  
  case RECIPE_NAME: 
  return {...state,recipes:action.payload}
  
  case ADD_RECIPE:
    return {...state  }
  
  
    case DIET_TYPE:
      return {
        ...state,
        dietTypes: action.payload
      }

    case FILTER_DIETS:
      const allRecipes = state.allRecipes;          
      const filteredByDietType = allRecipes.filter(r => r.dietsTypes?.some(d => d.toLowerCase() === action.payload.toLowerCase()))           
      return {
        ...state,
        recipes: filteredByDietType
      };



      case ORDEN_ALFABETICO:
        let sortedRecipes = [...state.recipes]       
        sortedRecipes = action.payload === 'atoz' ?
        state.recipes.sort(function(a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        }) :
        state.recipes.sort(function(a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0;
        });          
        return {
          ...state,
          recipes: sortedRecipes
        };

        case SCORE_SORT : 
        let sortedRecipesByScore = [...state.recipes] 
        sortedRecipesByScore = action.payload === 'asc' ?
        state.recipes.sort(function(a, b) {
          if (a.score > b.score) return 1;
          if (a.score < b.score) return -1;
          return 0;
        }) :
        state.recipes.sort(function(a, b) {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
          return 0;
        });
        return {
          ...state,
          recipes: sortedRecipesByScore
        };



    default:
      return { ...state,
      dietsType:action.payload };
  }
};


export default rootReducer;
