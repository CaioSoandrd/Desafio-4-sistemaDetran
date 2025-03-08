const Veiculo =require('../models/veiculoModel');

// Função para cadastrar um novo veículo
exports.createVeiculo = (req, res) => {
    // extração dos dados do veículo do corpo da requisição
    const { placa, modelo, cor, motorista_id } = req.body;

    // validação: verifica se todos os campos obrigatórios foram preenchidos
    if (!placa || !modelo || !cor || !motorista_id) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    // cria o objeto com os dados do veículo
    const novoVeiculo = { placa, modelo, cor, motorista_id };

    // chama a função 'create' do modelo para inserir o veículo no banco de dados
    Veiculo.create(novoVeiculo, (err, result) => {
        if (err) {
            // Em caso de erro interno
            return res.status(500).json({ erro: "Erro ao cadastrar veículo" });
        }
        // se inserido com sucesso retorna status 201
        res.status(201).json({
            mensagem: "Veículo cadastrado com sucesso",
            id: result.insertId,
            veiculo: novoVeiculo
        });
    });
};