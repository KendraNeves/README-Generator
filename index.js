const inquirer = require("inquirer");
const axios = require("axios");
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
  
  .then( async (answers) => {
    const queryUrl = `https://api.github.com/users/${answers.github}`;
    response = await axios.get(queryUrl);
    answers.email = response.data.email;
    answers.pic = response.data.avatar_url; 
    return answers;
  })
  .then( (answers) => {
    const md = readMeWriter.generateReadMe(answers);
    writeFileAsync("README.md", md);
    return answers; 
  })
    

  .catch(function(error) {
    console.log(error);
  });
