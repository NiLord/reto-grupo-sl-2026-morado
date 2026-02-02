create database MaquinaExpendedora;
use MaquinaExpendedora;

create table maquina (
	id_maquina int Not Null,
	Constraint PK_id_maquina Primary Key (id_maquina)
);

create table producto (
	id_producto int not null,
    nombre varchar(60) not null,
    precio decimal(10,2) not null,
    cantidad int not null,
    id_maquina int Not Null,
    Constraint PK_id_producto Primary Key(id_producto),
    Constraint FK_producto_id_maquina Foreign key (id_maquina) References maquina(id_maquina)
);

create table monedero (
	id_monedero int not null,
    denominacion decimal(10,2) Not Null,
    tipo bool Not null,
    cantidad int Not null,
    id_maquina int not null,
    constraint PK_id_monedero Primary key(id_monedero),
    constraint FK_monedero_id_maquina foreign key (id_maquina) references maquina(id_maquina) 
);

insert into maquina values(
1
);

Select * from maquina;

INSERT INTO producto (id_producto, nombre, precio, cantidad, id_maquina) VALUES
(1, 'Coca Cola 600ml', 1.50, 50, 1),
(2, 'Pepsi 600ml', 1.25, 50, 1),
(3, 'Agua Mineral', 1.00, 100, 1),
(4, 'Papas Fritas Lay''s', 0.75, 40, 1),
(5, 'Chocolate Hershey', 1.10, 30, 1),
(6, 'Galletas Oreo', 0.85, 45, 1),
(7, 'Jugo de Naranja', 1.20, 35, 1),
(8, 'Barra Energética', 1.75, 25, 1),
(9, 'M&Ms Mani', 1.30, 40, 1);

select * from producto;

-- Insertamos el dinero (0 = Moneda, 1 = Billete)
INSERT INTO monedero (id_monedero, denominacion, tipo, cantidad, id_maquina) VALUES
(1, 0.05, 0, 200, 1), -- Moneda 5c
(2, 0.10, 0, 200, 1), -- Moneda 10c
(3, 0.25, 0, 150, 1), -- Moneda 25c
(4, 0.50, 0, 100, 1), -- Moneda 50c
(5, 1.00, 1, 50, 1),  -- Billete 1
(6, 5.00, 1, 20, 1),  -- Billete 5
(7, 10.00, 1, 10, 1), -- Billete 10
(8, 20.00, 1, 5, 1);  -- Billete 20

Select * from monedero;