const inquirer =require('inquirer')
const fs=require('fs')
//storing questions 
const questions = [{
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
    name: 'license',
    message: 'What is the type of license?',
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
  }];

inquirer
  .prompt(questions)
  .then((data) => {    
//creating readme and fill it with data from user 
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

## License
License: ${data.license}

## Contributing
People who contributed to this project: ${data.contribution}

## Tests
Tests to run: ${data.test}

## Questions
If you have any questions contact me on my mail: ${data.mail} or search me on GitHub: ${data.github}`


//write the readme file
fs.writeFile('Readme.md', readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


