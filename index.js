// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');
const {writeToFile} = require('./utils/generateReadme.js');
// const profileDataArgs = process.argv.slice(1);
// const [data] = profileDataArgs;
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'what is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'provide a brief decription'
            },
            {
                type: 'confirm',
                name: 'install',
                message: 'is it installable?',
                default: 'false'
            },
            {
                type: 'input',
                name: 'installInfo',
                message: 'please provide a step by step process for installation'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'what is it used for?'
            },
            {
                type: 'checkbox',
                name: 'badges',
                message: 'badges:',
                choices: [
                    '![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)',
                ]
            },
            {
                type: 'checkbox',
                name: 'contribution',
                message: 'what are the contribution guidelines?',
                choices: [
                    '![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)]'
                ]
            },
            {
                type: 'input',
                name: 'test',
                message: 'testing instructions'
            },
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'what licenses would you add?',
                choices: [
                    '[APACHE](http://www.apache.org/licenses/LICENSE-2.0)', 
                    '[MIT](https://choosealicense.com/mit/)',
                ]
            },
            {
                type: 'input',
                name: 'github',
                message: 'what is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'enter your gmail username?'
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'what languages do you know?',
                choices: ['HTML', 'CSS', 'JavaScript']
            },
            {
                type: 'input',
                name: 'credit',
                message: 'Credit?'
            }
        ]);
    };

questions().then(data => {
    return generateMarkdown(data);
})
.then(readMe => {
    return writeToFile(readMe);
})
.catch(err => {
    console.log(err);
});
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
