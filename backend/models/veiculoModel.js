const db = require('../config/mysql');

// define o objeto Veiculo com os métodos de acesso ao banco
const Veiculo = {
<<<<<<< HEAD
    // cria um novo veículo na tabela 'Veiculo'
    create: (veiculo, callback) => {
        const query = "INSERT INTO Veiculo (placa, ano_fabricacao, cor, chassi, quantidade_passageiros, status, cpf_proprietario) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(query, [veiculo.placa, veiculo.ano_fabricacao, veiculo.cor, veiculo.chassi, veiculo.quantidade_passageiros, veiculo.status, veiculo.cpf_proprietario], callback);
=======
    // cria um novo veículo na tabela 'veiculos'
    create: (veiculo, callback) => {
        const query = "INSERT INTO veiculos (placa, modelo, cor, motorista_id) VALUES (?, ?, ?, ?)";
        db.query(query, [veiculo.placa, veiculo.modelo, veiculo.cor, veiculo.motorista_id], callback);
>>>>>>> temp-branch
    },

    // busca todos os veículos cadastrados
    getAll: (callback) => {
<<<<<<< HEAD
        const query = "SELECT * FROM Veiculo";
=======
        const query = "SELECT * FROM veiculos";
>>>>>>> temp-branch
        db.query(query, callback);
    },

    // busca um veículo específico pelo ID
    getById: (id, callback) => {
<<<<<<< HEAD
        const query = "SELECT * FROM Veiculo WHERE placa = ?";
        db.query(query, [id], callback);
    },

    // busca os veículos associados a um proprietário específico
    getByProprietario: (cpf_proprietario, callback) => {
        const query = "SELECT * FROM Veiculo WHERE cpf_proprietario = ?";
        db.query(query, [cpf_proprietario], callback);
=======
        const query = "SELECT * FROM veiculos WHERE id = ?";
        db.query(query, [id], callback);
    },

    // busca os veículos associados a um motorista específico
    getByMotorista: (motorista_id, callback) => {
        const query = "SELECT * FROM veiculos WHERE motorista_id = ?";
        db.query(query, [motorista_id], callback);
>>>>>>> temp-branch
    },

    // deleta um veículo pelo ID
    deleteById: (id, callback) => {
<<<<<<< HEAD
        const query = "DELETE FROM Veiculo WHERE placa = ?";
=======
        const query = "DELETE FROM veiculos WHERE id = ?";
>>>>>>> temp-branch
        db.query(query, [id], callback);
    }
};

<<<<<<< HEAD
module.exports = Veiculo;
=======
module.exports = Veiculo;
>>>>>>> temp-branch
