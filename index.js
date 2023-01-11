// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  { message: "Please type the project TITLE:", type: "input", name: "title" },
  { message: "Please type the DESCRIPTION section:", type: "input", name: "description" },
  { message: "Please type the INSTALLATION section:", type: "input", name: "installation" },
  { message: "Please type THE USAGE section:", type: "input", name: "usage" },
  {
    message: "Please type the LICENSE section:",
    type: "list",
    name: "license",
    choices: ["Apachev2", "GNUv3", "MIT", "Mozilla"],
  },
  { message: "Please type the CONTRIBUTE section:", type: "input", name: "contribute" },
  { message: "Please type the command to test the application:", type: "input", name: "tests" },
  { message: "Please type your github username:", type: "input", name: "username" },
  { message: "Please type your email:", type: "input", name: "email" },
];

// TODO: Create a function to write README file
function licenseBadge(license) {
  switch (license) {
    case "Apachev2":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNUv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "No License";
  }
}

function writeToFile(data) {
  const content = ({
    title,
    description,
    installation,
    usage,
    license,
    contribute,
    tests,
    username,
    email,
  }) => {
    return `# ${title}

${licenseBadge(license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)
## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License
    
This project is licensed under the ${license} license.
    
## How to Contribute
    
${contribute}
    
## Tests

Run the following command to test the application.
 \`\`\`
${tests}
\`\`\`
    
## Questions

See more of my projects on my Github page https://github.com/${username}.
Shall you have any question, issue, suggestion, and/or compliment, please send an email ${email}.

`;
  };
  fs.writeFile("./samples/generated_readme.md", content(data), (error) => {
    error ? console.error(error) : console.log("File Written successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile(response))
    .catch(console.log);
}

// Function call to initialize app
init();
