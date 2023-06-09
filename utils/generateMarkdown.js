// * function that returns a license badge based on which license is passed in
const renderLicenseBadge = (license) => {
  if (license !== 'Unlicensed') {
    return `![License](https://img.shields.io/static/v1?label=LICENSE&message=${license}&color=brightgreen)`
  } else {
    return "";
  }
}

// * function that returns the license link
const renderLicenseLink = (license) => {
  if (license !== 'Unlicensed') {
    return `[License Page](https://opensource.org/license/${license.toLowerCase()})`
  } else {
    return "";
  }
}

// * function that returns the license section of README
const renderLicenseSection = (license) => {
  if (license !== 'Unlicensed') {
    return `## License
Distributed under the ${license} License. See ${renderLicenseLink(license)} for more information.`
  } else {
    return "";
  }
}

// * function to generate markdown for README
const generateMarkdown = ({title, license, description, installation, usage, contributing, tests, github, email}) => {
  return `# ${title}

  ${renderLicenseBadge(license)}

  <details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>


## Description
${description}

## Installation
${installation}

## Usage
${usage}

${renderLicenseSection(license)}

## Contributing
${contributing}

## Tests
${tests}

## Questions
- [My GitHub Profile](https://github.com/${github})
- Email: ${email}

Please reach out via email with any additional questions you might have!
`;
}

module.exports = generateMarkdown;