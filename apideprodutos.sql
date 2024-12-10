CREATE DATABASE produto;
USE produto;

CREATE TABLE produto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  quantidade INT NOT NULL,
  preco DECIMAL(10, 2) NOT NULL
);


INSERT INTO produtos (nome, quantidade, preco) VALUES
('Celular', 50, 1200.00),
('Notebook', 30, 2500.00),
('Impressora', 20, 800.00);
