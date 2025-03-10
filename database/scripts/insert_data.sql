USE detranDB;

-- Inserir dados na tabela Proprietário
INSERT INTO Proprietario (cpf, data_nascimento, sexo, proprietario_nome) VALUES
('12345678901', '1980-05-15', 'M', 'João Silva'),
('23456789012', '1990-08-20', 'F', 'Maria Oliveira'),
('34567890123', '1975-03-10', 'M', 'Carlos Souza'),
('45678901234', '1985-11-25', 'F', 'Ana Costa'),
('56789012345', '1995-07-01', 'M', 'Pedro Rocha');

-- Inserir dados na tabela Veículo
INSERT INTO Veiculo (placa, renavam, ano_fabricacao, cor, chassi, quantidade_passageiros, status, cpf_proprietario) VALUES
('ABC1234', '12345678901', 2010, 'Preto', '9BWZZZ377VT004251', 5, 'Ativo', '12345678901'),
('DEF5678', '23456789012', 2015, 'Branco', '9BWZZZ377VT004252', 5, 'Ativo', '23456789012'),
('GHI9012', '34567890123', 2020, 'Vermelho', '9BWZZZ377VT004253', 5, 'Ativo', '34567890123'),
('JKL3456', '45678901234', 2018, 'Azul', '9BWZZZ377VT004254', 5, 'Ativo', '45678901234'),
('MNO7890', '56789012345', 2019, 'Verde', '9BWZZZ377VT004255', 5, 'Ativo', '56789012345');

-- Inserir dados na tabela Multa
INSERT INTO Multa (velocidade_identificada, data_hora, placa_veiculo) VALUES
(80, '2025-03-01 08:30:00', 'ABC1234'),
(NULL, '2025-03-02 09:45:00', 'DEF5678'),
(NULL, '2025-03-03 10:15:00', 'GHI9012'),
(NULL, '2025-03-04 11:00:00', 'JKL3456'),
(60, '2025-03-05 12:30:00', 'MNO7890');