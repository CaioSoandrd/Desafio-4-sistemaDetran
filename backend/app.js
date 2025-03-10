const express = require('express');
const app = express();


// middlewares básicos
app.use(express.json()); // para parsing de JSON
app.use(express.urlencoded({ extended: false })); // para parsing de formulários

// importação das rotas com caminhos relativos corretos
const motoristasRouter = require('./routes/motoristas');
const multasRouter = require('./routes/multas');
const veiculosRouter = require('./routes/veiculos');

// configuração das rotas com prefixo /api
app.use('/api/motoristas', motoristasRouter);
app.use('/api/multas', multasRouter);
app.use('/api/veiculos', veiculosRouter);

// tratamento de rotas não encontradas
app.use((req, res, next) => {
    res.status(404).json({ erro: 'Rota não encontrada' });
});

// tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ erro: 'Erro interno do servidor' });
});

// configuração da porta
const PORT = process.env.PORT || 3001;

// inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


module.exports = app;