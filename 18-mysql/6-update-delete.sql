
use sql_invoicing;


-- update invoices
-- set payment_total = 123, payment_date = '2025-12-15'
-- where invoice_id = 1;

-- INSERT INTO `sql_invoicing`.`invoices`
-- (`invoice_id`,
-- `number`,
-- `client_id`,
-- `invoice_total`,
-- `payment_total`,
-- `invoice_date`,
-- `due_date`,
-- `payment_date`)
-- VALUES
-- (23, 1, 1, 1,1, '2030-09-09', '2030-09-09', '2030-09-09');

delete from invoices where invoice_id = 23;

select * from invoices where invoice_id = 1;