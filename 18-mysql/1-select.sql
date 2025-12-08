-- use store;

-- select * from customers where phone is not null;

-- select * 
-- from customers 
-- order by first_name desc;

-- select *
-- from customers
-- -- order by customer_id desc
-- limit 3, 4;


-- select * from orders
-- join customers
-- on orders.customer_id = customers.customer_id;

select order_id, customers.customer_id, first_name, last_name
from orders
join customers
on orders.customer_id = customers.customer_id;
