DROP DATABASE IF EXISTS employee_management_system;
CREATE DATABASE employee_management_system;

USE employee_management_system;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(9,2),
  department_id INT NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT FK_department_id FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(id),
  CONSTRAINT FK_role_id FOREIGN KEY(role_id) REFERENCES role(id),
  CONSTRAINT FK_manager_id FOREIGN KEY(manager_id) REFERENCES employee(id)
);