CREATE DATABASE WorkIng
CREATE TABLE employees (
  employee_id SERIAL PRIMARY KEY,
  employee_name varchar(50),
  department_id int REFERENCES departments (department_id),
  salary decimal(10, 2),
  hire_date DATE
)

CREATE TABLE departments (
  department_id SERIAL PRIMARY KEY,
  department_name varchar(50)
)