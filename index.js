var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    // credits
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide credits.',

    },
    // tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    var markdown = generateMarkdown(data);
    var fs = require('fs');

    fs.writeFile(fileName, markdown, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}


function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();
