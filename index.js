// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { title } = require('process');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }, 
        {
            type:'input',
            message: 'Describe your project', 
            name: 'description',
        },    
        {
            type:'input',
            message:'Installation instructions',
            name:'installation',
        },
        {
            type:'input',
            messge:'Usage information?',
            name:'usage',
        },
        {
            type:'input',
            message:'Contribution guidelines?',
            name:'contribution',
        },
        {
            type:'input',
            message:'Test instructions?',
            name:'instructions',
        },
        {
            type: 'list',
            message:'Choose a license.',
            name:'license',
            choices: ['MIT', 'Apache', 'GNU'],
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name:'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ]);
};

// TODO: Create a function to write README file
const generateREADME = ({ title, location, installation, usage, contribution, instructions, license, github, email }) =>
`
#${title}
<br>
##${location}
<br>
##${installation}
<br>
##${usage}
<br>
##${contribution}
<br>
##${instructions}
<br>
###${license}
<br>
###${github}
<br>
###${email}
`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err))
}

// Function call to initialize app
init();
