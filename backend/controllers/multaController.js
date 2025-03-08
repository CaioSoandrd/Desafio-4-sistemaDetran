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