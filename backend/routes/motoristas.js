const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');


router.post('/', motoristaController.createMotorista);

router.get('/', motoristaController.getAllMotoristas);

router.get('/pontuacao-alta', motoristaController.getHighScoreMotoristas);

router.get('/:CPF', motoristaController.getMotoristaByCPF);

module.exports = router;
