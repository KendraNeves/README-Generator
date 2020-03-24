module.exports = {

    generateReadMe: (answers) => {
      return `
# ${answers.title} 
${answers.description}

<!-- badge -->
${answers.license} 

## Table of Contents: 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#questions)

## Installation  
<a name="installation"></a>
${answers.installation}

## Usage
<a name="usage"></a>
${answers.usage}

## Contributing
<a name="contributing"></a>
${answers.contributing}

## Tests
<a name="tests"></a>
${answers.tests}

## Questions? 
<a name= "questions"></a>
### email & profile pic`;
    }
}