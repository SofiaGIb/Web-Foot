const {Router} = require ('express');
const RecipeRouter = Router();
const {RecipeId,CreateHrecipe, RecipeName} = require("../handlers/RecipeHandlers");



RecipeRouter.get("/:id",RecipeId);

RecipeRouter.get("/",RecipeName);
RecipeRouter.post("/",CreateHrecipe)

module.exports = RecipeRouter