const Multa =require('.../models/multaModel');

exports.createMulta = (req, res) => {
    const {data, valor, descricao, pontos, motorista_id} =req.body;

    // validação dos campos obrigatórios
    if (!data || !valor || !descricao || !pontos || !motorista_id){
        return res.status(400).json({ erro: "todos os campos são obrigatórios"});
    }
    const novaMulta ={data, valor, pontos, descricao, motorista_id};

    Multa.create(novaMulta, (err, result) => {
        if (err) {
            //erro interno
            return res.status(500).json({erro: "erro ao cadastrar multa"});
        }
        // em caso de sucesso apresenta o id gerado e informações da multa
        res.status(201).json({ mensagem: "multa cadastrada com sucesso",
            id: result.insertId,
            multa: novaMulta
        });
    });

}
// função de buscar multas pelo ID
exports.getMultaById = (req, res) => {
    const { id } = req.params;
    Multa.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar multa" });
        }
        if (results.length === 0) {
            return res.status(404).json({ erro: "Multa não encontrada" });
        }
        res.status(200).json(results[0]);
    });
};

// função para obter todas as multas
exports.getAllMultas = (req, res) => {
    Multa.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar multas" });
        }
        res.status(200).json(results);
    });
};
//função encontra multa por motorista
exports.getMultasByMotorista = (req, res) => {
    const { motorista_id } = req.params;
    Multa.getByMotorista(motorista_id, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar multas do motorista" });
        }
        res.status(200).json(results);
    });
};