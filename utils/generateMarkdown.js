// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}    ${renderLicenseBadge(data.license)}

 ## Description
 ${data.description}

 ## Table of Contents 
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 
 
 ## Installation
 ${data.installation}
 
 ## Usage
 ${data.usage}

 ## License
 ${data.license}

  ## Contributing
 ${data.contributing}

  ## Tests
${data.test}

 ## Questions

 GitHub Profile: https://github.com/${data.github}
 Email: ${data.email}
 
 `;
}

module.exports = generateMarkdown;
