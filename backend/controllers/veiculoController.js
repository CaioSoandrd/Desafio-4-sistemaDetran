const Veiculo = require('../models/veiculoModel');

// Função para cadastrar um novo veículo
exports.createVeiculo = (req, res) => {
    // extração dos dados do veículo do corpo da requisição
    const { placa, modelo, cor, motorista_id } = req.body;

    // validação: verifica se todos os campos obrigatórios foram preenchidos
    if (!placa || !modelo || !cor || !motorista_id) {
        return res.status(400).json({ erro: "todos os campos são obrigatórios" });
    }

    // cria o objeto com os dados do veículo
    const novoVeiculo = { placa, modelo, cor, motorista_id };

    // chama a função 'create' do modelo para inserir o veículo no banco de dados
    Veiculo.create(novoVeiculo, (err, result) => {
        if (err) {
            // Em caso de erro interno
            return res.status(500).json({ erro: "erro ao cadastrar veículo" });
        }
        // se inserido com sucesso retorna status 201
        res.status(201).json({
            mensagem: "veículo cadastrado com sucesso",
            id: result.insertId,
            veiculo: novoVeiculo
        });
    });
};

// função para obter todos os veículos
exports.getAllVeiculos = (req, res) => {
    // chama a função getAll do modelo
    Veiculo.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ erro: "erro ao buscar veículos" });
        }
        // retorna a lista de veículos
        res.status(200).json(results);
    });
};

// Função para buscar um veículo pelo ID
exports.getVeiculoById = (req, res) => {
    // extrai o ID do veículo dos parâmetros da URL
    const { id } = req.params;

    // chama a função getById do modelo, que executa um SELECT filtrando pelo ID
    Veiculo.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "erro ao buscar veículo" });
        }
        // se nenhum veículo for encontrado, retorna status 404
        if (results.length === 0) {
            return res.status(404).json({ erro: "veículo não encontrado" });
        }
        // retorna o veículo encontrado
        res.status(200).json(results[0]);
    });
};
//função para buscar veiculos por motorista especifico
exports.getVeiculosByMotorista = (req, res) => {
    const { motorista_id } = req.params;
    Veiculo.getByMotorista(motorista_id, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "erro ao buscar veiculos do motorista" });
        }
        res.status(200).json(results);
    });
};

// função para deletar um veículo pelo ID
exports.deleteVeiculoById = (req, res) => {
    const { id } = req.params;
    Veiculo.deleteById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ erro: "erro ao deletar veiculo" });
        }

        res.status(200).json({ mensagem: "veículo deletado com sucesso" });
    });
};

