const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');

// Rotas
router.post('/', motoristaController.createMotorista);
router.get('/', motoristaController.getAllMotoristas);
router.get('/pontuacao-alta', motoristaController.getHighScoreMotoristas);
router.get('/pontuacao-alta/:cpf', motoristaController.getHighScoreMotoristaByCPF);
router.get('/:cpf', motoristaController.getMotoristaByCPF);

module.exports = router;