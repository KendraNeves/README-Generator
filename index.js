const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMeWriter = require('./readMeWriter');

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
      name: "installation",
      message: "How do you install your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "What will this project be used for?"
    },
    {
      type: "input",
      name: "license",
      message: "License?"
    },
    {
      type: "input",
      name: "contributing",
      message: "How to contribute to this project?"
    },
    {
      type: "input",
      name: "tests",
      message: "What tests are included in this project?"
    },
  ]);
}

promptUser()
  .then( (answers) => {
    // log answers object and to anlyze it- get email & profile pic from github
    // console.log(answers);



    const md = readMeWriter.generateReadMe(answers);
    return writeFileAsync("README.md", md);
  })
  .then( () => {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(error) {
    console.log(error);
  });
