-- ============================================
-- BASE DE DATOS RETAIL - SISTEMA DE VENTAS
-- 6 Tablas con 30 registros cada una
-- ============================================

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS retail_db;
USE retail_db;

-- ============================================
-- TABLA 1: CATEGORIAS
-- ============================================
CREATE TABLE Categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre_categoria VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200),
    estado BOOLEAN DEFAULT TRUE
);

INSERT INTO Categorias (nombre_categoria, descripcion, estado) VALUES
('Electrónica', 'Productos electrónicos y tecnología', TRUE),
('Ropa', 'Vestuario y accesorios de moda', TRUE),
('Alimentos', 'Productos alimenticios y bebidas', TRUE),
('Hogar', 'Artículos para el hogar y decoración', TRUE),
('Deportes', 'Equipamiento deportivo y fitness', TRUE),
('Juguetes', 'Juguetes y entretenimiento infantil', TRUE),
('Libros', 'Libros y material de lectura', TRUE),
('Belleza', 'Productos de belleza y cuidado personal', TRUE),
('Herramientas', 'Herramientas y equipos de trabajo', TRUE),
('Mascotas', 'Productos para mascotas', TRUE),
('Música', 'Instrumentos y accesorios musicales', TRUE),
('Automotriz', 'Accesorios para vehículos', TRUE),
('Jardinería', 'Productos para jardín y plantas', TRUE),
('Oficina', 'Artículos de oficina y papelería', TRUE),
('Bebés', 'Productos para bebés y niños pequeños', TRUE),
('Salud', 'Productos de salud y bienestar', TRUE),
('Computación', 'Computadoras y accesorios', TRUE),
('Fotografía', 'Cámaras y equipos fotográficos', TRUE),
('Calzado', 'Zapatos y zapatillas', TRUE),
('Joyería', 'Joyas y accesorios', TRUE),
('Camping', 'Equipos para camping y outdoor', TRUE),
('Videojuegos', 'Consolas y videojuegos', TRUE),
('Arte', 'Material artístico y manualidades', TRUE),
('Coleccionables', 'Artículos de colección', TRUE),
('Relojes', 'Relojes y accesorios', TRUE),
('Películas', 'Películas y series', TRUE),
('Cocina', 'Utensilios y electrodomésticos de cocina', TRUE),
('Limpieza', 'Productos de limpieza', TRUE),
('Muebles', 'Mobiliario para hogar y oficina', TRUE),
('Instrumentos', 'Instrumentos musicales profesionales', TRUE);

