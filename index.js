const fs = require('fs');
const inquirer = require('inquirer');

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
        choices: ['MIT License', 'GNU General Public License v3.0', 'Mozilla Public License 2.0']
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
