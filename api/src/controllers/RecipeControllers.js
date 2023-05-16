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
      Img: recipe.image,
      Name: recipe.title,
      Sumary: recipe.summary,
      Healthscore: recipe.healthScore,
      dietTypes: recipe.diets ? recipe.diets : recipe.diets.map((e) => e.name),
    };
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
 const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2c13b2d9f3524f80b8578a1d202f9229&addRecipeInformation=true&number=100`)
const resultApi = recipeApi.data.results
const filterApi = resultApi.filter((recipe)=> recipe.title === name)
const cleanApi = filterApi.map((recipe)=>{
  console.log(recipe.analyzedInstructions[0]?.steps);
  return {
    Id: recipe.id,
    Img: recipe.image,
    name: recipe.title,
    Sumary: recipe.summary,
    Health_score: recipe.healthScore,
    Diets: recipe.diet,
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
const PostRecipe = async (Name, Img, Steps, Health_score, Sumary, Diets) => {
  const RecipeNew = await Recipe.create({
    Name,
    Img,
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
 const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2c13b2d9f3524f80b8578a1d202f9229&addRecipeInformation=true&number=100`)
const resultApi = recipeApi.data.results
 const cleanApi = resultApi.map((results)=>{
  return {
    Id: results.id,
    Img: results.image,
    name: results.title,
    Sumary: results.summary,
    Health_score: results.healthScore,
    Diets: results.diet,
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
