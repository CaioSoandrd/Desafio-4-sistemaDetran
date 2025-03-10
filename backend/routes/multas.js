const express = require('express');
const router = express.Router();
const pool = require('../config/mysql');
const multaController = require('../controllers/multaController');


router.post('/', multaController.createMulta);
router.get('/', multaController.getAllMultas);

module.exports = router;
