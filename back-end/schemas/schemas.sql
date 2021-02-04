
USE mobile;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    email varchar (100) NOT NULL,
    password varchar (255) NOT NULL,
    name VARCHAR (100) Unique,
    phone int (100) NOT NULL,
    city VARCHAR (100) NOT NULL,
    gender char,
    UNIQUE KEY unique_email (email),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (user_id)
);

CREATE TABLE mobile (
    mobile_id INT AUTO_INCREMENT NOT NULL,
    type VARCHAR (100),
    company VARCHAR(100),
    price INT (100), 
    img VARCHAR (255),
    description VARCHAR (255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (mobile_id)
);