-- ============================================
-- TABLA 2: PRODUCTOS
-- ============================================
CREATE TABLE Productos (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    id_categoria INT,
    fecha_ingreso DATE,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

INSERT INTO Productos (nombre_producto, descripcion, precio, stock, id_categoria, fecha_ingreso) VALUES
('Samsung Galaxy S23', 'Smartphone 128GB', 599990, 25, 1, '2024-01-15'),
('iPhone 15', 'Smartphone Apple 256GB', 899990, 18, 1, '2024-01-20'),
('Notebook HP Pavilion', 'Laptop 16GB RAM, SSD 512GB', 449990, 12, 17, '2024-02-01'),
('Smart TV LG 55"', 'TV 4K UHD Smart', 399990, 8, 1, '2024-02-10'),
('Auriculares Sony WH-1000XM5', 'Cancelación de ruido', 249990, 30, 1, '2024-01-25'),
('Polera Nike Dri-FIT', 'Polera deportiva hombre', 24990, 50, 2, '2024-03-01'),
('Zapatillas Adidas Ultraboost', 'Running shoes', 89990, 35, 19, '2024-03-05'),
('Jeans Levi''s 501', 'Jeans clásicos', 44990, 40, 2, '2024-02-15'),
('Cafetera Nespresso', 'Cafetera de cápsulas', 129990, 15, 27, '2024-01-10'),
('Arroz Tucapel 1kg', 'Arroz grado 1', 1290, 200, 3, '2024-03-10'),
('Aceite Vegetal 1L', 'Aceite comestible', 2490, 150, 3, '2024-03-12'),
('Sofá 3 cuerpos', 'Sofá moderno gris', 299990, 5, 29, '2024-02-20'),
('Mesa de comedor', 'Mesa 6 personas madera', 179990, 8, 29, '2024-02-22'),
('Bicicleta MTB', 'Mountain bike aluminio', 249990, 10, 5, '2024-01-30'),
('Balón fútbol Nike', 'Balón profesional', 19990, 45, 5, '2024-03-01'),
('LEGO Star Wars', 'Set construcción 500 piezas', 49990, 28, 6, '2024-02-05'),
('Muñeca Barbie', 'Muñeca con accesorios', 14990, 60, 6, '2024-02-08'),
('Harry Potter colección', 'Set 7 libros', 89990, 20, 7, '2024-01-05'),
('Shampoo Pantene 400ml', 'Shampoo reparación', 3990, 80, 8, '2024-03-15'),
('Crema facial Nivea', 'Crema hidratante', 5990, 70, 8, '2024-03-16'),
('Taladro Black & Decker', 'Taladro percutor 600W', 39990, 12, 9, '2024-02-25'),
('Comida perro Pedigree 15kg', 'Alimento para perros', 29990, 35, 10, '2024-03-08'),
('Guitarra acústica Yamaha', 'Guitarra para principiantes', 89990, 8, 11, '2024-01-18'),
('Neumáticos Michelin R15', 'Set 4 neumáticos', 159990, 20, 12, '2024-02-28'),
('Kit jardinería', 'Set herramientas jardín', 24990, 25, 13, '2024-03-05'),
('Cuaderno universitario', 'Pack 5 cuadernos', 4990, 100, 14, '2024-03-01'),
('Coche bebé Infanti', 'Coche paseo 3 posiciones', 129990, 10, 15, '2024-02-12'),
('Monitor Samsung 27"', 'Monitor Full HD', 149990, 15, 17, '2024-01-28'),
('Cámara Canon EOS M50', 'Cámara mirrorless', 499990, 6, 18, '2024-01-22'),
('PlayStation 5', 'Consola videojuegos', 549990, 12, 22, '2024-02-01');

-- ============================================
-- TABLA 3: CLIENTES
-- ============================================
CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    rut VARCHAR(12) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    telefono VARCHAR(15),
    direccion VARCHAR(200),
    ciudad VARCHAR(50),
    fecha_registro DATE
);

