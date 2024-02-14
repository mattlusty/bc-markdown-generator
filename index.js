const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Contents:",
    name: "contents",
  },
  {
    type: "input",
    message: "Installation Details:",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage Details:",
    name: "usage",
  },
  {
    type: "input",
    message: "Contributors:",
    name: "contributors",
  },
  {
    type: "list",
    message: "License:",
    name: "license",
    choices: ["mit", "ibm", "mozilla"],
    default: "mozilla",
  },
  {
    type: "input",
    message: "Tests:",
    name: "tests",
  },
  {
    type: "input",
    message: "GitHub Username",
    name: "username",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    let markdownText = generateMarkdown(answers);
    writeToFile("sample_README.md", markdownText);
  });
}

// function call to initialize program
init();
