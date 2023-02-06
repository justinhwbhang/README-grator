
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'BSD') {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
      return ''
  }
}

function renderLicenseSection(license) {
  if (license === 'MIT') {
      return `This project is licensed under the terms of the MIT license.`
  } else if (license === 'Apache') {
      return `This project is licensed under the terms of the Apache license.`
  } else if (license === 'GPL') {
      return `This project is licensed under the terms of the GPL license.`
  } else if (license === 'BSD') {
      return `This project is licensed under the terms of the BSD license.`
  } else {
      return `This project is not licensed.`
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
      return `https://opensource.org/licenses/MIT`
  } else if (license === 'Apache') {
      return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GPL') {
      return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === 'BSD') {
      return `https://opensource.org/licenses/BSD-3-Clause`
  } else {
      return ''
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}\n`
        + `## Description\n`
        + `${data.description}\n`
        + `## Table of Contents\n`
        + `* [Installation](#installation)\n`
        + `* [Usage](#usage)\n`
        + `* [Credits](#credits)\n`
        + `* [License](#license)\n`
        + `## Installation\n`
        + `${data.installation}\n`
        + `## Usage\n`
        + `${data.usage}\n`
        + `## Credits\n`
        + `${data.credits}\n`
        + `## License\n`
        + `${renderLicenseSection(data.license)}\n`
        + `## Contributing\n`
        + `${data.contribution}\n`
        + `## Tests\n`
        + `${data.test}.
      `
}

module.exports = generateMarkdown;
