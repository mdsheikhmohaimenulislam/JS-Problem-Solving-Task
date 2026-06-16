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



SELECT
  *
FROM
  departments AS d
  INNER JOIN employees AS e ON d.department_id = e.department_id
  -- same name thakle  using
SELECT
  *
FROM
  employees
  INNER JOIN departments USING (department_id)
SELECT
  d.department_name,
  round(avg(e.salary)) AS avg_salary
FROM
  employees AS e
  INNER JOIN departments AS d ON e.department_id = d.department_id
GROUP BY
  d.department_name
SELECT
  department_name,
  count(*)
FROM
  employees
  INNER JOIN departments USING (department_id)
GROUP BY
  department_name


 -- Show Department Name with biger Average Salary:
SELECT
  department_name,
  round(avg(salary)) AS avg_salary
FROM
  employees
  INNER JOIN departments USING (department_id)
GROUP BY
  department_name
ORDER BY
  (avg_salary) DESC
LIMIT
  1
SELECT
  extract(
    YEAR
    FROM
      hire_date
  ) AS hire_year,
  count(*)
FROM
  employees
GROUP BY
  hire_year
SELECT
  *
FROM
  employees
WHERE
  salary = (
    SELECT
      max(salary)
    FROM
      employees
  )
SELECT
  *
FROM
  employees
WHERE
  salary > (
    SELECT
      avg(salary)
    FROM
      employees
  )
SELECT
  *
FROM
  employees
WHERE
  salary = (
    SELECT
      max(salary)
    FROM
      employees
    WHERE
      department_name = 'H'
  )


  -- 16-5 Functions Explained
CREATE FUNCTION emp_count () returns int language sql $$
 select count(*) from employees
  $$ selecte emp_count ()
CREATE FUNCTION delete_emp_id (emp_id int) returns void language sql AS $$
delete from employees where  employee_id = emp_id  
$$
SELECT
  delete_emp_id (7)