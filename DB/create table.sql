create database capstondsign;

use capstondsign;

create table web_link(
Web_Number int not null auto_increment,
Web_code varchar(10) not null,
Web_name varchar(40),
Web_Contents text,
Web_URL text,
primary key(Web_Number, Web_code)
);
