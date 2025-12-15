use sql_store;

select *
from customers 
left join orders
-- join orders
-- using (customer_id)
on customers.customer_id = orders.customer_id
left join shippers
-- using (shipper_id)
on orders.shipper_id = shippers.shipper_id
-- where customers.customer_id = 2;
order by customers.customer_id;
