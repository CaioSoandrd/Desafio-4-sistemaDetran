const db = require('../config/mysql'); // Conexão com o banco de dados

const Multa = {
    create: (multa, callback) => {
        const { data, valor, descricao, pontos, motorista_id } = multa;
        const query = 'INSERT INTO multas (data, valor, descricao, pontos, motorista_id) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data, valor, descricao, pontos, motorista_id], callback);
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM multas';

        db.query(query, callback);
    },

    getById: (id, callback) => {

        const query = 'SELECT * FROM multas WHERE id = ?';
        db.query(query, [id], callback);
    },

    getByMotorista: (motorista_id, callback) => {
        const query = 'SELECT * FROM multas WHERE motorista_id = ?';
        db.query(query, [motorista_id], callback);
    }
};

module.exports = Multa;

