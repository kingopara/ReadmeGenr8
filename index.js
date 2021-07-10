// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');
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
                name: 'feature',
                message: 'is it installable?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'what is it used for?'
            },
            {
                type: 'input',
                name: 'badges',
                message: 'badges'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'what are the contribution guidelines?'
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
                choices: ['APACHE', 'BSD 3', 'BSD 2', 'MIT', 'MOZILLA', 'ECLIPSE',]
            },
            {
                type: 'input',
                name: 'github',
                message: 'what is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is your email address?'
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
                message: 'give credit to who credit is due'
            }
        ]);
    };

questions().then(data => {
    const pageReadme = generateMarkdown(data);

    fs.writeFile('./README2.md', pageReadme, err => {
        if (err) throw new Error (err);
    
    console.log(data)
    });
})

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
