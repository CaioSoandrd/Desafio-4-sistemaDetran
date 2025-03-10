const express = require('express');
const app = express();

<<<<<<< HEAD
app.use(express.json()); // Para parsing de JSON
app.use(express.urlencoded({ extended: false })); // Para parsing de formulários (opcional)


const motoristasRouter = require('../../OneDrive/Documentos/GitHub/Desafio-4-sistemaDetran/routes/motoristas');
const multasRouter = require('../../OneDrive/Documentos/GitHub/Desafio-4-sistemaDetran/routes/multas');
const veiculosRouter = require('../../OneDrive/Documentos/GitHub/Desafio-4-sistemaDetran/routes/veiculos');
const testeRouter = require('./routes/teste');

app.use('/motoristas', motoristasRouter);
app.use('/multas', multasRouter);
app.use('/veiculos', veiculosRouter);
app.use('/api', testeRouter); // Usar a rota de teste

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

=======
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
>>>>>>> temp-branch

module.exports = app;