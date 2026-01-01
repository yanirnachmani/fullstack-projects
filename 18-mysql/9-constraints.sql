-- drop database if exists sql_store2;

create database if not exists sql_store2;

use sql_store2;

drop table if exists customers;

create table customers (
	customer_id int primary key auto_increment,
    first_name varchar(50) not null,
    points int not null default 0,
    email varchar(50) not null unique 
);

insert into customers (first_name, email, points) values ('Avix', 'avi@gmail.com', 100), ('Naknix', '1111@gmail.com', 45);

insert into customers (first_name, email) values ('Avix', 'avi1@gmail.com');

alter table customers 
add last_name varchar(50) not null after first_name,
add city varchar(50) not null,
modify column first_name  varchar(55) default '',
drop points;

insert into customers (last_name, email, city) values ('Moyalx', '5656@gmail.com', 'Bne Berak');


create table orders (
	order_id int primary key auto_increment,
    customer_id int not null,
    foreign key (customer_id) 
    references customers (customer_id)
    on update cascade on delete no action 
);


insert into orders  (customer_id) values (1);

update customers 
set customer_id = 3
where customer_id = 1;

delete from customers where customer_id  = 3;


show create table orders;

-- 'orders', 'CREATE TABLE `orders` (\n  `order_id` int NOT NULL AUTO_INCREMENT,\n  `customer_id` int NOT NULL,\n  PRIMARY KEY (`order_id`),\n  KEY `customer_id` (`customer_id`),\n  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON UPDATE CASCADE\n) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'

alter table orders
 drop foreign key orders_ibfk_1;
 
 delete from orders where order_id = 1;
 
 alter table orders 
  modify customer_id int,
  add constraint `fk_orders_customers`
  foreign key (customer_id)
    references customers (customer_id)
    on update set null  on delete cascade;
 
-- 18:59:38	alter table orders    modify customer_id int,   add constraint `fk_orders_customers`   foreign key (customer_id)     references customers (customer_id)     on update set null  on delete cascade	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sql_store2`.`#sql-1_a`, CONSTRAINT `fk_orders_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE CASCADE ON UPDATE SET NULL)	0.079 sec

insert into orders  (customer_id) values (5);


update customers set customer_id = 1 where customer_id = 5;

delete from customers where customer_id = 2;


 alter table orders 
  drop primary key,
  add another_primary_id int,
  add primary key pk_orders (order_id, another_primary_id),
  add check (another_primary_id < 10);


insert into orders (order_id, another_primary_id, customer_id)  values (1, 11, 4)



