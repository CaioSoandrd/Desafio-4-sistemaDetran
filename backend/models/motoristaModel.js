const db = require('../config/mysql');

const Motorista = {
    create: (motorista, callback) => {
        const query = "INSERT INTO Proprietario (cpf, data_nascimento, sexo, proprietario_nome) VALUES (?, ?, ?, ?)";
        db.query(query, [motorista.cpf, motorista.data_nascimento, motorista.sexo, motorista.proprietario_nome], callback);
    },

    getAll: (callback) => {
        const query = "SELECT * FROM Proprietario";
        db.query(query, callback);
    },

    getHighScore: (callback) => {
        const query = "SELECT * FROM Proprietario WHERE pontos >= 10";
        db.query(query, callback);
    },

    getById: (id, callback) => {
        const query = "SELECT * FROM Proprietario WHERE cpf = ?";
        db.query(query, [id], callback);
    }
};

module.exports = Motorista;