USE detranDB;

-- Consultar todos os proprietários
SELECT * FROM Proprietario;

-- Consultar todos os veículos
SELECT * FROM Veiculo;

-- Consultar todas as multas
SELECT * FROM Multa;

-- Consultar todas as multas de um determinado veículo
SELECT * FROM Multa WHERE placa_veiculo = 'ABC1234';

-- Consultar todos os veículos de um determinado proprietário
SELECT * FROM Veiculo WHERE cpf_proprietario = '12345678901';