inquirer.prompt([
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
      "To ensure that this project functions as expected and to validate its integrity, follow these steps to run the tests:",
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
    message:
      "If you have any questions or need further assistance, don't hesitate to reach out. You can contact us in the following ways: <please provide methods of contact>",
  },
]);
