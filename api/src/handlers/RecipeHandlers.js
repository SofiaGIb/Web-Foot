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
/*   try {
    if (name) {
        let recipeByName = FountRecipe.filter(e => e.name.toLowerCase().includes(name.toString().toLowerCase()));
       
        if (recipeByName.length) {
            let recipes = recipeByName.map(e => {
                return {
                    image: e.image,
                    name: e.name,
                    dietTypes: e.diets ? e.diets : e.diets.map(e => e.name),
                    score: e.score,
                    id: e.id
                }
            })
            return res.status(200).send(recipes); 
        }  
        return res.status(404).send('Sorry, recipe not found')
    } else {
        let recipes = FountRecipe.map(e => {
            return {
                image: e.image,
                name: e.name,
                diets: e.diets ? e.diets : e.diets.map(e => e.name),
                score: e.score,
                id: e.id
            }
        })
        return res.status(200).send(recipes);
    }
} catch {
   return res.status(400).send('invalid input');
}
 */ 
};


const CreateHrecipe = async (req, res) => {
  const { Name, Img, Steps, Health_score, Sumary, Diets } = req.body;
  try {
    const NewRecipe = await PostRecipe(
      Name,
      Img,
      Steps,
      Health_score,
      Sumary,
      Diets
    );
    res.status(201).json(NewRecipe);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  RecipeId,
  CreateHrecipe,
  RecipeName,
};
