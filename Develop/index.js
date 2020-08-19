const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

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
        type: "checkbox",
        name: "Licenses",
        message: "enter the licenses for this readme",
        choices: [
          'Apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'BSD 2-Clause "Simplified" License'
        ]
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
  
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('readme.txt', data, fileName, (err) => {
    if (err) throw err;
    console.log('the readme has been generated')
  });   

}

// function to initialize program
async function init() {
  try {
    const responses = await promptUser();

    const readMe = generateMarkdown(responses);

    await writeFileAsync("readme.txt", readMe);

    console.log("Successfully wrote to readme.txt");

  } catch(err) {
    console.log(err);
  }

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