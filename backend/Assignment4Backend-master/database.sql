CREATE SCHEMA `project` ;

CREATE TABLE `project`.`Recipes` (
  `name` VARCHAR(20) NULL,
  `userID` INT NULL,
  `image` VARCHAR(45) NULL,
  `text` VARCHAR(45) NULL,
  `rating` INT NULL,
  `date` VARCHAR(45) NULL,
  `postID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`postID`));

CREATE TABLE `project`.`Users` (
  `name` VARCHAR(20) NULL,
  `userID` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NULL,
  `hint` VARCHAR(45) NULL,
  `profileImage` VARCHAR(45) NULL,
  `bio` VARCHAR(45) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`userID`));

CREATE TABLE `project`.`GC` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `groupName` VARCHAR(45) NULL,
  `userID` INT NULL,
  `groupID` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `project`.`Messages` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `userID` INT NULL,
  `time` VARCHAR(45) NULL,
  `text` VARCHAR(45) NULL,
  `groupID` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`));
