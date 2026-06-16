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


INSERT INTO
  departments (department_name)
VALUES
  ('HR'),
  ('Marketing'),
  ('Finance'),
  ('IT'),
  ('Sales'),
  ('Engineering'),
  ('Customer Support'),
  ('Administration'),
  ('Research'),
  ('Quality Assurance');



INSERT INTO
  employees (employee_name, department_id, salary, hire_date)
VALUES
  ('John Doe', 1, 60000.00, '2022-01-10'),
  ('Jane Smith', 2, 75868.56, '2021-05-22'),
  ('Bob Johnson', 3, 80000.75, '2020-11-15'),
  ('Alice Williams', 4, 90000.25, '2019-08-03'),
  ('David Lee', 5, 65000.50, '2020-03-18'),
  ('Sara Brown', 6, 70666.00, '2021-09-28'),
  ('Mike Miller', 7, 55000.75, '2022-02-05');

