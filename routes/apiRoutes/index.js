
const inquirer = require('inquirer');

// array of questions for user
const initialPrompt = () => {
    return inquirer.prompt([
        // Initial presentation of prompts. 
        {
            type: 'list',
            name: 'initialUserPrompt',
            message: "What would you like to do?",
            choices: [
                'View All Employees', 
                'View All Departments', 
                'View All Roles', 
                'Add an Employee', 
                'Add a Department', 
                'Add a Role', 
                'Update an Employee Role'
            ]
        }
    ]);
};

const employeeData = () => {
    return inquirer.prompt([
        // Employee's First Name
        {
            type: 'input',
            name: 'employeeFirstName',
            message: "What is the employee's first name?"
        },
        // Employee's Last Name
        {
            type: 'input',
            name: 'employeeLastName',
            message: "What is the employee's last name?"
        },
        // Employee's Role
        {
            type: 'input',
            name: 'employeeRole',
            message: "What is the employee's role?"
        },
        // Employee's Manager
        {
            type: 'input',
            name: 'employeeManager',
            message: "Who is the employee's manager?"
        }
    ]);
};

const departmentData = () => {
    return inquirer.prompt([
        // Department Name
        {
            type: 'input',
            name: 'departmentName',
            message: "What is department's name?"
        },
        // Department Id
        {
            type: 'input',
            name: 'departmentId',
            message: "What is the department's id?"
        }
    ]);
};

const roleData = () => {
    return inquirer.prompt([
        // Role's Name
        {
            type: 'input',
            name: 'roleName',
            message: "What is the role name?"
        },
        // Role's Salary
        {
            type: 'input',
            name: 'roleSalary',
            message: "What is the role salary?"
        },
        // Role's Department
        {
            type: 'input',
            name: 'roleDepartment',
            message: "What department does the role belong to?"
        }
    ]);
};


// function to initialize program
function init() {
    
    // Need to create an if function get answers in specific order

    // initialPrompt(),
    // employeeData(),
    // departmentData(),
    // roleData()

}

init();