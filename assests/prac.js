const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "list",
    name: "license",
    message: "please select your license",
    choices: [
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
]);
