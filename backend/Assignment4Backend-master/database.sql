CREATE SCHEMA `project` ;

CREATE TABLE `project`.`Recipes` (
  `name` VARCHAR(100) NULL,
  `userID` INT NULL,
  `image` LONGTEXT NULL,
  `text` LONGTEXT NULL,
  `rating` INT NULL,
  `date` VARCHAR(45) NULL,
  `postID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`postID`));

CREATE TABLE `project`.`Users` (
  `name` VARCHAR(45) NULL,
  `userID` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NULL,
  `hint` VARCHAR(45) NULL,
  `profileImage` LONGTEXT NULL,
  `bio` LONGTEXT NULL,
  `rating` INT NULL,
  PRIMARY KEY (`userID`));


CREATE TABLE `project`.`Messages` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `userID` INT NULL,
  `time` VARCHAR(45) NULL,
  `text` LONGTEXT NULL,
  `groupID` VARCHAR(45) NULL,
  `name` VARCHAR(45) NUL,
  PRIMARY KEY (`ID`));
