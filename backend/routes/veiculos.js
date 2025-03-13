const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');
// Criar veículo
router.post('/', veiculoController.createVeiculo);
// Buscar todos os veículos
router.get('/', veiculoController.getAllVeiculos);
// Buscar veículo pela placa (substitui o getById)
router.get('/:placa', veiculoController.getVeiculoByPlaca);
// Deletar veículo pela placa
router.delete('/:placa', veiculoController.deleteVeiculoByPlaca);
// Buscar veículos por motorista (usando CPF)
router.get('/motorista/:cpf', veiculoController.getVeiculosByMotorista);

module.exports = router;