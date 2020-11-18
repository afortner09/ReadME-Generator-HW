const inquirer = require("inquirer");
const fs = require("fs");
const { getMaxListeners } = require("process");
// const generateMarkdown = require("./generateMarkdown");

// User's array of questions
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What license was used for this README?",
        name: "License",
      },
    {
        type: "input",
        message: "Which technologies were used to build this project?",
        name: "technologies",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm install"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      }
];

// function to write README file

inquirer.prompt(questions)
    .then(function (response) {
        writeToFile(response); 
    });

function appendToFile(fileName, readmeText) {
    fs.appendFile(fileName, readmeText, function (error) {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("README generated successfully!");
        }
    });
}   

function writeToFile(data) {
    const fileName = "./README.md";

    let readmeContents = `# ${data.title}
## Description
${data.description}
## Table of Contents
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Technologies
The following technologies were used to create this project:
\`\`\`
${data.technologies}
\`\`\`
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
## License
This project is licensed under the ${data.License} license.
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}
You can find more of my work at (https://github.com/${data.username})`

    console.log("Generating README...");

    appendToFile(fileName, readmeContents);
}


// function to initialize program
function init() {

}

// function call to initialize program
init();