
const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
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
            
        },
    ]);
};

// function to initialize program
function init() {
    // calls the function using inquirer to get input data. 
    questions()
}

init();