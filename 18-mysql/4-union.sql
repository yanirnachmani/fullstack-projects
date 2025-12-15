-- select first_name, last_name
-- from sql_hr.employees
-- union
-- select first_name, last_name
-- from sql_store.customers

(select *, 'vip' as status from sql_store.customers where points > 1000
union
select *, 'regular' as status from sql_store.customers where not points > 1000)
-- order by customer_id
