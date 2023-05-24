import { FILTER_SOURCE,ALL_RECIPE,DELETE_RECIPE,DETAIL_RECIPE,RECIPE_NAME,ADD_RECIPE,DIET_TYPE,SCORE_SORT,ORDEN_ALFABETICO,FILTER_DIETS} from './actions'

const initialState = {
 recipes: [],
 Details :{},
 allRecipes:[],
 dietsTypes:[],
 filterRecipes:[],
 source : "All Source"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_RECIPE:
      return { ...state,
        recipes : action.payload,
        allRecipes:action.payload,
         };

 case  DETAIL_RECIPE:
   return {...state , Details: action.payload,}
   
   case RECIPE_NAME: 
   const filterRecipesByName = action.payload.map((recipe) => {
    return { ...recipe, Diets: state.allRecipes.find((r) => r.id === recipe.id)?.Diets || [],};});
  return { ...state, recipes: filterRecipesByName };
  case ADD_RECIPE:
    return {...state  }
  
  
    case DIET_TYPE:
      return {
        ...state,
        dietsTypes: action.payload
      }

    case FILTER_DIETS:
      const selectedDiet = action.payload;
      const recipesFilter =
      selectedDiet === "All Diet Types"
    ? [...state.allRecipes]
    : state.allRecipes.filter( (recipe) => recipe.Diets && recipe.Diets.includes(selectedDiet));
      return { ...state, recipes: recipesFilter, isFilter: true };



      case ORDEN_ALFABETICO:
        const orderRecipes = [...state.recipes].sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return action.payload === "AtoZ" ? -1 : 1;
          if (nameA > nameB) return action.payload === "AtoZ" ? 1 : -1;
          return 0;
        });
        return { ...state, recipes: orderRecipes };
  
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

        case FILTER_SOURCE:
          const { filterRecipes, source: selectedSource } = action.payload;
          return { ...state,recipes: filterRecipes, source: selectedSource };
    
              
    case DELETE_RECIPE:
      return { ...state, allRecipes: action.payload};


    default:
      return { ...state,
      dietsType:action.payload };
  }
};


export default rootReducer;
