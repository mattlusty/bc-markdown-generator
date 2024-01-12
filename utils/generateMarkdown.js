// function to generate markdown for README
// function arrayToList (array) {
//   let listString = "";
//   array.forEach((item)=> {
//     listString += item + ", "
//   })
//   return listString
// }

function generateMarkdown(data) {
  const contributors = data.contributors.split(",");
  console.log(data);
  console.log(contributors);
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing

## Tests
N/A

## Questions

`;
}

module.exports = generateMarkdown;
