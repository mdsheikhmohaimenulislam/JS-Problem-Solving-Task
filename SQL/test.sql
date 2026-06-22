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

-- Function to delete a book by id
create function book_deleted_in_funtion(bookId int)
returns void
language sql
  as
$$
  delete from books where book_id  = bookId 
$$

select book_deleted_in_funtion(11)


-- Procedures
-- Create procedure to delete a book by id
create procedure delete_book_id_by(id int)
language plpgsql
as
$$
  begin
  delete from books where book_id  = id;
  end;
$$

call delete_book_id_by(12)



-- Create procedure to update stock based on category and stock condition
create procedure update_stock(b_category varchar, b_stock int)
language plpgsql
as
$$
  declare
  total_book int;
  begin
  select count(stock) into total_book from books
  where category = b_category and total_book < b_stock;

  update books set stock = stock + 100
  where category = b_category and total_book < b_stock;
  end;
$$

call update_stock('Fiction',30);


-- -Trigger section
-- Create a Log table to store deleted book records
CREATE TABLE books_log (
    id SERIAL PRIMARY KEY,
    book_name TEXT,
    action VARCHAR(255)
);

-- Create a trigger that runs AFTER DELETE on books table
create trigger save_logs
after delete
on books
for each row
execute function logs()

-- Create a trigger function Lags()
create function Logs()
returns trigger
Language plpgsql
as
$$
begin
  insert into books_Log (book_name,action) values(old.book_name, 'delete');
  return old;
end;
$$

delete from books where book_id=5

-- trigger deleted ....
DROP TRIGGER IF EXISTS save logs of books;
DROP FUNCTION IF EXISTS logs();