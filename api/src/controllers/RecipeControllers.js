const {Recipe , Diets} = require ('../db')
const  axios = require ('axios');
const { URL ,INFO_DIETS} = process.env;
 


// busca recetas por ID
const IdRecipe =  ()=>{};


const RecipeMatch = async (name)=>{

    let nameLower = name.tolowerCase();
    const recipeBd = await Recipe.findAll({
        where : { name : nameLower},
        include :{
            model : diets ,
            attributes : ["name"],
            through : {attributes :[]
            }
        }

})
};

const   RecipeApi = async () => {
 const apiUrl = await  axios.get(INFO_DIETS);
const apiInfo = await apiUrl.data.results .map(e=>{
    return {
        Id : e.id,
        img : e.img,
        name : e.title,
        Steps : e.steps,
        Sumary : e.summary,
        Health_score: e.health_score,
        
    }
}) 
 return apiInfo;
};
// creara las recetas 
const PostRecipe= async (Name,Img,Pasos,Level_Healthy,Resum_Plato,Diets)=>{
const RecipeNew = await Recipe.create({Name,Img,Pasos,Level_Healthy,Resum_Plato})

RecipeNew.addDiets(
    Diets
)

return RecipeNew
}

const  GetAllRecipe = async () =>{
 const apiInfo = await RecipeApi();
 const bdInfo = await RecipeMatch();
return  apiInfo.concat(bdInfo); 

}
module.exports = {IdRecipe,
    PostRecipe,
    RecipeMatch,
     RecipeApi,
     GetAllRecipe}

