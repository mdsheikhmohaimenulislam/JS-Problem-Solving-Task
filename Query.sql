create database Football_Ticket_Booking_System

CREATE TABLE Users (
    user_id serial,
    full_name varchar(100) not null,
    email varchar(250) not null,
    role varchar(150) default 'Football Fan',
    phone_number varchar(20),

   primary key(user_id),
   unique(email),
   check(role in ('Ticket Manager','Football Fan'))
);

CREATE TABLE Matches (
    match_id serial primary key,
    fixture varchar(300) not null,
    tournament_category varchar(200) not null,
    base_ticket_price decimal(10,2) not null,
    match_status varchar(200) not null,

    check(match_status in ('Available','Selling Fast','Sold Out','Postponed'))
);
