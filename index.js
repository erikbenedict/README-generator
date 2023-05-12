// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;
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
        message: "What license are you using for the repository?",
        choices: ['MIT', 'Apache-2-0', 'GPL-2-0', 'Unlicensed']
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of the application."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the instructions on installing and setting up your app?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are examples of how this app can be used??"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines for your repository?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for your app?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email address that you would like to be contacted at for additional questions from your audience?"
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => writeFile("./example/exampleREADME.md", generateMarkdown(data)))
    .then(() => console.log('Success!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
