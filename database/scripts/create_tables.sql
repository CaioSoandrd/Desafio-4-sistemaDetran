-- Tabela Proprietário
CREATE TABLE Proprietario (
    cpf VARCHAR(11) PRIMARY KEY,  -- CPF como chave primária
    data_nascimento DATE NOT NULL,
    sexo CHAR(1) NOT NULL,        -- 'M' para masculino, 'F' para feminino
    proprietario_nome VARCHAR(100) NOT NULL
);

-- Tabela Veículo
CREATE TABLE Veiculo (
    placa VARCHAR(7) PRIMARY KEY,  -- Placa como chave primária
    renavam VARCHAR(11) NOT NULL UNIQUE,
    ano_fabricacao INT NOT NULL,
    cor VARCHAR(50) NOT NULL,
    chassi VARCHAR(17) NOT NULL UNIQUE,
    quantidade_passageiros INT NOT NULL,
    status VARCHAR(50) NOT NULL,   -- Ex: 'Ativo', 'Inativo', 'Roubado'
    cpf_proprietario VARCHAR(11) NOT NULL,
    FOREIGN KEY (cpf_proprietario) REFERENCES Proprietario(cpf)
);

-- Tabela Multa
CREATE TABLE Multa (
    idInfracao INT PRIMARY KEY AUTO_INCREMENT,  -- ID autoincrementado
    velocidade_identificada INT NOT NULL,
    data_hora DATETIME NOT NULL,               -- Data e hora da infração
    placa_veiculo VARCHAR(7) NOT NULL,
    FOREIGN KEY (placa_veiculo) REFERENCES Veiculo(placa)
);