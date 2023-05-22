const { Recipe, Diets } = require("../db");
const axios = require("axios");
const { URL, INFO_DIETS, API_KEY } = process.env;

// busca recetas por ID
const IdRecipe = async (id, source) => {
  if (source === "api") {
    const recipe = (
      await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      )
    ).data;
    const recipeDetail = {
      image: recipe.image,
      Name: recipe.title,
      Sumary: recipe.summary,
      Healthscore: recipe.healthScore,
      diets: recipe.diets ? recipe.diets : recipe.diets.map((e) => e.name),
      steps: recipe.analyzedInstructions[0]?.steps.map( (step)=>{
        return {
          number : step.number,
          step :step.step
        };
      })
    }
    return recipeDetail;
  } else {
    return await Recipe.findByPk(id);
  }
};

const searchByName = async (name)=>{
  let recipeBd = await Recipe.findAll({
    where: { Name : name },
    include: {
      model: Diets,
      attributes: ['name'],
      through: { attributes: [],}
    },
  })
 const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
const resultApi = recipeApi.data.results
const filterApi = resultApi.filter((recipe)=> recipe.title === name)
const cleanApi = filterApi.map((recipe)=>{
  console.log(recipe.analyzedInstructions[0]?.steps);
  return {
    id: recipe.id,
    image: recipe.image,
    name: recipe.title,
    Sumary: recipe.summary,
    Health_score: recipe.healthScore,
    diets: recipe.diets,
     steps: recipe.analyzedInstructions[0]?.steps.map( (step)=>{
      return {
        number : step.number,
        step :step.step
      }
     }),
  };

})
return [...cleanApi,...recipeBd]
}

// creara las recetas
const PostRecipe = async (Name, image, Steps, Health_score, Sumary, Diets) => {
  const RecipeNew = await Recipe.create({
    Name,
    image,
    Steps,
    Health_score,
    Sumary,
  });

  RecipeNew.addDiets(Diets);

  return RecipeNew;
};

const GetAllRecipe = async () => {
  const recipeByBd = await Recipe.findAll({  
    include: {
      model: Diets,
      attributes: ['name'],
      through: { attributes: [],}
    },
})
 const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
const resultApi = recipeApi.data.results
 const cleanApi = resultApi.map((results)=>{
  return {
    id: results.id,
    image: results.image,
    name: results.title,
    Sumary: results.summary,
    Health_score: results.healthScore,
    Diets: results.diets,
     steps: results.analyzedInstructions[0]?.steps.map( (step)=>{
      return {
        number : step.number,
        step :step.step
      }
     }),

  }
 })
 return [...cleanApi,...recipeByBd]
};
module.exports = { IdRecipe, PostRecipe, GetAllRecipe,searchByName };
