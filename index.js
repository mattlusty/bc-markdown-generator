const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description?",
    name: "description",
  },
  {
    type: "input",
    message: "What is the table of contents?",
    name: "contents",
  },
  {
    type: "input",
    message: "Installtion details please...",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the usage details?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who are the contributors?",
    name: "contributors",
  },
  {
    type: "list",
    message: "Choose a license?",
    name: "license",
    choices: ["license1", "license2", "license3"],
    default: "testDefault",
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
