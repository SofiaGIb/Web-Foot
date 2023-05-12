const {Router} = require ('express');
const RecipeRouter = Router();
const {RecipeId,CreateHrecipe } = require("../handlers/RecipeHandlers")



RecipeRouter.get("/:id",RecipeId);

RecipeRouter.get("/",);
RecipeRouter.post("/",CreateHrecipe )

module.exports = RecipeRouter