// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  { message: "Please type the project TITLE:", type: "input", name: "title" },
  { message: "Please type the DESCRIPTION section:", type: "input", name: "description" },
  { message: "Please type the INSTALLATION section:", type: "input", name: "installation" },
  { message: "Please type THE USAGE section:", type: "input", name: "usage" },
  { message: "Please type the CREDITS section:", type: "input", name: "credits" },
  { message: "Please type the LICENSE section:", type: "input", name: "license" },
  { message: "Please type the CONTRIBUTING section:", type: "input", name: "contributing" },
  { message: "Please type the TESTS section:", type: "input", name: "tests" },
  { message: "Please type the QUESTIONS section:", type: "input", name: "questions" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = "";
  fs.writeFile("readme.md", content, (error) => {
    error ? console.error(error) : console.log("File Written successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  questions.forEach((question) =>
    inquirer
      .prompt([{ type: question.type, message: question.message, name: question.name }])
      .then((response) => console.log(response))
      .catch(console.log)
  );
}

// Function call to initialize app
init();
