CREATE TABLE machine_info (
	id serial,
	name varchar(20),
    temperature float,
    water_level float,
    cap_on bool,
   primary key(id)
);

insert into machine_info values(DEFAULT, 'machine_2', 30, 23, 'f');