//IMPORTANDO Y EJECUTANDO
const { Router } = require('express');
const router = Router();

//IMPORTANDO CONTROLADOR DESDE ../controllers/index.controller
const { get, getPersonal } = require('../controllers/controller-index');

router.get('/', get)
router.get('/personal', getPersonal);


//EXPORTANDO RUTAS
module.exports = router;