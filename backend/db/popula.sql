USE detran;

-- --

INSERT INTO motoristas (nome, cpf, pontos) VALUES
('João Silva', '123.456.789-01', 5),
('Maria Souza', '234.567.890-12', 9),
('Carlos Souza', '345.678.901-23', 12),
('Ana Costa', '456.789.012-34', 3),
('Pedro Santos', '567.890.123-45', 7),
('Fernanda Lima', '678.901.234-56', 0),
('Ricardo Pereira', '789.012.345-67', 15),
('Juliana Alves', '890.123.456-78', 2),
('Marcos Rocha', '901.234.567-89', 8),
('Patrícia Gomes', '012.345.678-90', 0),
('Lucas Martins', '111.222.333-44', 10),
('Camila Ribeiro', '222.333.444-55', 1),
('Gustavo Ferreira', '333.444.555-66', 6),
('Isabela Cunha', '444.555.666-77', 0),
('Rafael Barbosa', '555.666.777-88', 4);


INSERT INTO veiculos (placa, modelo, cor, motorista_id) VALUES
('ABC-1234', 'Fusca', 'Branco', 1),
('DEF-5678', 'Civic', 'Preto', 2),
('MNO-7890', 'Onix', 'Prata', 5),
('PQR-1234', 'Gol', 'Verde', 6),
('STU-5678', 'Palio', 'Amarelo', 7),
('VWX-9012', 'Uno', 'Cinza', 8),
('YZA-3456', 'Ka', 'Azul', 9),
('BCD-7890', 'Sandero', 'Preto', 10),
('EFG-1234', 'Celta', 'Branco', 11),
('HIJ-5678', 'Fiesta', 'Vermelho', 12),
('KLM-9012', 'Fox', 'Prata', 13),
('NOP-3456', 'Fit', 'Verde', 14),
('QRS-7890', 'March', 'Amarelo', 15);



INSERT INTO multas (data, valor, descricao, pontos, motorista_id) VALUES
('2022-01-15', 200.00, 'Excesso de velocidade', 5, 1),
('2023-02-20', 150.00, 'Estacionamento proibido', 3, 2),
('2023-05-12', 500.00, 'Ultrapassagem perigosa', 5, 5),
('2023-06-18', 100.00, 'Conversão proibida', 3, 6),
('2023-07-22', 400.00, 'Bebida e direção', 7, 7),
('2023-08-30', 350.00, 'Uso de celular ao volante', 5, 8),
('2023-09-14', 450.00, 'Sinal vermelho', 7, 9),
('2023-10-25', 600.00, 'Dirigir sem habilitação', 7, 10),
('2023-11-05', 180.00, 'Veículo sem inspeção', 3, 11),
('2023-12-10', 220.00, 'Excesso de passageiros', 4, 12),
('2024-01-15', 280.00, 'Carga mal fixada', 5, 13),
('2024-02-20', 320.00, 'Dirigir sem CNH', 7, 14),
('2024-03-25', 150.00, 'Placa irregular', 3, 15);