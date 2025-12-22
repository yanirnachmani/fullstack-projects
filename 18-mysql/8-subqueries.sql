use sql_invoicing;
use sql_store;

update invoices
set 
	payment_total = payment_total + 1
where 
    client_id in (select client_id from clients where state in('NY', 'OR'));
    
    
    
select * from sql_store.products where unit_price > (
	select unit_price from sql_store.products where product_id = 3
);


select * 
from sql_store.products 
where product_id not in (
		select distinct product_id from sql_store.order_items
    );


-- customers who order product id 3

select distinct customer_id, last_name from customers 
join  orders using(customer_id)
join order_items using(order_id)
where product_id = 3;


select distinct customer_id, last_name from customers 
where customer_id in (
		select distinct customer_id from orders where order_id in (
				select order_id from order_items where product_id = 3
			)
    );
    
    
    SELECT * FROM sql_invoicing.invoices;



    
select * from invoices
where invoice_total > (
	select max(invoice_total) from invoices where client_id = 3
);


    
select * from invoices
where invoice_total > all (
	select invoice_total from invoices where client_id = 3
);


select distinct client_id, name from  clients where client_id in (select client_id 
from invoices
group by client_id
having count(*) > 1);

select distinct client_id, name from  clients where client_id = any (select client_id 
from invoices
group by client_id
having count(*) > 1)


    


    
    
    
