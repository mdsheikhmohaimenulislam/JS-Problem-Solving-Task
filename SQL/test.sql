-- Cache............
update students 
set age = cache
where id = 5 then '15'
where id = 9 then '19'
end
where id in (5,9)

create table users(
  id serial primary key,
  username varchar(255) not null
)

create table orders(
  id serial primary key,
  product varchar(255) not null,
  user_id int references users(id) on delete cascade
)


-- Insert sample data into users & orders table
INSERT INTO users (username)
VALUES
('Alice'),
('Robert'),
('Sorker'),
('Epick'),
('Emma');
  
INSERT INTO orders (product, user_id)
VALUES
('Laptop', 1),
('Mouse', 1),
('Keyboard', 3),
('Phone', 4),
('Calculator', 2);


select *  from users

select * from orders

-- - LEFT JOIN
select * from users
left join orders on orders.user_id = users.id


select * from users
right join orders on orders.user_id = users.id

-- cross join

select * from users
cross join orders 


select * from users
natural join orders


-- sub query
select * from books
where price = (
  select max(price) from books
)

  
-- Which book has the second highest price?
-- Nested sub querys
select * from books
where price = (
  select max(price) from books
  where price < (select max(price) from books)
)


  
-- Which books have a price higher than the average price?
-- avg sub queres
select * from books
where price > (select avg(price) from books)


CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    book_name VARCHAR(100) NOT NULL,
    author_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT,
    published_year INT
);

INSERT INTO books (
    book_name,
    author_name,
    category,
    price,
    stock,
    published_year
)
VALUES
('Harry Potter', 'J.K. Rowling', 'Fantasy', 500.00, 15, 1997),
('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 450.00, 10, 1937),
('Atomic Habits', 'James Clear', 'Self Help', 350.00, 25, 2018),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 'Finance', 300.00, 20, 1997),
('The Alchemist', 'Paulo Coelho', 'Fiction', 280.00, 12, 1988);



-- Functions
-- -Create function to calculate average price of books

create function book_avg_price()
returns int
language sql
as
$$
select  avg(price) from books  
$$

select book_avg_price()