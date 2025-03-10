const express = require('express');
const router = express.Router();
const connection = require('../config/mysql'); // Importar a conexão

// Rota de teste para verificar a conexão com o banco de dados
router.get('/test-db', (req, res) => {
    connection.query('SELECT 1', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao conectar ao banco de dados', details: err });
        }
        res.status(200).json({ message: 'Conexão com o banco de dados funcionando!', results });
    });
});

module.exports = router;