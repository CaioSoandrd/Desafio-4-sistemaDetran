const Motorista = require('../models/motoristaModel');

// Validação de formato de CPF
function validarCPF(cpf) {
    const regexCPF = /^(?:\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;
    return regexCPF.test(cpf);
}

// Cadastrar motorista
exports.createMotorista = (req, res) => {
    const { nome, cpf, pontos } = req.body;

    if (!nome || !cpf) {
        return res.status(400).json({ erro: "Nome e CPF são obrigatórios" });
    }

    if (!validarCPF(cpf)) {
        return res.status(400).json({ erro: "CPF inválido" });
    }

    const motorista = { nome, cpf, pontos: pontos || 0 };

    Motorista.create(motorista, (err, result) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao cadastrar motorista" });
        }
        res.status(201).json({
            mensagem: "Motorista cadastrado com sucesso",
            id: result.insertId,
            motorista
        });
    });
};

// Listar todos os motoristas
exports.getAllMotoristas = (req, res) => {
    Motorista.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar motoristas" });
        }
        res.status(200).json(results);
    });
};

// Listar motoristas com pontuação alta (>= 10 pontos)
exports.getHighScoreMotoristas = (req, res) => {
    Motorista.getHighScore((err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar motoristas com pontuação alta" });
        }
        res.status(200).json(results);
    });
};

// Buscar motorista com pontuação alta por CPF
exports.getHighScoreMotoristaByCPF = (req, res) => {
    const { cpf } = req.params;

    if (!validarCPF(cpf)) {
        return res.status(400).json({ erro: "CPF inválido" });
    }

    Motorista.getHighScoreByCPF(cpf, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar motorista" });
        }
        if (results.length === 0) {
            return res.status(404).json({ erro: "Motorista não encontrado ou pontuação insuficiente" });
        }
        res.status(200).json(results[0]);
    });
};

// Buscar motorista por CPF (geral)
exports.getMotoristaByCPF = (req, res) => {
    const { cpf } = req.params;

    if (!cpf || !validarCPF(cpf)) {
        return res.status(400).json({ erro: "CPF inválido" });
    }

    Motorista.getByCPF(cpf, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar motorista" });
        }
        if (results.length === 0) {
            return res.status(404).json({ erro: "Motorista não encontrado" });
        }
        res.status(200).json(results[0]);
    });
};