function listToArray(list) {
  let array = list.split(",");
  return array.map((item) => item.trim());
}

function stackArrayItems(array) {
  let listString = "";
  let lastIndex = array.length - 1;
  console.log("listString start: ", listString);
  for (let i = 0; i < lastIndex; i++) {
    console.log("index: ", i);
    console.log("item: ", array[i]);
    listString += "* " + array[i] + "\n";
    console.log("listString: ", listString);
  }
  console.log("last item: ", array[lastIndex]);
  listString += "* " + array[lastIndex];
  console.log("listString return: ", listString);
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
  return `# ${data.title}
${getLicenseBadge(data.license)}
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
Please contact me via my git hub username ${data.username} 

https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
