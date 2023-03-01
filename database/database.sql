-- Active: 1675729585484@@127.0.0.1@3306@nodejs
CREATE TABLE employees (
employee_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
hire_date DATE NOT NULL,
job_id INT NOT NULL,
salary INT NOT NULL,
manager_id INT,
department_id INT NOT NULL,
PRIMARY KEY (employee_id)
);

CREATE TABLE products (
product_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
supplier_id INT NOT NULL,
category_id INT NOT NULL,
quantity_per_unit VARCHAR(20) NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
units_in_stock INT NOT NULL,
units_on_order INT NOT NULL,
reorder_level INT NOT NULL,
discontinued TINYINT(1) NOT NULL,
PRIMARY KEY (product_id)
);

CREATE TABLE shippers (
shipper_id INT NOT NULL AUTO_INCREMENT,
company_name VARCHAR(50) NOT NULL,
phone VARCHAR(20) NOT NULL,
PRIMARY KEY (shipper_id)
);

CREATE TABLE orders (
order_id INT NOT NULL AUTO_INCREMENT,
customer_id INT NOT NULL,
employee_id INT NOT NULL,
order_date DATE NOT NULL,
shipper_id INT NOT NULL,
PRIMARY KEY (order_id),
FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
FOREIGN KEY (shipper_id) REFERENCES shippers(shipper_id)
);

CREATE TABLE order_details (
order_detail_id INT NOT NULL AUTO_INCREMENT,
order_id INT NOT NULL,
product_id INT NOT NULL,
quantity INT NOT NULL,
unit_price DECIMAL(10,2) NOT NULL,
PRIMARY KEY (order_detail_id),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);

/* ignoruoti lenteles sukurimo prevencija = 0 . standartas = 1 */
/* Turejau beda kuriant orders ir order_details lentele todel naudojau si kodo indentifikavima*/
SET foreign_key_checks = 0;
SET foreign_key_checks = 1;
