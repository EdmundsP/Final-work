-- Run this SQL in your MySQL database (k_darbs_contact)
-- to add category and price columns to the images table.

ALTER TABLE `images`
    ADD COLUMN `category` ENUM('original', 'print') NOT NULL DEFAULT 'original' AFTER `description`,
    ADD COLUMN `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 AFTER `category`;

-- Full table definition (if creating from scratch):
-- CREATE TABLE IF NOT EXISTS `images` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `image` varchar(255) NOT NULL,
--   `title` varchar(255) NOT NULL,
--   `short_description` varchar(500) NOT NULL,
--   `description` text NOT NULL,
--   `category` ENUM('original', 'print') NOT NULL DEFAULT 'original',
--   `price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
--   PRIMARY KEY (`id`)
-- );
