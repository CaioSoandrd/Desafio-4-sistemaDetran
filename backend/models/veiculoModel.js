const db = require('../config/mysql');

// define o objeto Veiculo com os métodos de acesso ao banco
const Veiculo = {
    // cria um novo veículo na tabela 'Veiculo'
    create: (veiculo, callback) => {
        const query = "INSERT INTO Veiculo (placa, ano_fabricacao, cor, chassi, quantidade_passageiros, status, cpf_proprietario) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(query, [veiculo.placa, veiculo.ano_fabricacao, veiculo.cor, veiculo.chassi, veiculo.quantidade_passageiros, veiculo.status, veiculo.cpf_proprietario], callback);
    },

    // busca todos os veículos cadastrados
    getAll: (callback) => {
        const query = "SELECT * FROM Veiculo";
        db.query(query, callback);
    },

    // busca um veículo específico pelo ID
    getById: (id, callback) => {
        const query = "SELECT * FROM Veiculo WHERE placa = ?";
        db.query(query, [id], callback);
    },

    // busca os veículos associados a um proprietário específico
    getByProprietario: (cpf_proprietario, callback) => {
        const query = "SELECT * FROM Veiculo WHERE cpf_proprietario = ?";
        db.query(query, [cpf_proprietario], callback);
    },

    // deleta um veículo pelo ID
    deleteById: (id, callback) => {
        const query = "DELETE FROM Veiculo WHERE placa = ?";
        db.query(query, [id], callback);
    }
};

module.exports = Veiculo;