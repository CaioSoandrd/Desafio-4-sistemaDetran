const express = require('express');
const router = express.Router();
const multaController = require('../controllers/multaController');

// Criar multa
router.post('/', multaController.createMulta);

// Listar todas as multas
router.get('/', multaController.getAllMultas);

// Buscar multa por ID
router.get('/:id', multaController.getMultaById);

// Buscar multas por motorista (usando CPF)
router.get('/motorista/:cpf', multaController.getMultasByMotorista);

// Rota para motoristas com pontuação alta
router.get('/api/motoristas/pontuacao-alta', motoristaController.getHighScoreMotoristas);

module.exports = router;