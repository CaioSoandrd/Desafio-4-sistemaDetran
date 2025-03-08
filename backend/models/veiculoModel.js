const db = require('../config/mysql');

// define o objeto Veiculo com os métodos de acesso ao banco
const Veiculo = {
    // cria um novo veículo na tabela 'veiculos'
    create: (veiculo, callback) => {
        const query = "INSERT INTO veiculos (placa, modelo, cor, motorista_id) VALUES (?, ?, ?, ?)";
        db.query(query, [veiculo.placa, veiculo.modelo, veiculo.cor, veiculo.motorista_id], callback);
    },

    // busca todos os veículos cadastrados
    getAll: (callback) => {
        const query = "SELECT * FROM veiculos";
        db.query(query, callback);
    },

    // busca um veículo específico pelo ID
    getById: (id, callback) => {
        const query = "SELECT * FROM veiculos WHERE id = ?";
        db.query(query, [id], callback);
    },

    // busca os veículos associados a um motorista específico
    getByMotorista: (motorista_id, callback) => {
        const query = "SELECT * FROM veiculos WHERE motorista_id = ?";
        db.query(query, [motorista_id], callback);
    },

    // deleta um veículo pelo ID
    deleteById: (id, callback) => {
        const query = "DELETE FROM veiculos WHERE id = ?";
        db.query(query, [id], callback);
    }
};

module.exports = Veiculo;
