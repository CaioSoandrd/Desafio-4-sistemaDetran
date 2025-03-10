const express = require('express');
const router = express.Router();
const motoristaController = require('../controllers/motoristaController');


router.post('/', motoristaController.createMotorista);

router.get('/', motoristaController.getAllMotoristas);

router.get('/pontuacao-alta', motoristaController.getHighScoreMotoristas);

router.get('/:id', motoristaController.getMotoristaById);

module.exports = router;
