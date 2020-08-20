// function to generate markdown for README
function generateMarkdown(responses) {

  //display structure for readme file when generated
  //title of your project and sections entitled Description, Table of Contents, 
  //Installation, Usage, License, Contributing, Tests, and Questions
  //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  //[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  return `

  //[![License: MIT](https://img.shields.io/${responses.badge}/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # ${responses.Title}

  # Description 
  ${responses.Description}

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usagae)
  - [Licenses](#licenses)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation 
  ${responses.Installation}

  # Usage
  ${responses.Usage}

  # Licenses
  ${responses.Licenses}

  # Contributions
  ${responses.Contributions}

  # Tests 
  ${responses.Tests}
  
  # Questions
  If you have any questions please dont hesitate to reach out to me 
  at:

  * email: ${responses.Email}

  * gitHub: https://github.com/${responses.Username}

  `;
}

module.exports = generateMarkdown;


/*
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/