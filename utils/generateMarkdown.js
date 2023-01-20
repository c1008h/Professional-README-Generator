// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `<img src='https://img.shields.io/badge/license-MIT-brightgreen' alt='badge' />`
  }
  if(license === 'Apache') {
    return `<img src='https://img.shields.io/badge/license-Apache-brightgreen' alt='badge' />`
  }
  if(license === 'GNU') {
    return `<img src='https://img.shields.io/badge/license-GNU-brightgreen' alt='badge' />`
  }
  return '' 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return "https://opensource.org/licenses/MIT"
  }
  if(license === 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if(license === 'GNU') {
    return "https://opensource.org/licenses/gpl-license"
  }
  return '' 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `
## License
${renderLicenseBadge(license)}

${renderLicenseLink(license)}
  `
  }
  return '' 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Instructions
${data.instructions}

${renderLicenseSection(data.license)}

## Github
${data.github}

## Email
${data.email}
  `;
}

module.exports = generateMarkdown;

