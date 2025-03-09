const express = require('express');
const router = express.Router();

// Importando as rotas individuais
const motoristasRoutes = require('.motoristas');
const veiculosRoutes = require('./veiculos');
const multasRoutes = require('./multas');

//Definindo as rotas principais
router.use('./motoristas', motoristasRoutes);
router.use('./veiculos', veiculosRoutes);
router.use('./multas', multasRoutes);

module.exports = router;
