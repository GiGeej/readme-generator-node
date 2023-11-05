// // TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "checkbox",
    name: "contents",
    message: "Select from the relevant table of contents",
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributing",
      "Tests",
      "Questions",
    ],
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "\nTo ensure that this project functions as expected and to validate its integrity, follow these steps to run the tests:\n",
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please provide guidelines and instructions for potential contributors who want to ellaborate on your project",
  },
  {
    type: "input",
    name: "questions",
    message: "Please provide a message for those who wish to contact you",
  },
  {
    type: "list",
    name: "license",
    message: "please select your license",
    choices: [
      "MIT",
      "GNU General Public License (GPL)",
      "Apache License 2.0",
      "BSD Licenses",
      "GNU Lesser General Public License (LGPL)",
      "Creative Commons Licenses",
      "Unlicense",
      "Eclipse Public License (EPL)",
      "Mozilla Public License (MPL)",
      "ISC License",
      "Other",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md has been successfully generated.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownContent = generateMarkdown(data);
    writeToFile("README.md", markdownContent);
  });
}

// Function call to initialize app
init();
