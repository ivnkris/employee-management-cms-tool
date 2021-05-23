INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Sarah', 'Knowell', '1');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Jessica', 'Sellwell', '2');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Bob', 'Wainwright', '3');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Timothy', 'Tailor', '4');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('John', 'Doe', '5');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Sarah', 'Parker', '6');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Rebecca', 'Singh', '7');
INSERT INTO `employee_management_system`.`employee` (`first_name`, `last_name`, `role_id`) VALUES ('Alan', 'Smith', '8');

UPDATE `employee_management_system`.`employee` SET `manager_id` = '1' WHERE (`id` = '2');
UPDATE `employee_management_system`.`employee` SET `manager_id` = '5' WHERE (`id` = '3');
UPDATE `employee_management_system`.`employee` SET `manager_id` = '5' WHERE (`id` = '4');
UPDATE `employee_management_system`.`employee` SET `manager_id` = '8' WHERE (`id` = '6');
UPDATE `employee_management_system`.`employee` SET `manager_id` = '8' WHERE (`id` = '7');