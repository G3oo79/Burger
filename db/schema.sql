/*Table burgers created for mysql local server*/
/*{{+++++++++++++++++++++++++++++++++++++++++}}*/
CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burger
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(60) NOT NULL,
	devoured  BOOLEAN NOT NULL,
	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
); 
