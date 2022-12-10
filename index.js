// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions f
const questions = [
    {
        type:'input',
        name:'github',
        message:'What is your git username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?',
    },   
    {
        type:'input',
        name:'title',
        message:'What is the title of your project?',
    },
    {
        type:'input',
        name:'description',
        message:'Describe your proyect',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps for installation?',
    },
    {
        type:'input',
        name:'usage',
        message:'How do you use the aplication?',
    },
    {
        type:'list',
        name:'license',
        message:'What type of license(s) was chosen for your project?',
        choices:['MIT License', "APACHE 2.0", "None"],
    },
    {
       type:'input',
       name:'contributing',
       message:'Were there any contributions and/or collaborators to your project',
    },
    {
      type:'input',
      name:'test',
      message:'What steps were taken to test project?',
   }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => { 
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}
// Function call to initialize app
init();
