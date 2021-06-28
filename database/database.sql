CREATE DATABASE ng_employees_db;
USE ng_employees_db;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(180),
    descripcion VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE employee;