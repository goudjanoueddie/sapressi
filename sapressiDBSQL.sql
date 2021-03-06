show databases;

CREATE database sapressiDB;

GRANT ALL PRIVILEGES ON sapressiDB.* TO 'root'@'localhost';

use sapressiDB;

show tables;


CREATE TABLE IF NOT EXISTS `groupuser` (
`id` INT NOT NULL AUTO_INCREMENT ,
`name` VARCHAR(45) NOT NULL ,
PRIMARY KEY (`id`) )
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `user` (
`id` INT NOT NULL AUTO_INCREMENT ,
`name` VARCHAR(100) NOT NULL ,
`userName` VARCHAR(20) NOT NULL ,
`password` VARCHAR(100) NOT NULL ,
`email` VARCHAR(100) NOT NULL ,
`picture` VARCHAR(100) NULL ,
`Group_id` INT NOT NULL ,
PRIMARY KEY (`id`, `Group_id`) ,
UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) ,
INDEX `fk_User_Group1_idx` (`Group_id` ASC) ,
CONSTRAINT `fk_User_Group1`
FOREIGN KEY (`Group_id` )
REFERENCES `groupuser` (`id` )
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `commerciaux` (
`id_commerciaux` INT NOT NULL AUTO_INCREMENT ,
`nom` VARCHAR(100) NOT NULL,
`prenom` VARCHAR(100) NOT NULL,
`contacts` VARCHAR(100),
`courriel` VARCHAR(100),
`date_naissance` DATE NOT NULL,
PRIMARY KEY (`id_commerciaux`)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `clients` (
`id_clients` INT NOT NULL AUTO_INCREMENT,
`nom_client` VARCHAR(100) NOT NULL,
`adresse` VARCHAR(100) NOT NULL,
`telephone` VARCHAR(100) NOT NULL,
`courriel` VARCHAR(100) NOT NULL,
PRIMARY KEY (`id_clients`)
)
ENGINE =InnoDB;

CREATE TABLE IF NOT EXISTS `prospection`(
`id_prospection` INT NOT NULL AUTO_INCREMENT,
`date_naissance` DATE NOT NULL,
`observation` VARCHAR(200),
`type` ENUM('telephone','courriel','presentiel'),
`id_commerciaux` INT NOT NULL,
`id_clients` INT NOT NULL,
PRIMARY KEY (`id_prospection`),
CONSTRAINT `fk_Commerciaux`
FOREIGN KEY (`id_commerciaux`)
REFERENCES `commerciaux` (`id_commerciaux`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `fk_Clients`
FOREIGN KEY (`id_clients`)
REFERENCES `clients` (`id_clients`)
ON DELETE NO ACTION
ON UPDATE NO ACTION
)
ENGINE =InnoDB;

CREATE TABLE IF NOT EXISTS `commandes`(
`id_commande` INT NOT NULL AUTO_INCREMENT,
`date_commande` DATE NOT NULL,
`id_clients` INT NOT NULL,
PRIMARY KEY (`id_commande`),
CONSTRAINT `fk_Clients_commandes`
FOREIGN KEY (`id_clients`)
REFERENCES `clients` (`id_clients`)
ON DELETE NO ACTION
ON UPDATE NO ACTION
) 
ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `factures`(
`id_facture` INT NOT NULL AUTO_INCREMENT,
`date_edition` DATE NOT NULL,
`montant` DOUBLE NOT NULL,
PRIMARY KEY (`id_facture`)
)
ENGINE=InnoDB;


describe prospection;


INSERT INTO `groupuser` (`name`) VALUES ('admin');

INSERT INTO `user` (`name`, `userName`, `password`, `email`,`Group_id`)
VALUES ('Loiane Groner', 'loiane','$2a$10$2a4e8803c91cc5edca222evoNPfhdRyGEG9RZcg7.qGqTjuCgXKda','me@loiane.com', '1');
