const express = require('express');
const cors = require('cors')

const app = express();
const PORT = 5001;

app.use(cors());

app.use(express.json());

let motoristas = [
  { id: 1, nome: 'João', pontos: 12 },
  { id: 2, nome: 'Maria', pontos: 8 }
];

let veiculos = [
  { id: 1, motoristaId: 1, modelo: "Fiat Uno" },
  { id: 2, motoristaId: 1, modelo: "VW Gol" },
  { id: 3, motoristaId: 2, modelo: "Ford Ka" }
];

let multas = [
  { id: 1, motoristaId: 1, descricao: "Excesso de velocidade", valor: 150.00 },
  { id: 2, motoristaId: 2, descricao: "Estacionamento proibido", valor: 80.00 }
];

app.post('/motoristas', (req, res) => {
  const { nome, pontos } = req.body;
  const novoMotorista = {
    id: motoristas.length + 1,
    nome,
    pontos: pontos || 0
  };
  motoristas.push(novoMotorista);
  res.status(201).json(noovoMotorista);
});

app.get('/motoristas', (req, res) => {
  res.json(motoristas);
});

app.get('/motoristas/:id/veiculos', (req, res) => {
  const motoristaId = parseInt(req.params.id);
  const veiculosDoMotorista = veiculos.filter(veiculo => veiculo.motoristaId === motoristaId);
  res.json(veiculosDoMotorista);
});

app.get('/motoristas/pontuacao', (req, res) => {
  const min = req.query.min ? parseInt(req.query.min) : 10;
  const motoristaComPontuacao = motoristas.filter(motorista => motorista.pontos >= min);
  res.json(motoristasComPontuacao);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

