INSERT INTO EMPRESA (emp_nome, emp_cnpj, emp_cel, emp_end) VALUES
('Tech Solutions', '12.345.678/0001-90', '11999999999', 'Rua das Flores, 123'),
('Global Trade', '98.765.432/0001-55', '11888888888', 'Av. Central, 456');
INSERT INTO CONTATO (emp_id, cont_tipo, cont_desc) VALUES
(1, 'Email', 'contato@techsolutions.com'),
(2, 'Telefone', '11888888888');
INSERT INTO CATEGORIA (cat_nome, cat_desc) VALUES
('Eletrônicos', 'Produtos eletrônicos em geral'),
('Vestuário', 'Roupas e acessórios');
INSERT INTO PRODUTOS (emp_id, cat_id, prod_nome, prod_desc, prod_est, prod_preco) VALUES
(1, 1, 'Notebook X1', 'Notebook de última geração', 10, 4500.00),
(2, 2, 'Camiseta Polo', 'Camiseta de algodão', 50, 79.90);
INSERT INTO USUARIOS (emp_id, usu_nome, usu_email, usu_senha) VALUES
(1, 'João Silva', 'joao@techsolutions.com', 'senha123'),
(2, 'Maria Souza', 'maria@globaltrade.com', 'senha456');
INSERT INTO CLIENTE (emp_id, cli_nome, cli_email, cli_cel, cli_end) VALUES
(1, 'Carlos Lima', 'carlos@gmail.com', '11988887777', 'Rua A, 111'),
(2, 'Ana Paula', 'ana@gmail.com', '11977776666', 'Rua B, 222');
INSERT INTO ROTAS (cli_id, rot_des, rot_dist, rot_data) VALUES
(1, 'Entrega zona norte', 12.5, '2025-04-10'),
(2, 'Entrega zona sul', 18.7, '2025-04-11');
INSERT INTO PEDIDO (cli_id, ped_data, ped_status, ped_valor_total) VALUES
(1, '2025-04-10', 'Pendente', 4579.90),
(2, '2025-04-11', 'Pago', 79.90);
INSERT INTO MENSAGEM (ped_id, mens_data_envio, mens_status) VALUES
(1, 20250410, 'Enviado'),
(2, 20250411, 'Lido');
INSERT INTO PEDIDO_PRODUTO (prod_id, ped_id, pedpro_preco_unit, pedpro_quant) VALUES
(1, 1, 4500.00, 1),
(2, 2, 79.90, 1);
INSERT INTO PAGAMENTO (ped_id, pag_metodo, pag_data, pag_status) VALUES
(1, 'Cartão de Crédito', '2025-04-10', 'Aguardando'),
(2, 'Pix', '2025-04-11', 'Confirmado');