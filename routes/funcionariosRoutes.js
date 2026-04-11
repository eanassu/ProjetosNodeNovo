const express=require("express");
const router=express.Router();
const funcionariosController=
    require('../controllers/funcionariosController.js');

router.get('/', funcionariosController.inicio);
module.exports = router;

