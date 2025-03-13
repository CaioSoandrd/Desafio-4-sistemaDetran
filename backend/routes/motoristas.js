const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');
// Criar motorista
router.post('/', motoristaController.createMotorista);
// Listar todos os motoristas
router.get('/', motoristaController.getAllMotoristas);
// Listar motoristas com pontuação alta
router.get('/pontuacao-alta/:cpf?', motoristaController.getHighScoreMotoristas);
// Buscar motorista por CPF (parâmetro em minúsculo)
router.get('/:cpf', motoristaController.getMotoristaByCPF);

module.exports = router;
