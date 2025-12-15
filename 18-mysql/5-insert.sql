use sql_store;


-- insert into customers
-- values
-- (
-- default,
-- 'NAdix',
-- 'Yosex',
-- default,
-- default,
-- 'address',
-- 'RG',
-- 'IL',
-- default
-- );

-- insert into customers
-- (
-- first_name,
-- last_name,
-- address,
-- city,
-- state
-- )
-- values
-- (
-- 'Ruslax',
-- 'Volovix',
-- 'address',
-- 'NTA',
-- 'IL'
-- ),
-- (
-- 'Avichai',
-- 'Chazux',
-- 'Yemen',
-- 'Beith Shean',
-- 'IL'
-- );


-- select * from customers order by customer_id desc limit 4; 

INSERT INTO `sql_hr`.`employees`
(`employee_id`,
`first_name`,
`last_name`,
`job_title`,
`salary`,
`office_id`,
`reports_to`
)
select 
floor(rand() * 300),
first_name,
last_name,
'Developer',
50000,
1,
37270
from sql_store.customers
where points > 3000;





