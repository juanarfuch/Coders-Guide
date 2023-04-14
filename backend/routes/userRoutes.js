const express = require('express');
//Importando libreria

const router = express.Router();
//Creando router de express

const userController = require('../controllers/userController');
//Obteniendo los controladores de usuario
router.post('/register', userController.register);

router.post('/login', userController.login);

module.exports = router;
