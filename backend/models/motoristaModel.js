const db = require('../config/mysql');

const Motorista = {

    create: (motorista, callback) => {
        const query = "INSERT INTO motoristas (nome, cpf, pontos) VALUES (?, ?, ?)";
        db.query(query, [motorista.nome, motorista.cpf, motorista.pontos], callback);
    },

    getAll: (callback) => {
        const query = "SELECT * FROM motoristas";

        db.query(query, callback);
    },

    getHighScore: (callback) => {

        const query = "SELECT * FROM motoristas WHERE pontos >= 10";

        db.query(query, callback);
    },

    getById: (id, callback) => {

        const query = "SELECT * FROM motoristas WHERE id = ?";

        db.query(query, [id], callback);
    }
};

module.exports = Motorista;
