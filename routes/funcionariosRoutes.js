const express=require("express");
const router=express.Router();
const funcionariosController=
    require('../controllers/funcionariosController.js');

router.get('/', funcionariosController.inicio);
router.get('/cadastro', funcionariosController.cadastro);
router.post('/new',funcionariosController.new);
router.get('/lista',funcionariosController.lista);
module.exports = router;

