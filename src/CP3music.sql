SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;
-- -----------------------------------------------------
-- Table `mydb`.`album`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`album` ;

CREATE TABLE IF NOT EXISTS `mydb`.`album` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(255) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `artist` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`track`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`track` ;

CREATE TABLE IF NOT EXISTS `mydb`.`track` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(128) NOT NULL,
  `youtube_url` VARCHAR(255) NOT NULL,
  `album_id` INT NOT NULL,
  PRIMARY KEY (`id`, `album_id`),
  INDEX `fk_track_album1_idx` (`album_id` ASC) VISIBLE,
  CONSTRAINT `fk_track_album1`
    FOREIGN KEY (`album_id`)
    REFERENCES `mydb`.`album` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