INSERT INTO Clientes (rut, nombre, apellido, email, telefono, direccion, ciudad, fecha_registro) VALUES
('12345678-9', 'Juan', 'Pérez', 'juan.perez@email.com', '+56912345678', 'Av. Libertador 1234', 'Santiago', '2023-01-15'),
('23456789-0', 'María', 'González', 'maria.gonzalez@email.com', '+56923456789', 'Calle Principal 567', 'Valparaíso', '2023-02-20'),
('34567890-1', 'Carlos', 'Rodríguez', 'carlos.rodriguez@email.com', '+56934567890', 'Pasaje Los Aromos 89', 'Concepción', '2023-03-10'),
('45678901-2', 'Ana', 'Martínez', 'ana.martinez@email.com', '+56945678901', 'Av. Brasil 2345', 'Viña del Mar', '2023-04-05'),
('56789012-3', 'Pedro', 'López', 'pedro.lopez@email.com', '+56956789012', 'Calle Larga 678', 'La Serena', '2023-05-12'),
('67890123-4', 'Laura', 'Fernández', 'laura.fernandez@email.com', '+56967890123', 'Los Pinos 456', 'Temuco', '2023-06-18'),
('78901234-5', 'Diego', 'Sánchez', 'diego.sanchez@email.com', '+56978901234', 'Av. Colón 789', 'Antofagasta', '2023-07-22'),
('89012345-6', 'Carolina', 'Ramírez', 'carolina.ramirez@email.com', '+56989012345', 'Paseo Huérfanos 1111', 'Santiago', '2023-08-30'),
('90123456-7', 'Andrés', 'Torres', 'andres.torres@email.com', '+56990123456', 'Av. Providencia 2222', 'Santiago', '2023-09-14'),
('01234567-8', 'Valentina', 'Flores', 'valentina.flores@email.com', '+56901234567', 'Calle Nueva 333', 'Rancagua', '2023-10-20'),
('11111111-1', 'Roberto', 'Muñoz', 'roberto.munoz@email.com', '+56911111111', 'Los Carrera 444', 'Talca', '2023-11-05'),
('22222222-2', 'Francisca', 'Vargas', 'francisca.vargas@email.com', '+56922222222', 'Bulnes 555', 'Chillán', '2023-12-10'),
('33333333-3', 'Sebastián', 'Castillo', 'sebastian.castillo@email.com', '+56933333333', 'Av. España 666', 'Valdivia', '2024-01-08'),
('44444444-4', 'Camila', 'Reyes', 'camila.reyes@email.com', '+56944444444', 'Freire 777', 'Osorno', '2024-01-15'),
('55555555-5', 'Felipe', 'Herrera', 'felipe.herrera@email.com', '+56955555555', 'Maipú 888', 'Puerto Montt', '2024-01-22'),
('66666666-6', 'Javiera', 'Pinto', 'javiera.pinto@email.com', '+56966666666', 'Cochrane 999', 'Coyhaique', '2024-02-01'),
('77777777-7', 'Matías', 'Rojas', 'matias.rojas@email.com', '+56977777777', 'Baquedano 1010', 'Iquique', '2024-02-10'),
('88888888-8', 'Sofía', 'Morales', 'sofia.morales@email.com', '+56988888888', 'Arturo Prat 1212', 'Copiapó', '2024-02-18'),
('99999999-9', 'Tomás', 'Núñez', 'tomas.nunez@email.com', '+56999999999', 'San Martín 1313', 'Arica', '2024-02-25'),
('10101010-1', 'Isidora', 'Gutiérrez', 'isidora.gutierrez@email.com', '+56910101010', 'O''Higgins 1414', 'Curicó', '2024-03-01'),
('20202020-2', 'Benjamín', 'Silva', 'benjamin.silva@email.com', '+56920202020', 'Esmeralda 1515', 'Los Ángeles', '2024-03-05'),
('30303030-3', 'Martina', 'Cortés', 'martina.cortes@email.com', '+56930303030', 'Caupolicán 1616', 'Angol', '2024-03-10'),
('40404040-4', 'Lucas', 'Espinoza', 'lucas.espinoza@email.com', '+56940404040', 'Blanco Encalada 1717', 'Quilpué', '2024-03-12'),
('50505050-5', 'Emilia', 'Contreras', 'emilia.contreras@email.com', '+56950505050', 'Zenteno 1818', 'San Antonio', '2024-03-15'),
('60606060-6', 'Maximiliano', 'Medina', 'maximiliano.medina@email.com', '+56960606060', 'Lautaro 1919', 'Puerto Varas', '2024-03-18'),
('70707070-7', 'Agustina', 'Carrasco', 'agustina.carrasco@email.com', '+56970707070', 'Montt 2020', 'Castro', '2024-03-20'),
('80808080-8', 'Vicente', 'Bravo', 'vicente.bravo@email.com', '+56980808080', 'Errázuriz 2121', 'Punta Arenas', '2024-03-22'),
('90909090-9', 'Catalina', 'Vega', 'catalina.vega@email.com', '+56990909090', 'Serrano 2222', 'Calama', '2024-03-24'),
('15151515-1', 'Ignacio', 'Alarcón', 'ignacio.alarcon@email.com', '+56915151515', 'Thompson 2323', 'Ovalle', '2024-03-26'),
('25252525-2', 'Antonella', 'Figueroa', 'antonella.figueroa@email.com', '+56925252525', 'Yungay 2424', 'Linares', '2024-03-28');

