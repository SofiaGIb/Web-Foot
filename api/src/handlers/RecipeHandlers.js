const {Recipe,Diets } =  require ("../db");
const {IdRecipe,PostRecipe,RecipeMatch,RecipeApi} = require ("../controllers/RecipeControllers")

// Trae recipes con el id seleccionado 
const RecipeId = async (req,res)=>{
    const {id}  = req.params;
    try {
        const recipe = await IdRecipe(id);
        res.status(200).json(recipe)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}
/*  Trae recetas por name 
 */
const RecipeName = async (req,res)=>{
    const {name} = req.query; 

try {
    const FountRecipe = name ? await  RecipeMatch(name) : await RecipeApi();
    res.status(200).json(FountRecipe)
    
} catch (error) {
    res.status(400).send(`Sorry,recipe not found`)
    
}    
}


const CreateHrecipe  = async(req,res) =>{

    const {Name,Img,Pasos,Level_Healthy,Resum_Plato,Diets} = req.body;
    try {
        const NewRecipe = await PostRecipe(Name,Img,Pasos,Level_Healthy,Resum_Plato,Diets);
       res.status(201).json(NewRecipe);
    } catch (error) {
        res.status(400).send({error:error.message})
        
    }
}

module.exports = {
    RecipeId,
    CreateHrecipe
}



