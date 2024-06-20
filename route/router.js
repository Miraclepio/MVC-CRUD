const express=require("express")
const{register}=require("../controller/farmController");

const { getOneAnimal } = require("../controller/farmController");
const { deleteAnimal } = require("../controller/farmController");
const { getAllAnimals } = require("../controller/farmController");
const { getMaturedAnimals } = require("../controller/farmController");
const { getUnsoldAnimals } = require("../controller/farmController");
const { soldAnimal } = require("../controller/farmController");

const router = express.Router ();

router.post('/register-animal', register)
router.get('/animal', getAllAnimals)
router.get('/animal/:id', getOneAnimal)
router.delete('/deleteAnimal/:id', deleteAnimal)
router.get('/getMaturedAnimals', getMaturedAnimals)
router.get('/getUnsoldAnimals', getUnsoldAnimals)
router.patch('/updateAnimal/:id', soldAnimal)



module.exports = router