-- ============================================
-- TABLA 4: EMPLEADOS
-- ============================================
CREATE TABLE Empleados (
    id_empleado INT PRIMARY KEY AUTO_INCREMENT,
    rut VARCHAR(12) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10,2),
    email VARCHAR(100),
    telefono VARCHAR(15),
    fecha_contratacion DATE
);

INSERT INTO Empleados (rut, nombre, apellido, cargo, salario, email, telefono, fecha_contratacion) VALUES
('16789012-3', 'Ricardo', 'Bustamante', 'Gerente General', 2500000, 'ricardo.bustamante@retail.cl', '+56916789012', '2020-01-15'),
('17890123-4', 'Patricia', 'Navarro', 'Gerente de Ventas', 1800000, 'patricia.navarro@retail.cl', '+56917890123', '2020-03-20'),
('18901234-5', 'Mauricio', 'Lagos', 'Supervisor', 1200000, 'mauricio.lagos@retail.cl', '+56918901234', '2021-05-10'),
('19012345-6', 'Andrea', 'Campos', 'Vendedor Senior', 800000, 'andrea.campos@retail.cl', '+56919012345', '2021-07-15'),
('20123456-7', 'Claudio', 'Riquelme', 'Vendedor', 650000, 'claudio.riquelme@retail.cl', '+56920123456', '2021-09-01'),
('21234567-8', 'Daniela', 'Sepúlveda', 'Vendedora', 650000, 'daniela.sepulveda@retail.cl', '+56921234567', '2021-11-20'),
('22345678-9', 'Rodrigo', 'Valenzuela', 'Vendedor', 650000, 'rodrigo.valenzuela@retail.cl', '+56922345678', '2022-01-10'),
('23456780-0', 'Constanza', 'Ibáñez', 'Vendedora', 650000, 'constanza.ibanez@retail.cl', '+56923456780', '2022-03-15'),
('24567801-1', 'Guillermo', 'Parra', 'Cajero', 550000, 'guillermo.parra@retail.cl', '+56924567801', '2022-05-01'),
('25678012-2', 'Pamela', 'Fuentes', 'Cajera', 550000, 'pamela.fuentes@retail.cl', '+56925678012', '2022-06-20'),
('26789023-3', 'Eduardo', 'Orellana', 'Cajero', 550000, 'eduardo.orellana@retail.cl', '+56926789023', '2022-08-10'),
('27890134-4', 'Nicole', 'Garrido', 'Cajera', 550000, 'nicole.garrido@retail.cl', '+56927890134', '2022-10-05'),
('28901245-5', 'Álvaro', 'Vera', 'Bodeguero', 600000, 'alvaro.vera@retail.cl', '+56928901245', '2022-12-01'),
('29012356-6', 'Macarena', 'Osorio', 'Bodeguera', 600000, 'macarena.osorio@retail.cl', '+56929012356', '2023-01-15'),
('30123467-7', 'Cristián', 'Acuña', 'Contador', 1500000, 'cristian.acuna@retail.cl', '+56930123467', '2020-02-01'),
('31234578-8', 'Bárbara', 'Santander', 'Asistente Contable', 900000, 'barbara.santander@retail.cl', '+56931234578', '2021-04-10'),
('32345689-9', 'Gonzalo', 'Maldonado', 'Jefe de RRHH', 1600000, 'gonzalo.maldonado@retail.cl', '+56932345689', '2020-06-15'),
('33456790-0', 'Lorena', 'Cárdenas', 'Encargada Marketing', 1400000, 'lorena.cardenas@retail.cl', '+56933456790', '2021-08-20'),
('34567801-1', 'Pablo', 'Araya', 'Community Manager', 950000, 'pablo.araya@retail.cl', '+56934567801', '2022-02-15'),
('35678912-2', 'Claudia', 'Pacheco', 'Diseñadora Gráfica', 1100000, 'claudia.pacheco@retail.cl', '+56935678912', '2022-04-01'),
('36789023-3', 'Hernán', 'Salinas', 'Analista TI', 1300000, 'hernan.salinas@retail.cl', '+56936789023', '2020-09-10'),
('37890134-4', 'Marcela', 'Arias', 'Soporte Técnico', 850000, 'marcela.arias@retail.cl', '+56937890134', '2021-11-05'),
('38901245-5', 'Patricio', 'Soto', 'Guardia de Seguridad', 500000, 'patricio.soto@retail.cl', '+56938901245', '2022-01-20'),
('39012356-6', 'Roxana', 'Meza', 'Guardia de Seguridad', 500000, 'roxana.meza@retail.cl', '+56939012356', '2022-03-25'),
('40123467-7', 'Esteban', 'Zapata', 'Supervisor Bodega', 1000000, 'esteban.zapata@retail.cl', '+56940123467', '2021-02-15'),
('41234578-8', 'Cecilia', 'Guerrero', 'Asistente Gerencia', 950000, 'cecilia.guerrero@retail.cl', '+56941234578', '2021-06-30'),
('42345689-9', 'Fernando', 'Miranda', 'Vendedor', 650000, 'fernando.miranda@retail.cl', '+56942345689', '2023-02-10'),
('43456790-0', 'Paulina', 'Henríquez', 'Vendedora', 650000, 'paulina.henriquez@retail.cl', '+56943456790', '2023-04-15'),
('44567801-1', 'Mario', 'Leiva', 'Cajero', 550000, 'mario.leiva@retail.cl', '+56944567801', '2023-06-20'),
('45678912-2', 'Gloria', 'Peña', 'Cajera', 550000, 'gloria.pena@retail.cl', '+56945678912', '2023-08-25');

