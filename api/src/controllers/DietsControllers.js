const axios = require ('axios')
const { Diets }=require("../db.js") 
require('dotenv').config();
const { INFO_DIETS,URL,API_KEY} = process.env

const GetAlldiets= async ()=>{
const dietsApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const dietArray = dietsApi.data.results?.map((recipe) => recipe.diets);
        const dietsEach = dietArray.flat();
        const diets = [...new Set(dietsEach)];
      diets.forEach((diet) => {
            Diets.findOrCreate({
                where: {
                    name: diet,
                }
            })

        })
        return Diets.findAll()
    }

module.exports =
    GetAlldiets
