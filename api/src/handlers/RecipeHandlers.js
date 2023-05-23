const { Recipe, Diets } = require("../db");
const {
  IdRecipe,
  PostRecipe,
  GetAllRecipe,
  searchByName
} = require("../controllers/RecipeControllers");

// Trae recipes con el id seleccionado
const RecipeId = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api"
  try {
    const recipe = await IdRecipe(id,source);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


/*  Trae recetas por name
 */
const RecipeName = async (req, res) => {
  const { name } = req.query;
/*   const FountRecipe = await GetAllRecipe();
 */
  try {
 let result = name? await searchByName(name) : await GetAllRecipe();   
 res.status(200).json(result)
  } catch (error) {
    res.status(400).json({error:error.message})
    
    
  }
 
};


const CreateHrecipe = async (req, res) => {
  const { Name, image, Steps, Health_score, Sumary, Diets } = req.body;
  try {
    const NewRecipe = await PostRecipe(
      Name,
      image,
      Steps,
      Health_score,
      Sumary,
      Diets
    );
    res.status(201).json("creado exitoxamente ");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  RecipeId,
  CreateHrecipe,
  RecipeName,
};
