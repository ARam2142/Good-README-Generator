const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

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


/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/
