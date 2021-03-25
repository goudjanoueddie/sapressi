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
`localisation` VARCHAR(100) NOT NULL,
`activites` VARCHAR(300) NOT NULL,
`correspondant` VARCHAR(100) NOT NULL,
`fonction_correspondant` VARCHAR(100) NOT NULL,
`contact_correspondant` VARCHAR(100) NOT NULL,
`courriel_correspondant` VARCHAR(100) NOT NULL,
PRIMARY KEY (`id_clients`)
)
ENGINE =InnoDB;

CREATE TABLE IF NOT EXISTS `prospection`(
`id_prospection` INT NOT NULL AUTO_INCREMENT,
`date_prospection` DATE NOT NULL,
`objectif_prospection` VARCHAR(400),
`besoins_attente_client` VARCHAR(400),
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
`id_commande` INT NOT NULL,
PRIMARY KEY (`id_facture`),
CONSTRAINT `fk_Commande`
FOREIGN KEY (`id_commande`)
REFERENCES `commandes` (`id_commande`)
ON DELETE NO ACTION
ON UPDATE NO ACTION
)
ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `menu` (
`id` INT NOT NULL AUTO_INCREMENT ,
`text` VARCHAR(45) NOT NULL ,
`iconCls` VARCHAR(45) NULL ,
`className` VARCHAR(45) NULL ,
`menu_id` INT NULL ,
PRIMARY KEY (`id`) ,
INDEX `fk_menu_menu1_idx` (`menu_id` ASC) ,
CONSTRAINT `fk_menu_menu1`
FOREIGN KEY (`menu_id` )
REFERENCES `menu` (`id` )
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `permissions` (
`menu_id` INT NOT NULL ,
`groups_id` INT NOT NULL ,
PRIMARY KEY (`menu_id`, `groups_id`) ,
INDEX `fk_permissions_groups1_idx` (`groups_id` ASC) ,
CONSTRAINT `fk_permissions_menu1`
FOREIGN KEY (`menu_id` )
REFERENCES `menu` (`id` )
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `fk_permissions_groups1`
FOREIGN KEY (`groups_id` )
REFERENCES `groupuser` (`id` )
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `menu` (`id`,`text`,`iconCls`,`className`,`menu_id`)
VALUES
(1,'menu1','fa fa-group fa-lg',NULL,NULL),
(2,'menu11','xf0c0','panel',1),
(3,'menu12','xf007','panel',1),
(4,'processusCommercial','fa fa-database fa-lg',NULL,NULL),
(5,'prospection','xf005','panel',4),
(6,'clients','xf013','panel',4),
(7,'commandes','xf1ab','panel',4),
(8,'commerciaux','xf018','panel',4),
(9,'facture','xf0ac','panel',4),
(10,'managerLentreprise','fa fa-film fa-lg',NULL,NULL),
(11,'films','xf1c8','panel',10),
(12,'reports','fa fa-line-chart fa-lg',NULL,NULL),
(13,'salesfilmcategory','xf200','panel',12);

INSERT INTO `permissions` (`menu_id`,`groups_id`) VALUES
(1,1), (2,1), (3,1), (4,1), (5,1), (6,1), (7,1),
(8,1), (9,1), (10,1), (11,1), (12,1), (13,1);

INSERT INTO `groupuser` (`name`) VALUES ('admin');

INSERT INTO `user` (`name`, `userName`, `password`, `email`,`Group_id`)
VALUES ('Loiane Groner', 'loiane','$2a$10$2a4e8803c91cc5edca222evoNPfhdRyGEG9RZcg7.qGqTjuCgXKda','me@loiane.com', '1');
