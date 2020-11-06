USE employee_db

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Development");
INSERT INTO department (name) VALUES ("HR");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Manager", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Sales Person", 500000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("IT Manager", 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 900000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Development Manager", 100000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Sales Manager", 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Yulin", "Karaiscos", null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Celeste", "Messina", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("George", "Ilagan", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Armando", "Silva", null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Nick", "Karaiscos", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jennifer", "Wheeler", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Lori", "Lara", 2, 1);


 

