const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/', veiculoController.createVeiculo);
router.get('/motorista/:motoristaId', veiculoController.getVeiculosByMotorista);

module.exports = router;