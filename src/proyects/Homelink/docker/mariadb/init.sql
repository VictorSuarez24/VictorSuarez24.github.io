CREATE TABLE `Users` (
  `id_user` INT PK,
  `username` VARCHAR,
  `password` VARCHAR
);

CREATE TABLE `Home` (
  `id_home` INT PK,
  `name` VARCHAR,
  `address` TEXT,
  `id_user` INT FK,
  `created_at` DATETIME,
  FOREIGN KEY (`id_user`) REFERENCES `Users`(`id_user`)
);

CREATE TABLE `Devices` (
  `id_devices` INT PK,
  `name` VARCHAR,
  `home_id` INT FK,
  `type_id` INT FK,
  FOREIGN KEY (`home_id`) REFERENCES `Home`(`id_home`)
);

CREATE TABLE `Types` (
  `id_type` INT PK,
  `type` ENUM('LIGHT', 'DOOR', 'HUMIDITY'),
  `action_id` INT FK,
  FOREIGN KEY (`id_type`) REFERENCES `Devices`(`type_id`)
);

CREATE TABLE `Actions` (
  `id_action` INT PK,
  `action` ENUM('ON/OFF', 'OPEN/CLOSE', 'READING', 'DIMMER' ),
  FOREIGN KEY (`id_action`) REFERENCES `Types`(`action_id`)
);

CREATE TABLE `Logs` (
  `id_log` INT PK,
  `device_id` INT FK,
  `action_id` INT FK,
  `date` DATE,
  FOREIGN KEY (`action_id`) REFERENCES `Actions`(`id_action`),
  FOREIGN KEY (`device_id`) REFERENCES `Devices`(`id_devices`)
);