-- ============================================
-- TABLA 5: VENTAS
-- ============================================
CREATE TABLE Ventas (
    id_venta INT PRIMARY KEY AUTO_INCREMENT,
    fecha_venta DATETIME NOT NULL,
    id_cliente INT,
    id_empleado INT,
    total DECIMAL(10,2) NOT NULL,
    metodo_pago VARCHAR(30),
    estado VARCHAR(20),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_empleado) REFERENCES Empleados(id_empleado)
);

INSERT INTO Ventas (fecha_venta, id_cliente, id_empleado, total, metodo_pago, estado) VALUES
('2024-01-15 10:30:00', 1, 4, 599990.00, 'Tarjeta Crédito', 'Completado'),
('2024-01-16 11:45:00', 2, 5, 149980.00, 'Efectivo', 'Completado'),
('2024-01-17 14:20:00', 3, 6, 449990.00, 'Tarjeta Débito', 'Completado'),
('2024-01-18 09:15:00', 4, 7, 44990.00, 'Transferencia', 'Completado'),
('2024-01-19 16:30:00', 5, 8, 899990.00, 'Tarjeta Crédito', 'Completado'),
('2024-01-20 12:00:00', 6, 4, 249990.00, 'Tarjeta Crédito', 'Completado'),
('2024-01-22 10:45:00', 7, 5, 179980.00, 'Efectivo', 'Completado'),
('2024-01-23 15:30:00', 8, 6, 129990.00, 'Tarjeta Débito', 'Completado'),
('2024-01-25 11:20:00', 9, 7, 549990.00, 'Tarjeta Crédito', 'Completado'),
('2024-01-26 14:00:00', 10, 8, 89990.00, 'Transferencia', 'Completado'),
('2024-02-01 10:30:00', 11, 4, 399990.00, 'Tarjeta Crédito', 'Completado'),
('2024-02-03 13:15:00', 12, 5, 64980.00, 'Efectivo', 'Completado'),
('2024-02-05 16:45:00', 13, 6, 249990.00, 'Tarjeta Débito', 'Completado'),
('2024-02-08 09:30:00', 14, 7, 479980.00, 'Tarjeta Crédito', 'Completado'),
('2024-02-10 11:00:00', 15, 8, 299990.00, 'Transferencia', 'Completado'),
('2024-02-12 14:30:00', 16, 4, 89990.00, 'Efectivo', 'Completado'),
('2024-02-15 10:15:00', 17, 5, 159990.00, 'Tarjeta Crédito', 'Completado'),
('2024-02-18 12:45:00', 18, 6, 499990.00, 'Tarjeta Débito', 'Completado'),
('2024-02-20 15:20:00', 19, 7, 39990.00, 'Efectivo', 'Completado'),
('2024-02-22 10:00:00', 20, 8, 149990.00, 'Transferencia', 'Completado'),
('2024-02-25 13:30:00', 21, 4, 9980.00, 'Efectivo', 'Completado'),
('2024-02-28 11:15:00', 22, 5, 29990.00, 'Tarjeta Débito', 'Completado'),
('2024-03-01 14:00:00', 23, 6, 24990.00, 'Tarjeta Crédito', 'Completado'),
('2024-03-05 10:45:00', 24, 7, 129990.00, 'Efectivo', 'Completado'),
('2024-03-08 12:30:00', 25, 8, 49990.00, 'Transferencia', 'Completado'),
('2024-03-10 15:15:00', 26, 4, 19980.00, 'Tarjeta Crédito', 'Completado'),
('2024-03-12 09:45:00', 27, 5, 179990.00, 'Tarjeta Débito', 'Completado'),
('2024-03-15 13:00:00', 28, 6, 599990.00, 'Tarjeta Crédito', 'Completado'),
('2024-03-18 11:30:00', 29, 7, 14990.00, 'Efectivo', 'Completado'),
('2024-03-20 14:45:00', 30, 8, 89990.00, 'Transferencia', 'Completado');

