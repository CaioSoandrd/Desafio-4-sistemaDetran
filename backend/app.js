const express = require('express');
const app = express();

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


module.exports = app;