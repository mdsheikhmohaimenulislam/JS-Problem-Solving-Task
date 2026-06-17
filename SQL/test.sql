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