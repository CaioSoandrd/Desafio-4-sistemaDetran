const db = require('../config/mysql'); // Conexão com o banco de dados

const Multa = {
    create: (multa, callback) => {
        const { velocidade_identificada, data_hora, placa_veiculo } = multa;
        const query = 'INSERT INTO Multa (velocidade_identificada, data_hora, placa_veiculo) VALUES (?, ?, ?)';
        db.query(query, [velocidade_identificada, data_hora, placa_veiculo], callback);
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM Multa';
        db.query(query, callback);
    },

    getById: (id, callback) => {
        const query = 'SELECT * FROM Multa WHERE idInfracao = ?';
        db.query(query, [id], callback);
    },

    getByVeiculo: (placa_veiculo, callback) => {
        const query = 'SELECT * FROM Multa WHERE placa_veiculo = ?';
        db.query(query, [placa_veiculo], callback);
    }
};

module.exports = Multa;