-- -- SQLite
-- CREATE TABLE users (
--     id INTEGER PRIMARY KEY UNIQUE,
--     email varchar NOT NULL,
--     password varchar NOT NULL
-- );
-- INSERT INTO users(email, password) VALUES ('admin@admin.com', 'admin');
-- INSERT INTO users(email, password) VALUES ('olga@admin.com', '123');

-- CREATE TABLE product_types (
--     id INTEGER PRIMARY KEY UNIQUE,
--     name varchar NOT NULL
-- );
-- INSERT INTO product_types(name) VALUES
--     ('chiken'),
--     ('meat'),
--     ('egg');
-- UPDATE product_types SET name = 'chicken' WHERE id = 1;

-- CREATE TABLE products (
--     id INTEGER PRIMARY KEY UNIQUE,
--     name varchar NOT NULL,
--     type_id INTEGER NOT NULL,
--     price REAL NOT NULL,
--     description TEXT,
--     lot REAL,
--     lot_measure_unit TEXT,
--     image TEXT,
--     FOREIGN KEY (type_id) REFERENCES product_types(id)  ON DELETE RESTRICT  ON UPDATE CASCADE
-- );
-- INSERT INTO products(name, type_id, price, description, lot, lot_measure_unit) VALUES
--     ('Бройлер', 1, 500, 'Красивый! Умный!', 1, 'цып'),
--     ('Мясо утки', 2, 100, 'Вкусное! Сытное!', 1, 'кг'),
--     ('Куриные яйца', 3, 50, 'Свежие! Мытые!', 10, 'шт.');

-- UPDATE products SET lot_measure_unit='' WHERE id=1

