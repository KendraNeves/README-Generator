const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const htmlWriter = require('./readMeWriter');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "What is your project description?"
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "What is your table to contents?"
    },
    {
      type: "input",
      name: "installation",
      message: "Installation?"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage?"
    },
    {
      type: "input",
      name: "license",
      message: "License?"
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing?"
    },
    {
      type: "input",
      name: "tests",
      message: "Tests?"
    },
    {
      type: "input",
      name: "questions",
      message: "Questions?"
    },
  ]);
}

promptUser()
  .then( (answers) => {
    // log answers object and to anlyze it- get email & profile pic from github
    // console.log(answers);

    const readMe = readMeWriter.generateReadMe(answers);
    return writeFileAsync("README.md", md);
  })
  .then( () => {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(error) {
    console.log(error);
  });
