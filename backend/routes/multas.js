const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.post('/', multaController.createMulta);
router.get('/', multaController.getAllMultas);

module.exports = router;
