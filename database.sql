-- SQL Server
-- Tipos de datos personalizados (ENUMs)
CREATE TYPE TEMPORALIDAD AS ENUM ('dia', 'semana', 'mes', 'trimestre', 'año');
CREATE TYPE TIPO_PROYECCION AS ENUM ('producto', 'ingrediente', 'ventas', 'utilidad');

-- Tablas
CREATE TABLE ingredientes (
    id INT IDENTITY(1,1) PRIMARY KEY, -- Autoincremental desde 1
    nombre VARCHAR(100),
    descripcion TEXT,
    imagen VARBINARY(MAX), -- Para almacenar datos binarios
    unidad VARCHAR(50) -- Unidad de medida personalizada
);

CREATE TABLE recetas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);

CREATE TABLE unidad_medida (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(50), --ml, gr, unidad, cucharada, tasa
    descripcion TEXT
);

CREATE TABLE ingredientes_recetas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    ingrediente_id INT FOREIGN KEY REFERENCES ingredientes(id),
    receta_id INT FOREIGN KEY REFERENCES recetas(id),
    medida INT FOREIGN KEY REFERENCES unidad_medida(id),
    cantidad NUMERIC(8,2), -- Ajustable según precisión necesaria
    unidad_personalizada VARCHAR(50)
);

CREATE TABLE tasa (
    id INT IDENTITY(1,1) PRIMARY KEY,
    paralelo VARCHAR(50),
    bcv NUMERIC(8,2), -- Ajustable según precisión
    fecha DATETIME
);

CREATE TABLE dimensiones (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(50),
    valor VARCHAR(50)
);

CREATE TABLE proyecciones (
    id INT IDENTITY(1,1) PRIMARY KEY,
    dimension_id INT FOREIGN KEY REFERENCES dimensiones(id),
    fecha_inicio DATETIME,
    fecha_fin DATETIME,
    fecha_creacion DATETIME,
    temporalidad TEMPORALIDAD,
    tipo TIPO_PROYECCION,
    cota_inferior NUMERIC(8,2),
    cota_superior NUMERIC(8,2),
    media NUMERIC(8,2),
    descripcion TEXT,
    varianza NUMERIC(8,2),
    std NUMERIC(8,2)
);

CREATE TABLE metas (
    id INT IDENTITY(1,1) PRIMARY KEY,
    proyeccion_id INT FOREIGN KEY REFERENCES proyecciones(id),
    fecha DATETIME,
    fecha_fin DATETIME,
    fecha_creacion DATETIME,
    temporalidad TEMPORALIDAD,
    tipo TIPO_PROYECCION,
    objetivo NUMERIC(8,2),
    progreso NUMERIC(8,2),
    estatus BIT -- Boolean en SQL Server
);

CREATE TABLE reportes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fecha DATETIME,
    descripcion TEXT,
    tipo VARCHAR(20) -- Evita usar ENUM para mayor flexibilidad ("financieros", "operativos", "mixto")
);

CREATE TABLE costos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fecha DATE,
    descripcion TEXT,
    administrativo NUMERIC(18,2),
    operacional NUMERIC(18,2),
    otros NUMERIC(18,2),
    total NUMERIC(18,2)
);

CREATE TABLE eventos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fecha DATE,
    descripcion TEXT,
    tipo VARCHAR(20), -- Evita usar ENUM para mayor flexibilidad ("unico", "lapso")
    fecha_fin DATE
);