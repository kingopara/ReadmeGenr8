// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
const generateMarkdown = (data) => {  
  return `
  ${data.title}

  ## description
  ${data.description}

  ##table of content
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## installation
  ${data.install}
  ${data.installInfo}

  ## languages
  ${data.languages}

  ## usage
  ${data.usage}

  ## credit
  ${data.credit}

  ## licenses
  ${data.licenses}

  ## badges
  ${data.badges}

  ## contribution
  ${data.contribution}

  ## test
  ${data.test}

  ## questions : 
  [This is my Github profile if you have any questions]
  (https://github.com/${data.github})
  ## questions : 
  [email]
  (https://${data.email}@gmail.com)

`;
}

module.exports = generateMarkdown;
