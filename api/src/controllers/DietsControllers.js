const axios = require ('axios')
const {Diets} =  require ("../db") 
require('dotenv').config();
const { URL } = process.env



const GetAlldiets= async ()=>{
    const bdDiets = await Diets.findAll();
    if(bdDiets.length === 0){
        const Dietsdef = await axios.get(URL)
        
        const results = Dietsdef.data.results;


        const copiaBd = results.map((elem)=>{
            Diets.create({

            })
        });
        return results;
    } else {return bdDiets }
}

module.exports =
    GetAlldiets
