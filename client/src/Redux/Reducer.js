                                                                                                                             import { ALL_RECIPE  } from './actions'

const  initialState = {
allRecipe:[]
};

const rootReducer = (state = initialState,action) => {
   
    const  allRecipe = state.allRecipe;
    switch (action.type){
        case ALL_RECIPE:
            return {...state,
            allRecipe:action.payload 
        }
    

    default : return {...state}

}
}

export default rootReducer