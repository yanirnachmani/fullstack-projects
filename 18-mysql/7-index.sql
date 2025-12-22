use sql_hr;

create table huge_table (
	id int auto_increment primary key,
    `name` varchar(100),
    state varchar(100)
);


insert into huge_table (name, state) values ('Yossi', 'CA'),  ('Danny', 'NY'),  ('Dana', 'IL'),  ('Roni', 'CA'), ('Gal', 'tx');


insert into huge_table (name, state) select name, state from huge_table;

create index idx_name on huge_table(name)
