CREATE TABLE `Devices` (
  `id_devices` INT PK,
  `name` VARCHAR,
  `status` ENUM('Approved', 'Rejected'),
  `user_id` INT FK,
  `type_id` INT FK
);

CREATE TABLE `Users` (
  `id_user` INT PK,
  `username` VARCHAR,
  `password` VARCHAR,
  FOREIGN KEY (`id_user`) REFERENCES `Devices`(`user_id`)
);

CREATE TABLE `Home` (
  `id_home` INT PK,
  `name` VARCHAR,
  `address` TEXT,
  `id_user` INT,
  `created_at` DATETIME,
  FOREIGN KEY (`id_user`) REFERENCES `Users`(`id_user`)
);

CREATE TABLE `Types` (
  `id_type` INT PK,
  `type` ENUM('Developer', 'Admin'),
  `action_id` Type,
  FOREIGN KEY (`id_type`) REFERENCES `Devices`(`type_id`)
);

CREATE TABLE `Actions` (
  `id_action` INT PK,
  `action` INT FK,
  FOREIGN KEY (`id_action`) REFERENCES `Types`(`action_id`)
);

CREATE TABLE `Logs` (
  `id_log` INT PK,
  `device_id` INT FK,
  `action_id` INT FK,
  `date` DATE,
  FOREIGN KEY (`action_id`) REFERENCES `Actions`(`id_action`),
  FOREIGN KEY (`id_log`) REFERENCES `Devices`(`id_devices`)
);