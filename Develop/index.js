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
  fs.writeFile('readme.md', data, fileName, (err) => {
    if (err) throw err;
    console.log('the readme has been generated')
  });   

}

// function to initialize program
async function init() {
  try {
    const responses = await promptUser();

    const readMe = generateMarkdown(responses);

    await writeFileAsync("readme.md", readMe);

    console.log("Successfully wrote to readme.md");

  } catch(err) {
    console.log(err);
  }
  //writeToFile();
}

// function call to initialize program
init();



