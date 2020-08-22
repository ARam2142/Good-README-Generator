//to export license file
const badges = require('./LICENSES');

// function to generate markdown for README
function generateMarkdown(responses) {

  return `
  
  ${badges[responses.License]}
  
  # ${responses.Title}

  # Description 
  ${responses.Description}

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usagae)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  # Installation 
  ${responses.Installation}

  # Usage
  ${responses.Usage}

  # License
  This project is covered under the ${responses.License} license

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
