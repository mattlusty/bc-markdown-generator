function listToArray(list) {
  let array = list.split(",");
  return array.map((item) => item.trim());
}

function stackArrayItems(array) {
  let listString = "";
  let lastIndex = array.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    listString += array[i] + "\n";
  }
  listString += array[lastIndex];
  return listString;
}

function getLicenseBadge(license) {
  switch (license) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ibm":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case "mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

function generateMarkdown(data) {
  data.contents = stackArrayItems(listToArray(data.contents));
  data.contributors = stackArrayItems(listToArray(data.contributors));

  return `# ${data.title}
## Description
${data.description}

## Table of Contents
${stackArrayItems(listToArray(data.contents))}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${getLicenseBadge(data.license)}

## Contributors
${stackArrayItems(listToArray(data.contributors))}

## Tests
${data.tests}

## Questions
Please contact me via my github username ${data.username}
`;
}

module.exports = generateMarkdown;
