INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');


INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Leader', 10000, 1),
    ('Salesman', 20000, 1),
    ('Engineer', 50000, 2),
    ('Software Engineer', 70000, 2),
    ('Account Lead', 80000, 3),
    ('Accountant', 60000, 3),
    ('Lawyer', 100000, 4),
    ('Lawyer Assistant', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Smith', 1, null),
    ('Sarah', 'Connor', 2, 'John Smith'),
    ('Magnus', 'Red', 3, 'Emperor OfMankind'),
    ('Angron', 'Angry', 4, null),
    ('Fulgrim', 'Fall', 5, null),
    ('Erebos', 'Worst', 6, 'Fulgrim Fall'),
    ('Kharn', 'Betrayer', 7, 'Angron Angry'),
    ('Gork', 'Kunnin', 8, null),
    ('Mork', 'Brutal', 9, null),
    ('Emperor', 'OfMankind', 10, null);