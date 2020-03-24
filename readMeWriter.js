module.exports = {

    generateReadMe: (answers) => {
      return `
# ${answers.title} 
${answers.description}

<!-- badge -->
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})


## Table of Contents: 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#questions)

## Installation  
<a name="installation"></a>
${answers.installation}

## Usage
<a name="usage"></a>
${answers.usage}

## License
<a name="license"></a>
${answers.license}

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