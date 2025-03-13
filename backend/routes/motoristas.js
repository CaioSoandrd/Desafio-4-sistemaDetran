const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');

// Criar motorista
router.post('/', motoristaController.createMotorista);

// Listar todos os motoristas
router.get('/', motoristaController.getAllMotoristas);

// Listar motoristas com pontuação alta
router.get('/pontuacao-alta', motoristaController.getHighScoreMotoristas); // ← Removida a barra final

// Buscar motorista com pontuação alta por CPF (rota específica primeiro!)
router.get('/pontuacao-alta/:cpf', motoristaController.getHighScoreMotoristaByCPF);

// Buscar motorista por CPF (rota genérica por último)
router.get('/:cpf', motoristaController.getMotoristaByCPF);

module.exports = router;