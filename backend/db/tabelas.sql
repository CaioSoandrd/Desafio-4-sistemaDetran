CREATE DATABASE detran;

USE detran;

CREATE TABLE motoristas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    pontos INT DEFAULT 0
);

CREATE TABLE veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL UNIQUE,
    modelo VARCHAR(255) NOT NULL,
    cor VARCHAR(50) NOT NULL,
    motorista_id INT NOT NULL,
    FOREIGN KEY (motorista_id) REFERENCES motoristas(id)
);

CREATE TABLE multas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    descricao TEXT NOT NULL,
    pontos INT NOT NULL,
    motorista_id INT NOT NULL,
    FOREIGN KEY (motorista_id) REFERENCES motoristas(id)
);