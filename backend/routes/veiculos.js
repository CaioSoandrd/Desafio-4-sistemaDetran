const express = require('express');
const router = express.Router();
const pool = require('../config/mysql');
const veiculoController = require('../controllers/veiculoController');


router.post('/', veiculoController.createVeiculo);
router.get('/motorista/:motoristaId', veiculoController.getVeiculosByMotorista);

module.exports = router;