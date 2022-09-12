
const inquirer = require('inquirer');
const fs = require('fs');

//questions 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter project description',
      name: 'description'
    },
    {
      type: 'input',
      message: 'Enter installation instructions',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'Enter instructions for usage',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'Choose license',
      name: 'license',
      choices: ['MIT License', 'GNU General Public License', 'Mozilla Public License 2.0']
    },
    {
      type: 'input',
      message: 'Enter instructions for contributing.',
      name: 'contributing'
    },
    {
      type: 'input',
      message: 'Enter test instructions',
      name: 'testing'
    },
    {
      type: 'input',
      message: 'Enter questions information',
      name: 'questions'
    },
    {
      type: 'input',
      message: 'Enter Github username',
      name: 'github'
    },
    {
      type: 'input',
      message: 'Enter e-mail',
      name: 'email'
    },
  ])

  .then((data) => {
    console.log(data)
    //use write file to generate a readme file
    fs.writeFile('README-GENERATOR.md', (generateReadme(data)), (err) =>
      err ? console.log(err) : console.log('success!'))
  });



// pick a license badge
const licenseBadge = (data) => {
  let licenseType = `${data.license}`
  let chosenLicense = ''
  if (licenseType === 'MIT License') {
    chosenLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GNU General Public License') {
    chosenLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    chosenLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  }

  return chosenLicense;
}
// picks a license link
const licenseLink = (data) => {
  let licenseType = `${data.license}`
  let chosenLicense = ''
  if (licenseType === 'MIT License') {
    chosenLicense = "(https://opensource.org/licenses/MIT)"
  } else if (licenseType === 'GNU General Public License') {
    chosenLicense = "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (licenseType === 'Mozilla Public License 2.0') {
    chosenLicense = "(https://opensource.org/licenses/MPL-2.0)"
  }

  return chosenLicense;
};

// 
const licenseSection = (data) => {
  let licenseType = `${data.license}`
  let chosenLicense = ''
  if (licenseType === 'MIT License') {
    chosenLicense = 'MIT License'
  } else if (licenseType === 'GNU General Public License v3.0') {
    chosenLicense = 'GNU General Public License v3.0'
  } else if (licenseType === 'Mozilla Public License 2.0') {
    chosenLicense = 'Mozilla Public License 2.0'
  }
  return chosenLicense;
};



// readme template populated with user input 
const generateReadme = (data) => {
  return `
### License: ${licenseBadge(data)}, ${licenseLink(data)}

# Title: ${data.title}

## Description:
${data.description}
## Table of Contents:
* [title](#title)
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)
      
## Installation: ${data.installation}

## Usage: 
${data.usage}
## Licensing: This application is covered under ${licenseSection(data)}.

## Contributing: ${data.contributing}

## Testing Instructions: ${data.testing}

## Questions: ${data.questions}

Contact Me:

Github: https://github.com/${data.github}

Email: ${data.email}
`
};
