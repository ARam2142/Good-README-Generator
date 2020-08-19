const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "Project-Title",
        message: "Enter a title of for your readme?"
      },
      {
        type: "input",
        name: "Description",
        message: "Enter a description for your readme"
      },
      {
        type: "input",
        name: "Table of Contents",
        message: "What is the table of contents of your readme?"
      },
      {
        type: "input",
        name: "Installation",
        message: "what are the instructions for instalation for your readme?"
      },
      {
        type: "input",
        name: "Usage",
        message: "type in the usage for this readme"
      },
      {
        type: "input",
        name: "Licenses",
        message: "enter the licenses for this readme"
      },
      {
        type: "input",
        name: "Contributing",
        message: "Who has contributed to this readme?"
      },
      {
        type: "input",
        name: "Tests",
        message: "What tests were executed on this readme?"
      },
      {
        type: "input",
        name: "Questions",
        message: "What questions do you have about this readme?"
      }
    ]);
  }
  

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
