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
    choices: ["MIT", "GNU", "Apache"],
  },
  { message: "Please type the CONTRIBUTE section:", type: "input", name: "contribute" },
  { message: "Please type the TESTS section:", type: "input", name: "tests" },
  { message: "Please type the QUESTIONS section:", type: "input", name: "questions" },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const content = ({
    title,
    description,
    installation,
    usage,
    license,
    contribute,
    tests,
    questions,
  }) => {
    return `# ${title}

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
    
${tests}
    
## Questions
    
${questions}`;
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
