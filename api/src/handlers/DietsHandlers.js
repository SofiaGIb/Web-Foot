const GetAlldiets = require("../controllers/DietsControllers")


const Getdiets = async (req,res)=>{
try {
    const Diets = await GetAlldiets()
    res.status(200).json(Diets)
} catch (error) {
    res.status(400).json({error:error.message})
    
}

}



module.exports = Getdiets