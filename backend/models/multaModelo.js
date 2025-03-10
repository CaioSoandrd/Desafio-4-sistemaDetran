const db = require('../config/mysql'); // Conexão com o banco de dados

const Multa = {
    create: (multa, callback) => {
<<<<<<< HEAD
        const { velocidade_identificada, data_hora, placa_veiculo } = multa;
        const query = 'INSERT INTO Multa (velocidade_identificada, data_hora, placa_veiculo) VALUES (?, ?, ?)';
        db.query(query, [velocidade_identificada, data_hora, placa_veiculo], callback);
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM Multa';
=======
        const { data, valor, descricao, pontos, motorista_id } = multa;
        const query = 'INSERT INTO multas (data, valor, descricao, pontos, motorista_id) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [data, valor, descricao, pontos, motorista_id], callback);
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM multas';
>>>>>>> temp-branch
        db.query(query, callback);
    },

    getById: (id, callback) => {
<<<<<<< HEAD
        const query = 'SELECT * FROM Multa WHERE idInfracao = ?';
        db.query(query, [id], callback);
    },

    getByVeiculo: (placa_veiculo, callback) => {
        const query = 'SELECT * FROM Multa WHERE placa_veiculo = ?';
        db.query(query, [placa_veiculo], callback);
    }
};

module.exports = Multa;
=======
        const query = 'SELECT * FROM multas WHERE id = ?';
        db.query(query, [id], callback);
    },

    getByMotorista: (motorista_id, callback) => {
        const query = 'SELECT * FROM multas WHERE motorista_id = ?';
        db.query(query, [motorista_id], callback);
    }
};

module.exports = Multa;
>>>>>>> temp-branch
