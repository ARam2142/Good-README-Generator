const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

//questions to ask user
const questions = [
    {
      type: "input",
      name: "Title",
      message: "what is the title of for your readme?"
    },
    {
      type: "input",
      name: "Description",
      message: "Enter a description for your readme"
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
      type: "checkbox",
      name: "License",
      message: "choose a license for this readme",
      choices: [
        'The MIT License',
        'Mozilla Public License 2.0',
        'GNU AGPL v3'
      ]
    },
    {
      type: "input",
      name: "Contributions",
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
      message: "what is the developers name?"
    },
    {
      type: "input",
      name: "Username",
      message: "what is your github username?"
    },
    {
      type: "input",
      name: "Email",
      message: "what is your email?"
    }     
];


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('the readme.md has been generated')
  });   

}

// function to initialize program
async function init() {
  inquirer.prompt(questions).then((answers) => {
    const responses = generateMarkdown(answers);
    console.log(responses);
    writeFileAsync("readme.md", responses);
    writeToFile('readme.md', responses);

  });

}
// function call to initialize program
init();


