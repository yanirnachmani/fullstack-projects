-- select c.customer_id, first_name, last_name as customer_last_name, o.order_id, p.product_id, p.name as product_name
-- from customers c
-- join orders o
-- 	on c.customer_id = o.customer_id
-- join order_items oi
-- 	on o.order_id = oi.order_id
-- join products p
-- 	on oi.product_id = p.product_id;
    

-- select c.customer_id, first_name, last_name as customer_last_name, o.order_id, p.product_id, p.name as product_name
-- from customers c
-- join orders o
-- 	using(customer_id)
-- join order_items oi
-- 	using(order_id)
-- join products p
-- 	using(product_id);
    
-- select c.customer_id, first_name, last_name as customer_last_name, o.order_id, p.product_id, p.name as product_name
-- from customers c
-- join orders o
-- join order_items oi
-- join products p
-- on c.customer_id = o.customer_id and  oi.product_id = p.product_id 	and o.order_id = oi.order_id;

use sql_hr;

select * from employees;

select 
worker.employee_id,
worker.first_name, 
worker.last_name, 
manager.employee_id as manager_id, 
manager.first_name as manager_first_name, 
manager.last_name as manager_last_name
from employees worker
join employees manager
on worker.reports_to = manager.employee_id