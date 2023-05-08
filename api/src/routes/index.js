const { Router } = require('express');
const DietsRouter = require ('./DietsRouter');
const RecipeRouter = require ('./RecipeRouter');


const router = Router();

router.use("/Recipe",RecipeRouter);
router.use("/Diets", DietsRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
