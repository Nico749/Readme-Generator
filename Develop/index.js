// TODO: Include packages needed for this application
const inquirer =require('inquirer')
const fs=require('fs')
// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Brief description of the project?',
      },{
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage_info',
        message: 'What is the usage information?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test intructions?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },{
        type: 'input',
        name: 'github',
        message: 'What is your GitHub profile?',
      },{
        type: 'input',
        name: 'mail',
        message: 'What is your email?',
      }
  ])
  .then((data) => {    
const readme=  `# ${data.title}

## Description 
${data.description}

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Instructions for installation: ${data.instructions}


## Usage
Usage informations: ${data.usage_info}


## Licence


## Contributing
People who contributed to this project: ${data.contribution}

## Tests
Tests to run: ${data.test}

## Questions
If you have any questions contact me on my mail: ${data.mail} or search me on GitHub: ${data.github}
`



fs.writeFile('README.md', readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
