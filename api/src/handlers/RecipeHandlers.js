const {Recipe } =  require ("../db");
const {IdRecipe} = require ("../controllers/RecipeControllers")

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



const CreateHrecipe  = async(req,res) =>{

    const {name,Img,Nivel_Saludable,pasos} = req.body;
    try {
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

module.exports = {
    RecipeId,
    CreateHrecipe
}



