// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  // Define your license badge URLs based on the license provided in 'license' parameter
  const licenseBadges = {
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache-2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    BSD: "https://img.shields.io/badge/License-BSD-red.svg", // Added BSD License
    GPL: "https://img.shields.io/badge/License-GPL-green.svg", // Added GPL License
    LGPL: "https://img.shields.io/badge/License-LGPL-blue.svg", // Added LGPL License
    CC: "https://img.shields.io/badge/License-CC-green.svg", // Added Creative Commons License
    Unlicense: "https://img.shields.io/badge/License-Unlicense-red.svg",
    EPL: "https://img.shields.io/badge/License-EPL-blue.svg",
    MPL: "https://img.shields.io/badge/License-MPL-green.svg",
    ISC: "https://img.shields.io/badge/License-ISC-blue.svg",
  };

  // Check if the provided license is in the 'licenseBadges' object
  if (licenseBadges[license]) {
    return `[![License](${licenseBadges[license]})](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  // Define your license URLs based on the license provided in 'license' parameter
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
    BSD: "https://opensource.org/licenses/BSD-3-Clause", // Added BSD License URL
    GPL: "https://opensource.org/licenses/GPL-3.0", // Added GPL License URL
    LGPL: "https://opensource.org/licenses/LGPL-3.0", // Added LGPL License URL
    CC: "https://creativecommons.org/licenses/", // Added Creative Commons License URL
    Unlicense: "https://opensource.org/licenses/Unlicense",
    EPL: "https://opensource.org/licenses/EPL-1.0",
    MPL: "https://opensource.org/licenses/MPL-2.0",
    ISC: "https://opensource.org/licenses/ISC",
  };

  // Check if the provided license is in the 'licenseLinks' object
  if (licenseLinks[license]) {
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `## License
    
    This project is licensed under the [${license} License](${renderLicenseLink(
    license
  )}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const contentsList = Array.isArray(data.contents)
    ? data.contents
        .map((item) => `- [${item}](#${item.toLowerCase()})`)
        .join("\n")
    : "";

  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  ${contentsList}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${
    data.license
  }-brightgreen)](https://opensource.org/licenses/${data.license})
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  ${data.questions}
  
  GitHub: [${data.username}](https://github.com/${data.username})
  
  For further questions, contact me via email: ${data.email}
  `;
}

module.exports = generateMarkdown;
