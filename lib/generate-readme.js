const generateReadMe = profileData => {
    const licenseString = profileData.license.join(", ");
    return `
# ${profileData.title}


## Description
${profileData.description}

## Table of Contents

[Installation](#installation) \n
[Usage](#usage) \n
[License](#license) \n
[Contributing](#contributing) \n
[Tests](#tests) \n
[Badges](#badges) \n
[Information](#information) \n

## Installation

${profileData.installation}

## Usage

${profileData.usage}

## License

${licenseString}

## Contributing

${profileData.contributing}

## Tests

${profileData.tests}

## Badges

![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)

## Information

![GitHub Profile Picture](${profileData.githubData.data.avatar_url} "GitHub Profile Picture") \n
${profileData.githubData.data.name} \n
[${profileData.username}](https://github.com/${profileData.username}) \n
${profileData.email} \n
    `
};

module.exports = generateReadMe;