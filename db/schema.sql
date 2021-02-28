### Schema
CREATE DATABASE events_db;
USE events_db;

CREATE TABLE events
(
	id int NOT NULL AUTO_INCREMENT,
	event_name varchar(255) NOT NULL,
    /* for event URL's */
  	event_location varchar(255) NOT NULL, 
	event_image varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE reviews
(
	id int NOT NULL AUTO_INCREMENT,
    /* text box space for comments */
	client_comment varchar(255) NOT NULL,
    /* scale of 1-5 stars for this event */
	client_name varchar(255) NOT NULL,
	event_id int NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


