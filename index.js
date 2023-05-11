// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your application?"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using for the application?",
        choices: ['MIT', 'Apache', 'GPL', 'Unlicense']
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of the application."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        // * call file system package and use built in writefilesync function to create a brand new file with data that is formatted in our generateMarkdown function
        fs.writeFile("./example/exampleREADME.md", generateMarkdown(data), (err) => 
            err ? console.error(err) : console.log('Success!'));
    });
}

// Function call to initialize app
init();