-- ============================================
-- TABLA 6: DETALLE_VENTAS
-- ============================================
CREATE TABLE Detalle_Ventas (
    id_detalle INT PRIMARY KEY AUTO_INCREMENT,
    id_venta INT,
    id_producto INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_venta) REFERENCES Ventas(id_venta),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

INSERT INTO Detalle_Ventas (id_venta, id_producto, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 1, 599990.00, 599990.00),
(2, 19, 3, 3990.00, 11970.00),
(2, 20, 2, 5990.00, 11980.00),
(2, 26, 1, 4990.00, 4990.00),
(2, 10, 100, 1290.00, 129000.00),
(3, 3, 1, 449990.00, 449990.00),
(4, 8, 1, 44990.00, 44990.00),
(5, 2, 1, 899990.00, 899990.00),
(6, 5, 1, 249990.00, 249990.00),
(7, 6, 5, 24990.00, 124950.00),
(7, 15, 2, 19990.00, 39980.00),
(7, 18, 1, 14990.00, 14990.00),
(8, 9, 1, 129990.00, 129990.00),
(9, 30, 1, 549990.00, 549990.00),
(10, 7, 1, 89990.00, 89990.00),
(11, 4, 1, 399990.00, 399990.00),
(12, 16, 1, 49990.00, 49990.00),
(12, 17, 1, 14990.00, 14990.00),
(13, 14, 1, 249990.00, 249990.00),
(14, 12, 1, 299990.00, 299990.00),
(14, 13, 1, 179990.00, 179990.00),
(15, 12, 1, 299990.00, 299990.00),
(16, 18, 1, 89990.00, 89990.00),
(17, 24, 1, 159990.00, 159990.00),
(18, 29, 1, 499990.00, 499990.00),
(19, 21, 1, 39990.00, 39990.00),
(20, 28, 1, 149990.00, 149990.00),
(21, 19, 1, 3990.00, 3990.00),
(21, 11, 2, 2490.00, 4980.00),
(21, 10, 1, 1290.00, 1290.00),
(22, 22, 1, 29990.00, 29990.00),
(23, 6, 1, 24990.00, 24990.00),
(24, 27, 1, 129990.00, 129990.00),
(25, 16, 1, 49990.00, 49990.00),
(26, 15, 2, 19990.00, 39980.00),
(27, 13, 1, 179990.00, 179990.00),
(28, 1, 1, 599990.00, 599990.00),
(29, 17, 1, 14990.00, 14990.00),
(30, 23, 1, 89990.00, 89990.00);